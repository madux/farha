{
    "name": "Notes in POS receipt",
    "version": "17.0.0.0.0",
    "summary": """
      Add notes in POS receipt
       """,
    "category": "Point of Sale",
    "author": "Odox SoftHub, Hadooc",
    "website": "https://www.odoxsofthub.com",
    "depends": ["pos_restaurant"],
    "data": [
        # "views/assets.xml",
        "views/pos_order_views.xml",
        "views/pos_config_views.xml",
    ],
    'assets': {
        'point_of_sale.assets': [
        '/pos_receipt_note/static/src/js/model.js',
        '/pos_receipt_note/static/src/js/pos_notes.js',
        ],
        'web.assets_qweb': [
            '/pos_gas/static/src/xml/ReceiptScreen.xml',
        ],
        
    },
    # "qweb": ["static/src/xml/ReceiptScreen.xml"],
    "images": ["static/description/thumbnail.gif"],
    "license": "LGPL-3",
    "installable": True,
    "application": True,
}
