let search_field = document.getElementById("search_field"),
    submit__svg = document.querySelector("button[type='submit'] .svg_button"),
    add_search = document.querySelector(".add_search"),
    add_search__svg = add_search.querySelector("svg"),
    cross = document.querySelector(".cross")

{
    const DEFAULT_SEARCH_FIELD_BORDER_RADIUS = search_field.style.borderRadius,
          DEFAULT_SUBMIT_SVG_BORDER_LEFT = submit__svg.style.borderLeft,
          EMPTY_FILL = add_search__svg.getAttribute("fill"),
          LIGHT_FILL = '#ffffff',
          EMPTY = "0"

    function set_light_form() {
        search_field.style.borderRadius = EMPTY

        add_search.style.zIndex = "1"
        submit__svg.style.borderLeft = "1px ridge #2f7bec"
        add_search__svg.style.borderRadius = "40px 0 0 40px"
        add_search__svg.style.borderLeft = "1px ridge #2f7bec"
        add_search__svg.style.borderTop = "1px ridge #2f7bec"
        add_search__svg.style.borderBottom = "1px ridge #2f7bec"
        add_search__svg.setAttribute("fill", LIGHT_FILL)
    }
    function set_default_form() {
        search_field.style.borderRadius = DEFAULT_SEARCH_FIELD_BORDER_RADIUS
        submit__svg.style.borderLeft = DEFAULT_SUBMIT_SVG_BORDER_LEFT

        add_search__svg.style.border = EMPTY
        add_search.style.zIndex = EMPTY
        add_search__svg.setAttribute("fill", EMPTY_FILL)
    }

    search_field.addEventListener("focus", set_light_form)
    search_field.addEventListener("blur", set_default_form)
}

{
    function cross_display() {
        const parsed_padding_right = 66,
              indent = 29
        search_field.style.paddingRight = `${parsed_padding_right + indent}px`
        cross.classList.remove('no-display')
    }
    function cross_display_or_no_display() {
        if (!search_field.value) cross.classList.add('no-display')
    }
    function no_display_cross() {cross.classList.add('no-display')}

    cross.addEventListener('click', no_display_cross)
    search_field.addEventListener("keydown", cross_display)
    search_field.addEventListener("keyup", cross_display_or_no_display)
    search_field.addEventListener("blur", cross_display_or_no_display)
}