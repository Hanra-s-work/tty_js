/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** auto_reload.js
*/

function auto_reload(delay = 5, nocache = false) {
    seconds = delay * 1000;
    setTimeout(function () { location.reload(nocache); }, seconds);
}
