/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_alert_html.js
*/

function close_window95(ID) {
    document.getElementById(ID).style.display = "none";
}

function inform_about_windows95() {
    var res = "";
    res += "You can close the window by clicking on the 'X' button or by pressing the '?' button to get help.\n";
    res += "You can also close the window by clicking on the button(s) available at the bottom of the window.\n";
    alert(res);
}

function add_win95_message_box(ID, title = 'Windows 95', message = ["Welcome to your PC!"], path = '/', buttons = ["OK"]) {
    var res = "";

    document.getElementById(ID).style.display = "block";
    res += `<section id="${ID}">`;
    res += `<div class="win_box">`;
    res += `<div class="win_title">`;
    res += `<img src="${path}/img/win95/windows_95.png" width="18" height="18" class="img_title" />`;
    res += `<p class="win_text_title p_font">${title}</p>`;
    res += `<button class="win_title_button" onclick="close_window95('${ID}')">X</button>`;
    res += `<button class="win_title_button" onclick="inform_about_windows95()">?</button>`;
    res += `</div>`;
    res += `<div class="win_body">`;
    res += `<div class="message_section">`;
    res += `<div class="message_icon">`;
    res += `<img class="message_icon" src="${path}/img/win95/error_icon.png" />`;
    res += `</div>`;
    res += `<div class="message_content">`;
    for (var i = 0; i < message.length; i++) {
        res += `<p class="p_font_body">${message[i]}</p>`;
    }
    res += `</div>`;
    res += `</div>`;
    res += `<div class="body_button_section">`;
    for (var i = 0; i < buttons.length; i++) {
        res += `<button class="win_body_button" onclick="close_window95('${ID}')">${buttons[i]}</button>`;
    }
    res += `</div>`;
    res += `</div>`;
    res += `</div>`;
    res += `</section>`;
    document.getElementById(ID).innerHTML = res;
}

async function tty_alert_html(command) {
    var title = "";
    var message = [];
    var img_path = "/files";
    var buttons = ["OK"];

    if (command.length == 0) {
        add_win95_message_box("alert_html", "Windows 95", ["Welcome to your PC!"], img_path, buttons);
        return TTY_SUCCESS;
    }
    title = JSON.stringify(command[0]); // Sanitize the command to prevent XSS attacks
    title = title.substring(1, title.length - 1);
    if (command.length == 1) {
        add_win95_message_box("alert_html", title, ["Welcome to your PC!"], img_path, buttons);
        return TTY_SUCCESS;
    }
    if (TTY_HELP_TOKEN.includes(command[0])) {
        tty_printf("alert_html: alert_html [TITLE] [MESSAGE1] etc...", true, false, false);
        return TTY_SUCCESS;
    }
    for (var i = 1; i < command.length; i++) {
        message.push(JSON.stringify(command[i])); // Sanitize the command to prevent XSS attacks
        message[i - 1] = message[i - 1].substring(1, message[i - 1].length - 1);
    }
    add_win95_message_box("alert_html", title, message, img_path, buttons);
    return TTY_SUCCESS;
}
