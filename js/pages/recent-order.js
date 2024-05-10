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
            maxDate: new Date(),
            changeMonth: true,
            changeYear: true
        });
        $("#order_endDate").datepicker({
            maxDate: new Date(),
            changeMonth: true,
            changeYear: true
        });

        $("#accordion").accordion({
            collapsible: true
        });

        var table = $('#dataTables').DataTable({
            colReorder: true,
            ordering: true,
            // orderCellsTop: true,
             fixedHeader: true,

            lengthMenu: [
                [5, 10, 25, 50, 100, -1],
                [5, 10, 25, 50, 100, 'All']
            ],
            layout: {
                topStart: {

                    buttons: [
                        {
                            text: 'Hide Filter',
                            class: 'filter-btn',
                            action: function (e, dt, node, config) {
                                var button = this; // Reference to the button

                                $('#dataTables thead tr:eq(1) th').toggle();

                                if (button.text().trim() === 'Filter') {
                                    button.text('Hide Filter');
                                } else {
                                    button.text('                                                                                                                                                                                                           Filter');
                                }
                            }
                        }
                    ]
                }
            }
        });


     
        $('#dataTables thead tr').appendTo('#dataTables thead');
        $('#dataTables thead tr:eq(1) th').each(function (i) {
            var title = $(this).text();
            $(this).html('<input type="text" class="column-search" placeholder="Search ' + title + '" />');

            $('input', this).on('keyup change', function () {
                if (table.column(i).search() !== this.value) {
                    table
                        .column(i)
                        .search(this.value)
                        .draw();
                }
            });
        });






    },


    onPageBeforeDestroy: function () {
        this.destroy();
    },
    destroy: function () {

    },
};
