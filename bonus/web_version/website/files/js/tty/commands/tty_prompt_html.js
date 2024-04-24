/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_prompt_html.js
*/
// Function to show the modal
function tty_prompt_html_show_modal() {
    document.getElementById('prompt_html_overlay').style.display = 'block';
}

// Function to hide the modal
function tty_prompt_html_hide_modal() {
    document.getElementById('prompt_html_overlay').style.display = 'none';
}

// Function to handle form submission
function tty_prompt_html_handle_submit() {
    const userInput = document.getElementById('prompt_html_user_input').value;
    userInput = JSON.stringify(tty_html_sanitizer(userInput));
    userInput = userInput.substring(1, userInput.length - 1);
    console.log('User input:', userInput);
    PROMPT_HTML_RESPONSE = userInput;
    tty_prompt_html_hide_modal();
}

function tty_prompt_html(question) {
    PROMPT_HTML_RESPONSE = "";
    question = JSON.stringify(tty_html_sanitizer(question));
    question = question.substring(1, question.length - 1)
    console.log('Question:', question);
    document.getElementById("prompt_html_usr_input_question").value = `${question}`;
    document.getElementById("prompt_html_user_input").value = "";
    tty_prompt_html_show_modal();
    if (PROMPT_HTML_RESPONSE === "") {
        return TTY_ERROR;
    }
    return TTY_SUCCESS;
}
