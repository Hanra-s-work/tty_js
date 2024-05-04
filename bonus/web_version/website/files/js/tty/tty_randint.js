/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_randint.js
*/

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
