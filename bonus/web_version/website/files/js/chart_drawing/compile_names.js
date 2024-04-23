/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** compile_names.js
*/

function compile_names(data, step = 100, value = false) {
    var compiled = new Array(data.length);
    var i = 0;

    for (; i < data[0].length; i += step) {
        if (value == false) {
            compiled[i] = `V${i}`;
        } else {
            compiled[i] = `${data[0][i]}`;
        }
    }
    return compiled;
}
