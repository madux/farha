# -*- coding: utf-8 -*-

{
    "name": "Saudi Arabia e-invoice Phase 2 (Integration Phase)",
    "version": "17.0",
    "category": "Accounting & Finance",
    "license": "OPL-1",
    "summary": "Generates electronic invoicing for Saudi Arabia distribution according to ZATCA requirements",
    "price": 850.0,
    "currency": "USD",
    "author": "HMPRO",
    "website": "",
    # "depends": ["contacts", "account", "l10n_sa_invoice", "account_debit_note"],
    "depends": ["contacts", "account", "account_debit_note"],
    "data": [
        "views/account_move.xml",
        "views/account_tax_views.xml",
        "views/partner_view.xml",
        "views/company_view.xml",
        "views/res_config_settings_views.xml",
        "data/invoice_template.xml",
        "security/ir.model.access.csv",
        # "views/report_invoice.xml",
        # "views/assets.xml",
    ],
    'assets': {
        'web.assets_backend': [
        '/l10n_sa_e-invoice/static/src/css/field.scss',
        ],
        
    },
    "installable": True,
    "images": ["static/description/banner.png"],
    "live_test_url": "https://youtu.be/bvcZhKrMFXY",
}
