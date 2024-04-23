/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calculate_simpson.js
*/

function calculate_simpson(n = 1, min = 0, max = 5000) {
    var diff = 0,
        io = 0;
    var b = 0.5;
    var a = parseFloat(min);
    var my_step = 0.5;
    var res = 0,
        res_final = 0;
    var part1 = 0,
        part2 = 0,
        part3 = 0;

    while (b <= max) {
        part1 = parseFloat((b - a) / 6);
        part2 = 4 * calculate_borwein(n, (a + b) / 2);
        part3 = parseFloat(calculate_borwein(n, a)) + part2 + calculate_borwein(n, b);
        res = parseFloat(part1 * part3);
        res_final += parseFloat(res);
        a = parseFloat(a + my_step);
        b = parseFloat(b + my_step);
    }
    io = res_final;
    diff = calculate_diff(n, res_final);
    console.log(`(cs) diff = ${diff}, io = ${io}`);
    return [io, diff];
}
