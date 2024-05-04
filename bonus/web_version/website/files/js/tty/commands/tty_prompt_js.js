/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_prompt_js.js
*/

async function tty_prompt_js(question = "Sample question") {
    console.log("tty_prompt_js");
    var answer = prompt(question);
    console.log("answer: ", answer);
    if (answer === null) {
        PROMPT_JS_RESPONSE = "";
        return TTY_ERROR;
    }
    answer = JSON.stringify(tty_html_sanitizer(answer));
    answer = answer.substring(1, answer.length - 1);
    PROMPT_JS_RESPONSE = answer;
    return TTY_SUCCESS;
}

