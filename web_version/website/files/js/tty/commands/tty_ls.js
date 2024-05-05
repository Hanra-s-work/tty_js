/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_ls.js
*/

var directory_architecture = {
    "include": [
        "my.h"
    ],
    "lib": [
        "libmy.a"
    ],
    "src": [
        "main.c"
    ]
};

async function tty_ls(command) {
    for (var i = 0; i < directory_architecture["include"].length; i++) {
        printf(directory_architecture["include"][i], true);
    }
    return TTY_SUCCESS;
}
