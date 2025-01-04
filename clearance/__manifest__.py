{
    "name": "Clearance",
    "version": "17.0.0.0.6",
    "author": "Eng. Fares",
    "depends": [
        "sale_management",
        "res_company_fax",
        "account_state",
        "account_payment_state",
        "account_invoice_pricelist",
    ],
    "data": [
        "security/clearance_security.xml",
        "security/ir.model.access.csv",
        "data/clearance_data.xml",
        "report/clearance_receipt_notebook_template.xml",
        "report/clearance_request_reports.xml",
        "report/translation_report_template.xml",
        # "views/templates.xml",
        "views/clearance_request_views.xml",
        "views/clearance_setting_views.xml",
        "views/res_company_views.xml",
        "views/res_partner_views.xml",
        "views/payment_views.xml",
        "views/account_move_views.xml",
        "views/clearance_request_shipment_type_views.xml",
        "wizard/clearance_request_assign_views.xml",
    ],
    # "qweb": [
    #     "static/src/xml/widgets.xml",
    # ],
    # TO BE LOADED AS ASSET-BACKEND 
    # <script type="text/javascript" src="/clearance/static/src/js/render_header_cell.js" />
    #         <script type="text/javascript" src="/clearance/static/src/js/widget_shipping_agent_data.js" />
    #         <script type="text/javascript" src="/clearance/static/src/js/widget_customs_declaration_data.js" />
    #          <script type="text/javascript" src="/clearance/static/src/js/widget_is_not_goods_data.js" />
    #         <script type="text/javascript" src="/clearance/static/src/js/widget_is_equals_weight.js" />
    #         <script type="text/javascript" src="/clearance/static/src/js/widget_is_not_customs_data.js" />
    "installable": True,
    "license": "AGPL-3",
}
