/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_prompt_js.js
*/

function tty_prompt_js(question = "Sample question") {
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

function tty_prompt_js_friendly(question = "Sample question") {
    return new Promise((resolve, reject) => {
        tty_prompt_js(question)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                tty_epirror(error);
                return TTY_EPITECH_ERROR;
            });
    });
}
