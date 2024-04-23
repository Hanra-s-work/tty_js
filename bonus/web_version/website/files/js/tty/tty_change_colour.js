/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_change_colour.js
*/

function change_node(ID_OR_CLASS, COLOUR, FOREGROUND) {
    var destination = document.getElementById(ID_OR_CLASS);
    console.log("In change node");

    if (!destination) {
        destination = get_class_node(ID_OR_CLASS);
    }
    if (!destination) {
        console.error("The destination string is incorrect, does not exists or is neither a class nor and id.");
    }
    if (FOREGROUND) {
        destination.style.color = COLOUR;
    } else {
        destination.style.backgroundColor = COLOUR;
    }
    console.log("Out of change node");
}

function change_colour(DEST_ID_OR_CLASS, SRC_ID = "", COLOUR = "#FF0000", FOREGROUND = true) {
    var i = 0;
    var colour = "";
    if (SRC_ID != "") {
        colour = document.getElementById(SRC_ID).value;
    } else {
        colour = COLOUR;
    }
    console.log(colour);
    if (Array.isArray(DEST_ID_OR_CLASS)) {
        for (; i < DEST_ID_OR_CLASS.length; i++) {
            console.log("Data is an array");
            change_node(DEST_ID_OR_CLASS[i], colour, FOREGROUND);
        }
    } else {
        console.log("Data is a string");
        change_node(DEST_ID_OR_CLASS, colour, FOREGROUND);
    }
}
