/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** compile_datasets.js
*/

function compile_datasets(data, labels, fill = true, borderColor = "#FFFFFF") {
    var compiled = new Array(data.length);
    var i = 0;

    for (; i < data.length; i++) {
        compiled[i] = {
            label: labels[i],
            data: data[i],
            borderWidth: 1,
            borderColor: borderColor,
            fill: fill,
            tension: 0.5,
        };
    }
    return compiled;
}
