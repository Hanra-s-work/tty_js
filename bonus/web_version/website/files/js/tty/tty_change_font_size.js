/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_change_font_size.js
*/

function tty_change_font_size(DEST_CLASS, SRC_ID) {
    var css_class_node = get_class_node(DEST_CLASS);
    var size = document.getElementById(SRC_ID).value;

    if (css_class_node) {
        css_class_node.style.fontSize = size + 'px';
    }
}

