/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_reboot.js
*/

function tty_reboot_help() {
    printf("reboot [OPTIONS...] [ARG]", true, false, false);
    printf("", true, false, false);
    printf("Reboot the system.", true, false, false);
    printf("", true, false, false);
    printf("Options:", true, false, false);
    printf("\t\t--help\tShow this help", true, false, true);
    printf("\t\t--halt\tHalt the machine", true, false, true);
    printf("\t-p --poweroff\tSwitch off the machine", true, false, true);
    printf("\t\t--reboot\tReboot the machine", true, false, true);
    printf("\t-f --force\tForce immediate halt/power-off/reboot", true, false, true);
    printf("\t-w --wtmp-only\tDon't halt/power-off/reboot, just write wtmp record", true, false, true);
    printf("\t-d --no-wtmp\tDon't write wtmp record", true, false, true);
    printf("\t\t--no-wall\tDon't send wall message before halt/power-off/reboot", true, false, true);
}

function tty_reboot_open_tab_window() {
    window.open(window.location.href, "_blank");
}

function tty_reboot_close_window() {
    window.close();
}

function tty_reboot_halt() {
    tty_printf("Halting.", true, false, false);
    tty_reboot_open_tab_window();
    tty_reboot_close_window();
}

function tty_reboot_check_reboot(options) {
    if (options["reboot"]) {
        tty_printf("Rebooting in 5 seconds.", true, false, false);
        auto_reload(5, true);
        return TTY_SUCCESS;
    }
    if (options["reboot"] && options["force"]) {
        tty_printf("Rebooting now.", true, false, false);
        auto_reload(2, true);
        return TTY_SUCCESS;
    }
    if (options["reboot"] && options["no-wall"]) {
        auto_reload(2, true);
        return TTY_SUCCESS;
    }
    return TTY_ERROR;
}

function tty_reboot_check_halt(options) {
    if (options["halt"] && options["force"]) {
        tty_printf("Halting now.", true, false, false);
        tty_reboot_halt();
        return TTY_SUCCESS;
    }
    if (options["halt"] && options["no-wall"]) {
        tty_reboot_halt();
        return TTY_SUCCESS;
    }
    if (options["halt"]) {
        tty_printf("Halting now.", true, false, false);
        tty_reboot_halt();
        return TTY_SUCCESS;
    }
    return TTY_ERROR;
}


function tty_reboot_check_poweroff(options) {

    if (options["poweroff"] && options["force"]) {
        tty_printf("Reboot: This page will close in 5 seconds.", true, false, false);
        setTimeout(tty_reboot_close_window, 5000);
        return TTY_SUCCESS;
    }
    if (options["poweroff"] && options["no-wall"]) {
        tty_reboot_open_tab_window();
        tty_reboot_close_window();
        return TTY_SUCCESS;
    }
    if (options["poweroff"]) {
        tty_printf("Powering off.", true, false, false);
        tty_reboot_open_tab_window();
        tty_reboot_close_window();
        return TTY_SUCCESS;
    }
}
function tty_reboot_process_args(options) {

    if (options["no-wtmp"]) {
        tty_printf("Reboot: Just a useless log.", true, false, false);
        return TTY_SUCCESS;
    }
    if (tty_reboot_check_halt(options) === TTY_SUCCESS || tty_reboot_check_poweroff(options) === TTY_SUCCESS || tty_reboot_check_reboot(options) === TTY_SUCCESS) {
        return TTY_SUCCESS;
    }
    console.log("No info found, rebooting in 5 seconds...");
    tty_printf("Rebooting in 5 seconds...", true, false, false);
    auto_reload(5, true);
    return TTY_SUCCESS;
}

async function tty_reboot(command) {
    var options = {
        "halt": false,
        "poweroff": false,
        "reboot": false,
        "force": false,
        "wtmp-only": false,
        "no-wtmp": false,
        "no-wall": false
    };

    if (TTY_HELP_TOKEN.includes(command[0])) {
        tty_reboot_help();
        return TTY_SUCCESS;
    }
    for (var i = 0; i < command.length; i++) {
        if (command[i] === "--halt") {
            options["halt"] = true;
        } else if (command[i] === "--poweroff" || command[i] === "-p") {
            options["poweroff"] = true;
        } else if (command[i] === "--reboot") {
            options["reboot"] = true;
        } else if (command[i] === "--force" || command[i] === "-f") {
            options["force"] = true;
        } else if (command[i] === "--wtmp-only" || command[i] === "-w") {
            options["wtmp-only"] = true;
        } else if (command[i] === "--no-wtmp" || command[i] === "-d") {
            options["no-wtmp"] = true;
        } else if (command[i] === "--no-wall") {
            options["no-wall"] = true;
        } else {
            tty_printf("reboot: Invalid option.", true, false, false);
            return TTY_ERROR;
        }
    }
    console.log(`options = ${JSON.stringify(options)}`);
    return tty_reboot_process_args(options);
}
