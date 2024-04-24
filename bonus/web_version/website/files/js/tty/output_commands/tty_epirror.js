/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_epirror.js
*/

function tty_epirror(string) {
    tty_printf(`${TTY_ERROR_STRING}${string}`);
    tty_log(string, TTY_EPITECH_ERROR);
}
