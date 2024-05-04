/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_setenv.js
*/

async function tty_setenv(command) {
    if (command.length == 0) {
        tty_env();
        return TTY_ERROR;
    }
    if (TTY_HELP_TOKEN.includes(command[0])) {
        tty_printf("setenv: setenv [VARIABLE] [VALUE]", true, false, false);
        return TTY_SUCCESS;
    }
    if (command.length <= 1) {
        tty_printf("setenv: Too few arguments.", true, false, false);
        return TTY_ERROR;
    }
    if (command.length > 2) {
        tty_printf("setenv: Too many arguments.", true, false, false);
        return TTY_ERROR;
    }
    TTY_ENV[command[0]] = command[1];
    return TTY_SUCCESS;
}
