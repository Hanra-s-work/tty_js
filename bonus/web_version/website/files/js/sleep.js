/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** sleep.js
*/

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
