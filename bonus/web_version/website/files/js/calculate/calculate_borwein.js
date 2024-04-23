/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calc_borwein.js
*/

function calculate_borwein(iteration = 0, value = 0.5 / 2) {
    var sub_fraction = 0;
    var final_res = 0,
        res = 0,
        top = 0,
        bottom = 0;
    var k = 0;

    if (value === 0) {
        return 1;
    }

    if (iteration === 0) {
        return 1;
    }

    for (k = 0; k <= iteration; k++) {
        sub_fraction = parseFloat(value / (2 * k + 1));
        top = Math.sin(sub_fraction);
        bottom = sub_fraction;
        res = parseFloat(top / bottom);
        if (k === 0) {
            final_res = res;
        } else {
            final_res = parseFloat(final_res * res);
        }
    }
    return final_res;
}
