/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_exit.js
*/

async function tty_exit(command = "") {
    document.getElementById("web-terminal-input").disabled = true;
    document.getElementById("web-terminal-input").placeholder = "Input is disabled";
    return TTY_SUCCESS;
}
