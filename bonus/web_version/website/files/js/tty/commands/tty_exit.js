/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_exit.js
*/

async function tty_exit(command = "") {
    document.getElementById("web-terminal").disabled = true;
    document.getElementById("web-terminal-form").ariaDisabled(true);
    document.getElementById("web-terminal-form").ariaHidden(true);
    return TTY_SUCCESS;
}
