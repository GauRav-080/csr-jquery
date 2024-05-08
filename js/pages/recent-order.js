import { storageService } from "../utils/config.js";

export var recent_orders = {
    init: function () {

        const aJouralTemp =
            [
                { text: 'Jaico Publishing House', id: 0 },
                { id: 1, text: ' Westland Publications' },
                { text: 'Roli Books', id: 2 },
                { text: 'Hachette India', id: 3 },
                { text: 'Aleph Book Company', id: 4 },
                { text: 'Scholastic India', id: 5 },
                { text: 'Tata MacgrawHill', id: 6 },
                { text: 'Peerson India', i: 7 },
            ]

        $("#recent-order-type").select2({
            "placeholder": "Select",
            closeOnSelect: false,
            data: aJouralTemp,
        });
        $("#recent-order-gate").select2({
            "placeholder": "Select",
            closeOnSelect: false,
            data: aJouralTemp,
        });
        $("#recent-order-publisher").select2({
            "placeholder": "Select",
            closeOnSelect: false,
            data: aJouralTemp,
        });
        $("#recent-order-production-type").select2({
            "placeholder": "Select",
            closeOnSelect: false,
            data: aJouralTemp,

        });
        $("#recent-order-submission-type").select2({
            "placeholder": "Select",
            closeOnSelect: false,
            data: aJouralTemp,
        });
        $("#order_toDate").datepicker({
            changeMonth: true,
            changeYear: true
        });
        $("#order_endDate").datepicker({
            changeMonth: true,
            changeYear: true
        });

        $("#accordion").accordion({
            collapsible: true
        });

        $(`#dataTables`).DataTable();
    },


    onPageBeforeDestroy: function () {
        this.destroy();
    },
    destroy: function () {

    },
};
