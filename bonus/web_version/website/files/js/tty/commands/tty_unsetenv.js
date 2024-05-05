/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_unsetenv.js
*/

function tty_unsetenv_help() {
    tty_printf("unsetenv: unsetenv VARIABLE1 [etc...]", true, false, false);
}

function tty_remove_variables(command) {
    for (let i = 0; i < command.length; i++) {
        if (TTY_ENV.hasOwnProperty(command[i])) {
            tty_printf(`unsetenv: Key '${command[i]}' found, deleting`);
            delete TTY_ENV[command[i]];
        } else {
            tty_printf(`unsetenv: Variable '${command[i]}' not found.`, true, false, false);
        }
    }
}

async function tty_unsetenv(command) {
    if (command.length < 1) {
        tty_printf("unsetenv: Too few arguments.", true, false, false);
        return TTY_ERROR;
    }
    if (TTY_HELP_TOKEN.includes(command[0])) {
        tty_unsetenv_help();
        return TTY_SUCCESS;
    }
    tty_remove_variables(command);
    return TTY_SUCCESS;
}
