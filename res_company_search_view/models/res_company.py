from odoo import fields, models
from odoo.tools import SQL


class ResCompany(models.Model):
    _inherit = "res.company"

    country_id = fields.Many2one(search="_search_country")

    def _search_country(self, operator, value):
        return [("partner_id.country_id", operator, value)]

    def _field_to_sql(self, alias, field_expr, query=None) -> SQL:
        if field_expr == "country_id":
            partner_alias = query.make_alias(alias, "res_company")
            if partner_alias not in query._tables:
                query.add_join(
                    "LEFT JOIN",
                    partner_alias,
                    "res_partner",
                    SQL(
                        "%s = %s",
                        SQL.identifier(partner_alias, "id"),
                        SQL.identifier(alias, "partner_id"),
                    ),
                )
            return SQL.identifier(partner_alias, "country_id")
        else:
            return super()._field_to_sql(alias, field_expr, query)
