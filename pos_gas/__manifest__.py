{
    'name': 'POS Gas Station Prices',
    'version': '14.0',
    'author': "Eng. Fares",
    'category': 'Operations',
    'summary': '',
    'description': """
    """,
    'depends': ['point_of_sale'],
    'data': [
        # "views/assets.xml",
        "views/pos_config_views.xml",
    ],
    'assets': {
        'point_of_sale.assets': ['/pos_gas/static/src/js/pos_custom_product_screen.js'],
        'web.assets_qweb': [
            '/pos_gas/static/src/xml/order_receipt.xml',
        ],
    },
    # 'qweb': ["static/src/xml/order_receipt.xml"],
    'installable': True,
    'application': True,
}
