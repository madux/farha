/** @odoo-module **/

import { Orderline } from 'point_of_sale.models';
import { patch } from '@web/core/utils/patch';

patch(Orderline.prototype, 'pos_receipt_note.models', {
    export_for_printing() {
        const res = this._super();
        res.note = this.note;
        return res;
    },
});

// odoo.define("pos_receipt_note.models", function (require) {
//     "use strict";

//     var models = require("point_of_sale.models");

//     var _super_orderline = models.Orderline.prototype;
//     models.Orderline = models.Orderline.extend({
//         export_for_printing: function () {
//             var res = _super_orderline.export_for_printing.apply(this, arguments);
//             res.note = this.note;
//             return res;
//         },
//     });
// });
