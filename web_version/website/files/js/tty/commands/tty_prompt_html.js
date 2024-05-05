/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_prompt_html.js
*/

var HTML_BUTTON_CLICKED = false;
// Function to show the modal
// function tty_prompt_html_show_modal() {
//     document.getElementById('prompt_html_overlay').style.display = 'block';
// }

// Function to hide the modal
// function tty_prompt_html_hide_modal() {
//     document.getElementById('prompt_html_overlay').style.display = 'none';
// }

// Function to handle form submission
function tty_prompt_html_handle_submit() {
    var userInput = document.getElementById('prompt_html_user_input').value;
    console.log('User input:', userInput);
    userInput = JSON.stringify(tty_html_sanitizer(userInput));
    userInput = userInput.substring(1, userInput.length - 1);
    console.log('User input (cleaned):', userInput);
    PROMPT_HTML_RESPONSE = userInput;
    HTML_BUTTON_CLICKED = true;
    document.getElementById('prompt_html_overlay').style.display = 'none';
}

// async function tty_prompt_html(question = "Sample question") {
//     PROMPT_HTML_RESPONSE = "";
//     HTML_BUTTON_CLICKED = false;
//     question = JSON.stringify(tty_html_sanitizer(question));
//     question = question.substring(1, question.length - 1)
//     console.log('Question:', question);
//     document.getElementById("prompt_html_user_input_question").innerText = `${question}`;
//     console.log("prompt_html_user_input_question");
//     document.getElementById("prompt_html_user_input").value = "";
//     console.log("prompt_html_user_input");
//     document.getElementById('prompt_html_overlay').style.display = 'block';
//     // tty_prompt_html_show_modal();
//     console.log("tty_prompt_html_show_modal");
//     if (PROMPT_HTML_RESPONSE === "") {
//         console.log(`PROMPT_HTML_RESPONSE: ${PROMPT_HTML_RESPONSE}`);
//         return TTY_ERROR;
//     }
//     console.log('Question:', question);
//     return TTY_SUCCESS;
// }
function tty_prompt_html(question = "Sample question") {
    PROMPT_HTML_RESPONSE = "";
    HTML_BUTTON_CLICKED = false;
    question = JSON.stringify(tty_html_sanitizer(`${question}`));
    question = question.substring(1, question.length - 1)
    console.log('Question:', question);
    document.getElementById("prompt_html_user_input_question").innerText = `${question}`;
    console.log("prompt_html_user_input_question");
    document.getElementById("prompt_html_user_input").value = "";
    console.log("prompt_html_user_input");
    document.getElementById('prompt_html_overlay').style.display = 'block';
    // tty_prompt_html_show_modal();
    console.log("tty_prompt_html_show_modal");
    // while (HTML_BUTTON_CLICKED === false) {
    //     console.log("Waiting for HTML button click");
    // }
    if (PROMPT_HTML_RESPONSE === "") {
        console.log(`PROMPT_HTML_RESPONSE: ${PROMPT_HTML_RESPONSE}`);
        return TTY_ERROR;
    }
    console.log('Question:', question);
    return TTY_SUCCESS;
}
