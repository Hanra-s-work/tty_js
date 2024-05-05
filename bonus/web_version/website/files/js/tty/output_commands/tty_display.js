/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_display.js
*/

function tty_display(html) {
    let terminal = document.querySelector("#web-terminal"); // get terminal element
    //write to terminal
    terminal.innerHTML += html;
    terminal.scrollTop = terminal.scrollHeight;
};
