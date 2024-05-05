/*
** EPITECH PROJECT, 2023
** tty_js
** File description:
** tty_hide.js
*/

function hide_tty() {
    var state = document.getElementById("web-terminal-ctn").style.display;
    if (state == "none") {
        document.getElementById("web-terminal-ctn").style.display = "block";
        // document.getElementById("web-terminal-form").style.display = "block";
    } else {
        document.getElementById("web-terminal-ctn").style.display = "none";
        // document.getElementById("web-terminal-form").style.display = "none";
    }
}
