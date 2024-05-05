/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** update_canvas_css.js
*/

function update_canvas_css(IDS) {
    var i = 0;
    var width = "300px";
    var height = "600px";

    for (; i < IDS.length; i++) {
        IDS[i].style.width = width;
        IDS[i].style.height = height;
        IDS[i].width = width;
        IDS[i].height = height;
    }
}
