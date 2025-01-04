/** @odoo-module **/

import { WebClient } from "@web/webclient/webclient";
import { BusService } from "@web/core/bus/bus_service";
import { patch } from "@web/core/utils/patch";

patch(WebClient.prototype, "web_auto_refresh", {
    setup() {
        this._super();
        this.knownBusChannels = [];
        this.knownBusEvents = [];

        // Register the auto-refresh channel
        this.declareBusChannel();
    },

    async start() {
        const res = await this._super(...arguments);
        this.startPolling();
        return res;
    },

    willUnmount() {
        this.stopPolling();
        this._super(...arguments);
    },

    startPolling() {
        this.callService("bus_service").onNotification(this, this.busNotification);
        this.callService("bus_service").startPolling();
    },

    stopPolling() {
        const busService = this.callService("bus_service");
        busService.offNotification(this, this.busNotification);

        for (const channel of this.knownBusChannels) {
            busService.deleteChannel(channel);
        }

        for (const [eventName, eventFunction] of this.knownBusEvents) {
            this.busOff(eventName, eventFunction);
        }
    },

    busNotification(notification) {
        if (notification && notification[0]) {
            const [channel, message] = notification[0];
            if (this.knownBusChannels.includes(channel)) {
                this.callService("bus_service").trigger(channel, message);
            }
        }
    },

    busOn(eventName, eventFunction) {
        this.callService("bus_service").on(eventName, this, eventFunction);
        this.knownBusEvents.push([eventName, eventFunction]);
    },

    busOff(eventName, eventFunction) {
        this.callService("bus_service").off(eventName, this, eventFunction);
        this.knownBusEvents = this.knownBusEvents.filter(
            ([e, f]) => e !== eventName || f !== eventFunction
        );
    },

    declareBusChannel() {
        const channel = "auto_refresh";
        this.busOn(channel, (message) => {
            const actionManager = this.actionService;

            if (actionManager) {
                if (message.includes("#")) {
                    actionManager.doAction({
                        type: "ir.actions.act_url",
                        url: message,
                        target: "self",
                    });
                } else {
                    const currentController = actionManager.getCurrentController();
                    if (
                        currentController?.widget?.modelName === message &&
                        currentController.widget.mode !== "edit"
                    ) {
                        currentController.widget.reload();
                    }
                }
            }
        });

        this.addBusChannel(channel);
    },

    addBusChannel(channel) {
        if (!this.knownBusChannels.includes(channel)) {
            this.callService("bus_service").addChannel(channel);
            this.knownBusChannels.push(channel);
        }
    },
});

// odoo.define("web_auto_refresh", function (require) {
//     "use strict";
//     var WebClient = require("web.WebClient");
//     require("bus.BusService");

//     WebClient.include({
//         init: function (parent, client_options) {
//             this._super(parent, client_options);
//             this.known_bus_channels = [];
//             this.known_bus_events = [];
//         },
//         show_application: function () {
//             var res = this._super();
//             this.start_polling();
//             return res;
//         },
//         on_logout: function () {
//             var self = this;
//             this.call("bus_service", "offNotification", this, this.bus_notification);
//             _(this.known_bus_channels).each(function (channel) {
//                 this.call("bus_service", "deleteChannel", channel);
//             });
//             _(this.known_bus_events).each(function (e) {
//                 self.bus_off(e[0], e[1]);
//             });
//             this._super();
//         },
//         start_polling: function () {
//             this.declare_bus_channel();
//             this.call("bus_service", "onNotification", this, this.bus_notification);
//             this.call("bus_service", "startPolling");
//         },
//         bus_notification: function (notification) {
//             if (typeof notification[0] !== "undefined") {
//                 var channel = notification[0][0];
//                 if (this.known_bus_channels.indexOf(channel) != -1) {
//                     var message = notification[0][1];
//                     this.call("bus_service", "trigger", channel, message);
//                 }
//             }
//         },
//         bus_on: function (eventname, eventfunction) {
//             console.log(eventname, eventfunction);
//             this.call("bus_service", "on", eventname, this, eventfunction);
//             this.known_bus_events.push([eventname, eventfunction]);
//         },
//         bus_off: function (eventname, eventfunction) {
//             this.call("bus_service", "on", eventname, this, eventfunction);
//             var index = _.indexOf(this.known_bus_events, (eventname, eventfunction));
//             this.known_bus_events.splice(index, 1);
//         },
//         declare_bus_channel: function () {
//             var self = this,
//                 channel = "auto_refresh";
//             this.bus_on(channel, function (message) {
//                 var widget = self.action_manager;
//                 if (widget) {
//                     if (message.includes("#")) {
//                         widget.do_action({
//                             type: "ir.actions.act_url",
//                             url: message,
//                             target: "self",
//                         });
//                     } else if (typeof widget.controllers !== "undefined") {
//                         var controller = widget.getCurrentController();
//                         if (
//                             controller.widget.modelName == message &&
//                             controller.widget.mode != "edit"
//                         ) {
//                             controller.widget.reload();
//                         }
//                     }
//                 }
//             });

//             this.add_bus_channel(channel);
//         },
//         add_bus_channel: function (channel) {
//             if (this.known_bus_channels.indexOf(channel) == -1) {
//                 this.call("bus_service", "addChannel", channel);
//                 this.known_bus_channels.push(channel);
//             }
//         },
//     });
// });
