/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_ls.js
*/

function tty_ls(command) {
    var files = [
        ".",
        "..",
        "README.md",
        "bonus",
        "include",
        "lib",
        "main.c",
        "src"
    ];
    for (var i = 0; i < files.length; i++) {
        printf(files[i], true);
    }
    return TTY_SUCCESS;
}
