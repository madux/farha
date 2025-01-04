{
    "name": "Request Managment",
    "version": "17.0.1.0.1",
    "author": "Hadooc",
    "license": "AGPL-3",
    "depends": ["hr", "mail", "base_user_role", "calendar"],
    "data": [
        "security/request_security.xml",
        "security/ir.model.access.csv",
        "data/request_data.xml",
        "views/menu.xml",
        "views/request_views.xml",
        "views/request_stage_views.xml",
        "views/mail_activity_view.xml",
        "wizard/confirm_action_wizard_views.xml",
    ],
    "demo": [],
    "qweb": [],
    "installable": True,
    "application": True,
}