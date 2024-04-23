/*
** EPITECH PROJECT, 2022
** B-MAT-200-PAR-2-1-110borwein-henry.letellier
** File description:
** add_a_line.js
*/

function add_a_line(ID, data, labels, fill = true, keep = 0, borderColor = "#FFFFFF") {
    const ctx = ID;
    var data = [data[keep]];
    var precompiled = compile_datasets(data, labels, fill, borderColor);
    var names = compile_names(data, 1, true);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: names,
            datasets: precompiled,
        },
        options: {
            width: 300,
            height: 300,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
