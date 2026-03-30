import {registry} from "@web/core/registry";

registry
    .category("web_tour.tours")
    .add("res_company_search_view.tour_company_edit_address", {
        steps: () => [
            {
                trigger: "input#street_0",
                run: "edit ASDF",
            },
            {
                trigger: "body",
                run: () => document.activeElement.blur(),
            },
            {
                trigger: "button.o_form_button_save",
                run: "click",
                expectUnloadPage: true,
            },
            {
                trigger: "div.o_form_sheet",
            },
        ],
    });
