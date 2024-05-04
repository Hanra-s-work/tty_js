/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_env.js
*/

async function tty_env(command) {
    if (command.length > 1) {
        tty_printf("env: too many arguments", true, false, false);
        return TTY_ERROR;
    }
    for (let key in TTY_ENV) {
        tty_printf(key + "=" + TTY_ENV[key], true, false, true);
    }
}
