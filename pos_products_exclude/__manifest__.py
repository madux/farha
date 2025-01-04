{
    "name": "POS Products exclude",
    "version": "17.0",
    "category": "Sales/Point of Sale",
    "author": "Hadooc",
    "license": "AGPL-3",
    "depends": ["point_of_sale"],
    "data": [
        # "views/assets.xml", 
        "views/product_template_views.xml"],
    # "qweb": ["static/src/xml/*.xml"],
    "assets" : {
        'point_of_sale.assets': ['/pos_products_exclude/static/src/js/models.js'],
        'web.assets_qweb': [
            '/pos_gas/static/src/xml/*.xml',
        ],
    },
    "installable": True,
}
