/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calculate_midpoint.js
*/

function calculate_midpoint(n = 1, min = 0, max = 5000) {
    var diff = 0,
        io = 0;
    var b = 0.5;
    var a = parseFloat(min);
    var my_step = 0.5;
    var res = 0,
        res_final = 0;

    while (b <= max) {
        res = parseFloat((b - a) * calculate_borwein(n, (a + b) / 2));
        res_final += parseFloat(res);
        a = parseFloat(a + my_step);
        b = parseFloat(b + my_step);
    }
    io = res_final;
    diff = calculate_diff(n, res_final);
    console.log(`(cm) diff = ${diff}, io = ${io}`);
    return [io, diff];
}
