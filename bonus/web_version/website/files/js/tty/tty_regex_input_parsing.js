/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_regex_input_parsing.js
*/

function tty_regex_input_parsing(input, regex_choice) {
    var regex = "";
    switch (regex_choice) {
        case 1:
            regex = /(?:[^\s"]+|"[^"]*")+/g;
            break;
        case 2:
            regex = /[A-Za-z]+ "[^"]*" '[A-Za-z]+' '[^']*'/g;
            break;
        case 3:
            regex = /[^\s"]+|"[^"]*"/g;
            break;
        case 4:
            regex = /[A-Za-z]+.*[^"]*.*[A-Za-z]+.*[^']*/i;
            break;
        case 5:
            regex = /^[A-Za-z]+ "[^"]*" '[A-Za-z]+' '[^']*'$/i;
            break;
        case 6:
            regex = /^[A-Za-z]+.*[^"]*.*[A-Za-z]+.*[^']*.*$/i;
            break;
        default:
            regex = /(?:[^\s"]+|"[^"]*")+/g;
            break;
    }
    return input.match(regex);
}


function tty_test_input_parsing() {
    var test_command = [
        "help",
        "help 'hello'",
        "help \"hello\"",
        "help 'hello                    world'",
        "help \"hello               world\"",
        "help \"hello     world\" 'helli     wirld'",
        "help help \"hello     world\" 'helli     wirld'"
    ];
    var data = "";
    for (var j = 0; j < test_command.length; j++) {
        for (var i = 0; i < 7; i++) {
            data = tty_regex_input_parsing(test_command[j], i)
            console.log(`id: ${i}, test_command[${j}] = ${test_command[j]}, regex_parsing = ${data}, typeof(regex_parsing) = ${typeof (data)}`);
        };
    };
}
