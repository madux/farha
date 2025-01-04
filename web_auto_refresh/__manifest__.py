{
    "name": "Auto Refresh",
    "version": "17.0",
    "author": "Hadooc,Fisher Yu, Smile",
    "category": "web",
    "depends": ["web", "bus", "mail", "base_automation"],
    # "data": ["views/webclient_templates.xml"],
    
    'assets': {
        'point_of_sale.assets': [
        '/web_auto_refresh/static/src/js/web_auto_refresh.js'
        ],
    },
    "license": "AGPL-3",
    "installable": True,
    "application": False,
}