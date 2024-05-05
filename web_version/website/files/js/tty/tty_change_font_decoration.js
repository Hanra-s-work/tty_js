/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_change_font_decoration.js
*/

function tty_change_font_decoration(DEST_CLASS, SRC_ID) {
    var decoration = "none";
    var css_class_node = get_class_node(DEST_CLASS);
    var toggle_value = document.getElementById(SRC_ID).checked;

    if (toggle_value == true) {
        decoration = "underline";
    }

    if (css_class_node) {
        css_class_node.style.textDecoration = decoration;
    }
}
