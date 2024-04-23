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
};

let htmlElement = (element, text) => `<${element} class="tty_line_format" >${text}</${element}>`;

let printf = function (string, newline = true) {
    //format, write to terminal
    let nl = newline ? "<br>" : "";
    var node = htmlElement("span", string);

    display(`${node}${nl}`);
};

let fontHeight = 15;
let cls = function () {
    document.getElementById("web-terminal").innerHTML = "";
};

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

//==========
// script.js
//==========

var buffer; // store user input

// initial message
printf(
    'This is a basic web REPL boilerplate. Type in the box and press enter to echo your input. Enter "clear" to clear the terminal.'
);

// handle buffer submit
terminalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    buffer = terminalInput.value;
    bhManage(); // manage buffer history

    /*============================================*/
    /* Replace this block with your submit actions */

    if (buffer == "clear") cls();
    else printf(buffer); // echo input

    /*                                            */
    /*============================================*/

    terminalInput.value = "";
});
