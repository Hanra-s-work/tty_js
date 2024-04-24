/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** sleep.js
*/

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
