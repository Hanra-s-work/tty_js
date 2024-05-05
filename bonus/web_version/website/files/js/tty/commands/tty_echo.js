/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_echo.js
*/

async function tty_echo(command) {
    var args = command.split(' ');
    var i = 1;
    var str = "";
    args.shift();
    while (args[i]) {
        str += args[i] + " ";
        i++;
    }
    printf(str, true);
    return TTY_SUCCESS;
}
