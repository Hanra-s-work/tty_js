/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_cls.js
*/

async function tty_cls(command) {
    document.getElementById("web-terminal").innerHTML = "";
    tty_log("clear", 0);
    return TTY_SUCCESS;
};

