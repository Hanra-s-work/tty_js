/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_change_font_weight.js
*/

function tty_change_font_weight(DEST_CLASS, SRC_ID) {
    var weight = "normal";
    var toggle_value = document.getElementById(SRC_ID).checked;
    var css_class_node = get_class_node(DEST_CLASS);

    console.log(`toggle_value: ${toggle_value}`);

    if (toggle_value == true) {
        weight = "bold";
    }

    if (css_class_node) {
        css_class_node.style.fontWeight = weight;
    }
}
