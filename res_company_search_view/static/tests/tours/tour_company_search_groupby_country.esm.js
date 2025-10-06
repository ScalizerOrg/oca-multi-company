import {registry} from "@web/core/registry";

registry
    .category("web_tour.tours")
    .add("res_company_search_view.tour_company_search_groupby_country", {
        steps: () => [
            {
                trigger: "button.o_searchview_dropdown_toggler",
                run: "click",
            },
            {
                trigger: "span.o-dropdown-item:contains('Country')",
                run: "click",
            },
            // At least a single grouping should be present.
            {
                trigger: "th.o_group_name",
            },
            {
                trigger: "button.o_facet_remove",
                run: "click",
            },
            {
                trigger: "button.o_searchview_dropdown_toggler",
                run: "click",
            },
            {
                trigger: "span.o_add_custom_filter",
                run: "click",
            },
            // Default field should be "Country".
            {
                trigger: "div.o_model_field_selector_value:contains('Country')",
            },
            {
                trigger: "div.o_record_autocomplete_with_caret > input",
                run: "edit Belgium",
            },
            {
                trigger: "a.dropdown-item:contains('Belgium')",
                run: "click",
            },
            {
                trigger: "div.o_tag_badge_text:contains('Belgium')",
            },
            {
                trigger: "button.btn-primary:contains('Search')",
                run: "click",
            },
            // At least one record present.
            {
                trigger: "td.o_data_cell:contains('Alpha Logistics')",
            },
        ],
    });
