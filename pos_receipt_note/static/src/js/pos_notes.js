/** @odoo-module **/

import { ProductScreen } from 'point_of_sale.ProductScreen';
import { PosComponent } from 'point_of_sale.PosComponent';
import { useListener } from '@web/core/utils/hooks';
import { patch } from '@web/core/utils/patch';

class OrderlineNoteButtonExt extends PosComponent {
    constructor() {
        super(...arguments);
        useListener('click', this.onClick);
    }

    get currentOrder() {
        return this.env.pos.get_order();
    }

    get selectedOrderline() {
        return this.currentOrder?.get_selected_orderline();
    }

    async onClick() {
        if (!this.selectedOrderline) return;

        const { confirmed, payload: inputNote } = await this.showPopup('TextAreaPopup', {
            startingValue: this.selectedOrderline.get_note(),
            title: this.env._t('Add Note'),
        });

        if (confirmed) {
            this.selectedOrderline.set_note(inputNote);
        }
    }
}

OrderlineNoteButtonExt.template = 'OrderlineNoteButton';

// Patch ProductScreen to add the custom button
patch(ProductScreen.prototype, 'pos_receipt_note.notes', {
    setup() {
        this._super(...arguments);
    },
    get isOrderlineNotesEnabled() {
        return this.env.pos.config.iface_orderline_pos_order_notes;
    },
    controlButtons() {
        const buttons = this._super();
        if (this.isOrderlineNotesEnabled) {
            buttons.push({
                component: OrderlineNoteButtonExt,
            });
        }
        return buttons;
    },
});
