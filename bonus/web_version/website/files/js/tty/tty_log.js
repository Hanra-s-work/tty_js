/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_log.js
*/

function getDateAndTime() {
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // Get the date in YYYY-MM-DD format
    const time = now.toTimeString().slice(0, 8); // Get the time in HH:MM:SS format
    return `[${date}:${time}] `;
}

function tty_log(msg, run_status = 0) {
    var log = document.getElementById('input_commands');
    var p = document.createElement('pre');
    var date = getDateAndTime();
    p.classList.add("tty_line_format");
    p.textContent = `${date}command status: ${run_status}, command: ${JSON.stringify(msg)}`;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
}

function clear_log() {
    var log = document.getElementById('input_commands');
    log.innerHTML = '';
}
