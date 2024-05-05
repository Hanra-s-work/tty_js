/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_change_font_style.js
*/

function tty_change_font_style(DEST_CLASS, SRC_ID) {
    var style = "normal";
    var css_class_node = get_class_node(DEST_CLASS);
    var toggle_value = document.getElementById(SRC_ID).checked;

    if (toggle_value == true) {
        style = "italic";
    }

    if (css_class_node) {
        css_class_node.style.fontStyle = style;
    }

}
