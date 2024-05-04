/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_date.js
*/

async function tty_date(command) {
    var date = new Date();
    printf(date.toString(), true);
    return TTY_SUCCESS;
}
