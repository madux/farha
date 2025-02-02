/** @odoo-module **/

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { useService } from "@web/core/utils/hooks";
import { usePos } from "@point_of_sale/app/store/pos_hook";

const gasStationDict = {
    "Fuel 95 -- بنزين 95": 2.33,
    "Fuel 91 -- بنزين 91": 2.18,
    "Diesel -- ديزل": 1.15,
};

export class GasButton extends Component {
    // static template = "pos_gas.GasButton";

    setup() {
        this.pos = usePos();
        this.popup = useService("popup");
    }

    async _onClickProduct(event) {
        console.log("Product clicked", event.detail);
        await super._onClickProduct(event);

        const product = event.detail;
        console.log("Product name from event:", product.display_name);

        // Check if the product is a fuel product and the POS is configured as a gas station
        if (
            gasStationDict[product.display_name] &&
            this.env.pos.config.is_gas_station
        ) {
            // this.state.numpadMode = "price";
            this.pos.numpadMode = "price";
            this.trigger("set-numpad-mode", { mode: "price" });
            console.log("Numpad mode set to price for", product.display_name);
        }
    }
}

// ProductScreen.addControlButton({
//     component: GasButton,
//     condition: function () {
//         return this.pos.config.is_gas_station;
//     },
// })