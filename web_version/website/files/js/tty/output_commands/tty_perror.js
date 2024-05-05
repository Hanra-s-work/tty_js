/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_perror.js
*/

function tty_perror(string) {
    printf(`${TTY_ERROR_STRING}${string}`);
    tty_log(string, TTY_ERROR);
}
