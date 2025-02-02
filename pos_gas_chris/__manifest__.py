# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': "Point of Sale - Gas Station",
    'version': '2.0',
    'category': 'Sales/Point Of Sale',
    'sequence': 6,
    'summary': 'Used to upate the value of point of sales qty',
    'depends': ['point_of_sale'],
    'author': 'Chris Maduka',
    'data': [ 
        'views/pos_config_view.xml',
    ],
    # 'demo': [
    #     'data/pos_loyalty_demo.xml',
    # ],
    'installable': True,
    'auto_install': True,
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_gas_chris/static/src/**/*',
        ],
        # 'web.assets_tests': [
        #     'pos_loyalty/static/tests/tours/**/*',
        # ],
    },
    'license': 'LGPL-3',
}
