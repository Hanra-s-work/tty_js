/*
** EPITECH PROJECT, 2023
** tty_js [fed34_prox_vm]
** File description:
** tty_history_toggler.js
*/

function tty_history_toggler() {
    // var state = document.getElementById("tty_history_toggler").style.display;
    var state = document.getElementById("input_commands").style.display;
    if (state == "none") {
        document.getElementById("history_toggler").innerHTML = "&dtrif;";
        document.getElementById("input_commands").style.display = "block";
        document.getElementById("command_history").style.width = "20%";
        document.getElementById("command_title").style.rotate = "0deg";
        document.getElementById("command_title").style.marginLeft = "0px";
        document.getElementById("command_title").style.marginTop = "2px";
    } else {
        document.getElementById("command_history").style.width = "2%";
        document.getElementById("history_toggler").innerHTML = "&rtrif;";
        document.getElementById("input_commands").style.display = "none";
        document.getElementById("command_title").style.rotate = "90deg";
        document.getElementById("command_title").style.marginLeft = "-80px";
        document.getElementById("command_title").style.marginTop = "104px";

    }
}
