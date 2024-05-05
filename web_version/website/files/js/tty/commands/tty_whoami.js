/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_whoami.js
*/

function display_help_whoami() {
    tty_printf("Usage: whoami [OPTION]...", false, true, false);
    tty_printf("Print the user name associated with the current effective user ID.", false, true, false);
    tty_printf("Same as id -un.", true, true, false);
    tty_printf("      --help     display this help and exit", false, true, false);
    tty_printf("      --version  output version information and exit", true, true, false);
    tty_printf("GNU coreutils online help: <https://www.gnu.org/software/coreutils/>", false, true, true);
    tty_printf("Report any translation bugs to <https://translationproject.org/team/>", false, true, true);
    tty_printf("Full documentation <https://www.gnu.org/software/coreutils/whoami>", false, true, true);
    tty_printf("or available locally via: info '(coreutils) whoami invocation'", false, true, false);
}

function display_version_whoami() {
    tty_printf("whoami (GNU coreutils) 8.32", true, false, false);
    tty_printf("License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.", true, false, true);
    tty_printf("This is free software: you are free to change and redistribute it.", true, false, false);
    tty_printf("There is NO WARRANTY, to the extent permitted by law.", true, false, false);
    tty_printf("Written by David MacKenzie.", true, false, false);
}

function display_info_whoami() {
    if ("USER" in TTY_ENV) {
        tty_printf(TTY_ENV["USER"], true, false, false);
        return TTY_SUCCESS;
    } else if ("LOGNAME" in TTY_ENV) {
        tty_printf(TTY_ENV["LOGNAME"], true, false, false);
        return TTY_SUCCESS;
    } else {
        tty_printf("Unknown user", true, false, false);
        return TTY_ERROR;
    }
}

async function tty_whoami(command) {
    if (TTY_HELP_TOKEN.includes(command[0])) {
        display_help_whoami();
        return TTY_SUCCESS;
    }
    if (command.length > 1) {
        tty_printf("whoami: Too many arguments.", true, false, false);
        return TTY_ERROR;
    }
    if (command[0] == "--version") {
        display_version_whoami();
        return TTY_SUCCESS;
    }
    return display_info_whoami();
}
