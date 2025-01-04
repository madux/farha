{
    "name": "Overtime Management",
    "version": "17.0.1.0.4",
    "author": "Hadooc",
    "depends": [
        "hr_base",
        "hr_public_holidays",
        "request_refuse",
        "hr_employee_number",
        "report_xlsx",
    ],
    "data": [
        "security/overtime_security.xml",
        "security/ir.model.access.csv",
        "data/overtime_data.xml",
        "data/mail_data.xml",
        "views/menu.xml",
        "views/hr_overtime_mandate_views.xml",
        "views/hr_overtime_views.xml",
        "views/hr_overtime_setting_views.xml",
        "views/request_stage_views.xml",
        "wizard/hr_overtime_resume_wizard_views.xml",
        "report/hr_overtime_templates.xml",
        "report/hr_overtime_reports.xml",
    ],
    "demo": ["data/overtime_demo.xml"],
    "installable": True,
    "license": "AGPL-3",
}
