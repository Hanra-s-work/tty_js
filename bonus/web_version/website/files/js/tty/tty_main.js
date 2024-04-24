//==========
// index.es6
//==========

let terminalCtn = document.querySelector("#web-terminal-ctn"); // get terminal container element
let terminal = document.querySelector("#web-terminal"); // get terminal element
let terminalInput = document.querySelector("#web-terminal-input"); // get input element
let terminalForm = document.querySelector("#web-terminal-form"); // get input form element

let display = function (html) {
    //write to terminal
    terminal.innerHTML += html;

    terminal.scrollTop = terminal.scrollHeight;
};

let htmlElement = (element, text) => `<${element} class="tty_line_format" >${text}</${element}>`;

let printf = function (string, newline = true, pre = false) {
    //format, write to terminal
    let nl = newline ? "<br>" : "";
    var node = "";
    if (!pre) {
        node = htmlElement("span", string);
    } else {
        node = htmlElement("pre", string);
    }
    display(`${node}${nl}`);
};

let fontHeight = 15;
let bufferHistory = [];
let bhIndex = 0;

let bhManage = function () {
    // manage buffer history on input submit
    bufferHistory.shift();
    bufferHistory.unshift(buffer);
    bufferHistory.unshift("");

    bhIndex = 0;
};

// cycle through terminal history
document.onkeydown = keyCheck;

function keyCheck(e) {
    let keycode = window.event.keyCode;

    switch (keycode) {
        case 38: // up arrow
            if (bhIndex < bufferHistory.length - 1) {
                bhIndex++;
                terminalInput.value = bufferHistory[bhIndex];
            }
            break;

        case 40: // down arrow
            if (bhIndex > 0) {
                bhIndex--;
                terminalInput.value = bufferHistory[bhIndex];
            }
            break;
    }
}

function process_command(command) {
    var commandParts = command.match(/(?:[^\s"]+|"[^"]*")+/g); // Split command by whitespace, preserving quoted strings
    var usr_command = commandParts.shift(); // Extract the command name
    var run_status = TTY_SUCCESS;
    var commandFound = false;
    var sanitized_command = JSON.stringify(escapeHTML(command)); // Sanitize the command to prevent XSS attacks
    sanitized_command = sanitized_command.substring(1, sanitized_command.length - 1);
    printf(sanitized_command, false, true);
    for (const [commandName, commandFunction] of Object.entries(tty_available_commands)) {
        if (usr_command === commandName) {
            // If the command is found, execute its function
            run_status = commandFunction(commandParts);
            commandFound = true;
            break;
        }
    }

    // If command not found, print "Command not found"
    if (!commandFound) {
        printf(`${TTY_ERROR_STRING}Command not found`);
        run_status = TTY_ERROR
    }
    tty_log(command, run_status);
    LAST_PROGRAM_STATUS = run_status;
}

//==========
// script.js
//==========

var buffer; // store user input

// initial message
clear_log();
var welcome_message = [
    '      ::::::::  :::    :::     :::     :::::::::   ::::::::  :::       ::: ::::    ::: :::::::::: ::::::::::: ',
    '    :+:    :+: :+:    :+:   :+: :+:   :+:    :+: :+:    :+: :+:       :+: :+:+:   :+: :+:            :+:      ',
    '   +:+        +:+    +:+  +:+   +:+  +:+    +:+ +:+    +:+ +:+       +:+ :+:+:+  +:+ +:+            +:+       ',
    '  +#++:++#++ +#++:++#++ +#++:++#++: +#+    +:+ +#+    +:+ +#+  +:+  +#+ +#+ +:+ +#+ +#++:++#       +#+        ',
    '        +#+ +#+    +#+ +#+     +#+ +#+    +#+ +#+    +#+ +#+ +#+#+ +#+ +#+  +#+#+# +#+            +#+         ',
    '#+#    #+# #+#    #+# #+#     #+# #+#    #+# #+#    #+#  #+#+# #+#+#  #+#   #+#+# #+#            #+#          ',
    '########  ###    ### ###     ### #########   ########    ###   ###   ###    #### ##########     ###           ',
    ' ',
    'Welcome to the web terminal!',
    'Type in the box and press enter to echo your input.',
    'Enter "clear" to clear the terminal.',
    'Enter "help" to display available commands.',
    'Note: Any resemblance to real companies, people or products is purely coincidental and fictitious. We do not have any affiliation with them.',
    'This terminal is provided as-is, without any warranty, express or implied. Use it at your own risk.'
];

for (var i = 0; i < welcome_message.length; i++) {
    printf(welcome_message[i], false, true);
}

// handle buffer submit
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;
    bhManage(); // manage buffer history

    /*============================================*/
    /* Replace this block with your submit actions */
    process_command(buffer);
    /*                                            */
    /*============================================*/

    terminalInput.value = "";
});
