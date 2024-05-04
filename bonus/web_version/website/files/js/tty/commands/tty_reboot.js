/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_reboot.js
*/

async function tty_reboot(command) {
    tty_printf("Rebooting in 5 seconds...", true, false, false);
    auto_reload(5, true);
    return TTY_SUCCESS;
}
