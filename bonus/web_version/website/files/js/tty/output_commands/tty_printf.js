/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_printf.js
*/

function tty_to_html(html) {
    return html.replace(/\t/g, TTY_TAB_STRING)
        .replace(/\n/g, "<br>")
        .replace(/\0/g, "<br>")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    // .replace(/\a/g, "(bell)")
    // .replace(/    /g, TTY_TAB_STRING)
    // .replace(/ /g, "&nbsp;")
    // .replace(/\b/g, "<br>")
    // .replace(/\v/g, "<br>")
    // .replace(/\f/g, "<br>")
    // .replace(/\r/g, "<br>")
    // .replace(/\x1B/g, "<br>")
    // .replace(/\x1C/g, "<br>")
    // .replace(/\x1D/g, "<br>")
    // .replace(/\x1E/g, "<br>")
    // .replace(/\x1F/g, "<br>")
    // .replace(/\x7F/g, "<br>")
}

function printf(string, newline = true, pre = false, prettify = false) {
    //format, write to terminal
    let nl = newline ? "<br>" : "";
    var node = "";
    if (prettify) {
        console.log(`(bef) string: ${JSON.stringify(string)}`);
        string = tty_to_html(string);
        console.log(`(aft) string: ${JSON.stringify(string)}`);
    }
    if (!pre) {
        node = tty_html_element("span", string);
    } else {
        node = tty_html_element("pre", string);
    }
    tty_display(`${node}${nl}`);
};

function tty_printf(string, newline = true, pre = false, prettify = false) {
    printf(string, newline, pre, prettify);
}
