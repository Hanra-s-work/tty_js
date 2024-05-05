/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_unsetenv.js
*/

async function tty_unsetenv(command) {
    if (command.length < 1) {
        tty_printf("unsetenv: Too few arguments.", true, false, false);
        return TTY_ERROR;
    }
    if (TTY_HELP_TOKEN.includes(command[0])) {
        tty_printf("unsetenv: unsetenv VARIABLE1 [etc...]", true, false, false);
        return TTY_SUCCESS;
    }
    for (let i = 1; i < command.length; i++) {
        if (command[i] in TTY_ENV)
            delete TTY_ENV[command[i]];
    }
    return TTY_SUCCESS;
}
