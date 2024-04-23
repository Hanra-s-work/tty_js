/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calculate_midpoints_points.js
*/

function calculate_midpoints_points(n = 1, min = 0, max = 5000) {
    var io = new Array(max + 1);
    var diff = new Array(max + 1);
    var tracker = 0;
    var b = 0.5;
    var a = parseFloat(min);
    var my_step = 0.5;
    var res = 0;
    debugger;

    while (b <= max) {
        res = parseFloat((b - a) * calculate_borwein(n, (a + b) / 2));
        io[tracker] = res;
        diff[tracker] = parseFloat(calculate_diff(n, res));
        a = parseFloat(a + my_step);
        b = parseFloat(b + my_step);
        tracker += 1;
    }
    debugger;
    console.log(`(cm) diff = ${diff}, io = ${io}`);
    return [io, diff];
}
