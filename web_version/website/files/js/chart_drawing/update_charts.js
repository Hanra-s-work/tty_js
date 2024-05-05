/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** update_charts.js
*/

function update_charts(n = 1, min = 0, max = 5000) {
    var labels = ["I#", "diff"];

    var simpson = calculate_simpson(n, minimum, maximum);
    var midpoint = calculate_midpoint(n, minimum, maximum);
    var trapezoid = calculate_trapezoid(n, minimum, maximum);

    var simpson_histogram_data = calculate_all_simpsons(min, max);
    var midpoint_histogram_data = calculate_all_midpoints(min, max);
    var trapezoid_histogram_data = calculate_all_trapezoid(min, max);

    var simpson_histogram = document.getElementById("simpsons_line_chart");
    var midpoint_histogram = document.getElementById("midpoint_lines_chart");
    var trapezoid_histogram = document.getElementById("trapezoidal_lines_chart");

    var simpson_pie_char = document.getElementById("simpsons_chart");
    var midpoint_pie_char = document.getElementById("midpoint_chart");
    var trapezoid_pie_char = document.getElementById("trapezoidal_chart");

    add_a_line(simpson_histogram, simpson_histogram_data, labels, true, 0, 'rgb(75, 255, 255)');
    add_a_line(midpoint_histogram, midpoint_histogram_data, labels, true, 0, 'rgb(75, 255, 255)');
    add_a_line(trapezoid_histogram, trapezoid_histogram_data, labels, true, 0, 'rgb(75, 255, 255)');

    add_a_line(simpson_pie_char, simpson_histogram_data, labels, true, 1, 'rgb(75, 75, 255)');
    add_a_line(midpoint_pie_char, midpoint_histogram_data, labels, true, 1, 'rgb(75, 75, 255)');
    add_a_line(trapezoid_pie_char, trapezoid_histogram_data, labels, true, 1, 'rgb(75, 75, 255)');

    update_canvas_css([simpson_histogram, midpoint_histogram, trapezoid_histogram]);

    console.log(`midpoint = ${midpoint}, trapezoid = ${trapezoid}, simpson = ${simpson}`);
}
