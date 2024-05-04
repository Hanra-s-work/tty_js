/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_alert.js
*/

async function tty_alert(command) {
    var sanitized_string = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "-h") {
            tty_print("Usage: alert [MESSAGE1] [MESSAGE2] [etc]\n");
            tty_print("Display an alert message\n");;
        } else {
            sanitized_string = JSON.stringify(command[i]); // Sanitize the command to prevent XSS attacks
            sanitized_string = sanitized_string.substring(1, sanitized_string.length - 1);
            alert(`${sanitized_string}`);
        }
    }
    return TTY_SUCCESS;
}
