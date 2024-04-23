/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calculate_all_midpoints.js
*/

function calculate_all_midpoints(min = 0, max = 5000) {
    var n = 0;
    var tmp = 0;
    var tmp23 = 0;
    var tracker = 0;
    var res = new Array(10);
    var diff = new Array(10);

    tmp23 = document.createElement("h1");
    tmp23.innerHTML = "Midpoint";
    document.getElementById("data").appendChild(tmp23);

    while (n <= 9) {
        tmp = calculate_midpoint(n.toString(), min, max);
        tmp23 = document.createElement("p");
        tmp23.innerHTML = `n = ${n}, res = ${tmp[0]}, diff = ${tmp[1]}`;
        document.getElementById("data").appendChild(tmp23);
        res[tracker] = tmp[0];
        diff[tracker] = tmp[1];
        n += 1;
        tracker += 1;
    }
    console.log(`(cam) res = ${res}, diff = ${diff}`);
    console.log(`(cam) res.length = ${res.length}, diff.length = ${diff.length}`);
    return [res, diff];
}
