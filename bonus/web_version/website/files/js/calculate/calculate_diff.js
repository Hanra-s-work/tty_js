/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calculate_diff.js
*/

function calculate_diff(n, res_final) {
    var pi = Math.PI,
        res_diff = 0;

    res_diff = res_final - pi / 2;
    if (res_diff > 0) {
        return res_diff;
    } else {
        res_diff = res_diff * -1;
        return res_diff;
    }
}
