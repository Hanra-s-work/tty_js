/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_pwd.js
*/

function tty_pwd_help() {
    tty_printf("pwd: pwd", true, false, false);
    printf("Usage: ./pwd [OPTION]...", true, false, false);
    printf("Print the full filename of the current working directory.", true, false, false);
    printf("", true, false, false);
    printf("\t-L, --logical\t use PWD from environment, even if it contains symlinks", true, false, true);
    printf("\t-P, --physical\tavoid all symlinks", true, false, true);
    printf("\t\t--help\t\tdisplay this help and exit", true, false, true);
    printf("\t\t--version\t output version information and exit", true, false, true);
    printf("", true, false, false);
    printf("If no option is specified, -P is assumed.", true, false, false);
    printf("", true, false, false);
    printf("NOTE: your shell may have its own version of pwd, which usually supersedes", true, false, false);
    printf("the version described here.  Please refer to your shell's documentation", true, false, false);
    printf("for details about the options it supports.", true, false, false);
    printf("", true, false, false);
    printf("GNU coreutils online help: <https://www.gnu.org/software/coreutils/>", true, false, true);
    printf("Full documentation <https://www.gnu.org/software/coreutils/pwd>", true, false, true);
    printf("or available locally via: info '(coreutils) pwd invocation'", true, false, false);
}

function tty_pwd_display(command) {
    if (command[0] === "-L" || command[0] === "--logical") {
        tty_printf(TTY_ENV["PWD"], true, false, false);
    } else if (command[0] === "-P" || command[0] === "--physical") {
        tty_printf(TTY_ENV["PWD"], true, false, false);
    } else if (command[0] === "--version") {
        tty_printf("pwd (GNU coreutils) 8.32", true, false, false);
        tty_printf("License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.", true, false, true);
        tty_printf("This is free software: you are free to change and redistribute it.", true, false, false);
        tty_printf("There is NO WARRANTY, to the extent permitted by law.", true, false, false);
        tty_printf("Written by Jim Meyering.", true, false, false);
    } else {
        tty_printf(TTY_ENV["PWD"], true, false, false);
    }
}

async function tty_pwd(command) {
    if (command.length > 1) {
        tty_printf("pwd: Too many arguments.", true, false, false);
        return TTY_ERROR;
    }
    if (TTY_HELP_TOKEN.includes(command[0])) {
        tty_pwd_help();
        return TTY_SUCCESS;
    }
    tty_pwd_display(command);
    return TTY_SUCCESS;
}
