/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** calculate_all.js
*/

function calculate_all() {
    var minimum = document.getElementById("minimum").value,
        maximum = document.getElementById("maximum").value,
        n = document.getElementById("n").value;

    console.log(`minimum = ${minimum}, maximum = ${maximum}, n = ${n}`);

    var midpoint = calculate_midpoint(n, minimum, maximum);
    var trapezoid = calculate_trapezoid(n, minimum, maximum);
    var simpson = calculate_simpson(n, minimum, maximum);

    console.log(`midpoint = ${midpoint}, trapezoid = ${trapezoid}, simpson = ${simpson}`);

    document.getElementById("midpoint_io").innerHTML = midpoint[0].toFixed(10);
    document.getElementById("midpoint_diff").innerHTML = midpoint[1].toFixed(10);

    document.getElementById("trapezoidal_io").innerHTML = trapezoid[0].toFixed(10);
    document.getElementById("trapezoidal_diff").innerHTML = trapezoid[1].toFixed(10);

    document.getElementById("simpson_io").innerHTML = simpson[0].toFixed(10);
    document.getElementById("simpson_diff").innerHTML = simpson[1].toFixed(10);

    document.getElementById("instance_mid").innerHTML = n;
    document.getElementById("instance_trap").innerHTML = n;
    document.getElementById("instance_simp").innerHTML = n;
}
