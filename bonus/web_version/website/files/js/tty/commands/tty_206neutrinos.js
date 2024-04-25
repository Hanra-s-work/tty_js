/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_206neutrinos.js
*/

function tty_206neutrinos_display_help() {
    var newline = true,
        pre = false,
        prettify = true;
    tty_printf("USAGE", newline, pre, prettify);
    tty_printf("\t206neutrinos n a h sd", newline, pre, prettify);
    tty_printf("\tEnter END in the prompt to stop the program", newline, pre, prettify);
    tty_printf("", newline, pre, prettify);
    tty_printf("DESCRIPTION", newline, pre, prettify);
    tty_printf("\tn \tnumber of values", newline, pre, prettify);
    tty_printf("\ta \tarithmetic mean", newline, pre, prettify);
    tty_printf("\th \tharmonic mean", newline, pre, prettify);
    tty_printf("\tsd\tstandard deviation", newline, pre, prettify);
    return TTY_SUCCESS;
}

function tty_206neutrinos_display_value(value, average, arithmetic, root, harmonic) {
    tty_printf(`Number of values:\t${value}`, true, false, true);
    tty_printf(`Standard deviation:\t${average.toFixed(2)}`, true, false, true);
    tty_printf(`Arithmetic mean:\t${arithmetic.toFixed(2)}`, true, false, true);
    tty_printf(`Root mean square:\t${root.toFixed(2)}`, true, false, true);
    tty_printf(`Harmonic mean:\t${harmonic.toFixed(2)}`, true, false, true);
}

function tty_206neutrinos_standard_deviation(average, arithmetic, value, index) {
    const sumOfSquares = (Math.pow(average, 2) + Math.pow(arithmetic, 2)) * (value - 1) + Math.pow(index, 2);
    const mean = ((arithmetic * (value - 1)) + index) / value;
    const result = Math.sqrt((sumOfSquares / value) - Math.pow(mean, 2));
    return result;
}

function tty_206neutrinos_arithmetic_mean(arithmetic, value, index) {
    const result = ((arithmetic * (value - 1)) + index) / value;
    return result;
}

function tty_206neutrinos_root_mean(average, arithmetic, value, index) {
    const sumOfSquares = (Math.pow(average, 2) + Math.pow(arithmetic, 2)) * (value - 1) + Math.pow(index, 2);
    const result = Math.sqrt(sumOfSquares / value);
    return result;
}

function tty_206neutrinos_harmonic_mean(harmonic, value, index) {
    const result = value / (((1 / harmonic) * (value - 1)) + (1 / index));
    return result;
}

async function tty_206neutrinos_loop_display(value, arithmetic, harmonic, average) {
    let cont = true;
    var request = "";
    var buffer_kill = 10;
    console.log("Before while");
    while (cont === true && buffer_kill > 0) {
        buffer_kill -= 1;
        console.log("In while");
        request = tty_prompt_html("Enter next value: ");
        while (HTML_BUTTON_CLICKED === false && buffer_kill > 0) {
            sleep(20000);
            buffer_kill -= 1;
            console.log("sleeping");
        }
        console.log("After prompt");
        if (request === TTY_SUCCESS) {
            console.log("request is TTY success");
            request = PROMPT_HTML_RESPONSE;
        } else {
            request = "";
            console.log("request is not TTY succes");
            continue;
        }
        if (request === "END") {
            console.log("request is END");
            cont = false;
            break;
        }
        console.log("rest of loop");
        value += 1;
        const index = parseInt(request, 10);
        const root = tty_206neutrinos_root_mean(average, arithmetic, value, index);
        average = tty_206neutrinos_standard_deviation(average, arithmetic, value, index);
        arithmetic = tty_206neutrinos_arithmetic_mean(arithmetic, value, index);
        harmonic = tty_206neutrinos_harmonic_mean(harmonic, value, index);
        console.log("going to display content");
        tty_206neutrinos_display_value(value, average, arithmetic, root, harmonic);
        console.log("content displayed");
    }
    console.log("After while");
    return TTY_SUCCESS;
}

function tty_206neutrinos_desync_loop_display(value, arithmetic, harmonic, average) {
    return new Promise((resolve, reject) => {
        tty_206neutrinos_loop_display(value, arithmetic, harmonic, average)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                tty_epirror(error);
                return TTY_EPITECH_ERROR;
            });
    });
}
function tty_206neutrinos_main(command) {
    var return_status = TTY_SUCCESS;
    console.log(`command.length = ${command.length}`);
    if (command.length === 1 && TTY_HELP_TOKEN.includes(command[0])) {
        return tty_206neutrinos_display_help();
    } else if (command.length === 4) {
        try {
            let [value, arithmetic, harmonic, average] = command;
            console.log(`value = ${value} arithmetic = ${arithmetic} harmonic = ${harmonic} average = ${average}`);
            console.log(`typeof(value) = ${typeof (value)} typeof(arithmetic) = ${typeof (arithmetic)} typeof(harmonic) = ${typeof (harmonic)} typeof(average) = ${typeof (average)}`);
            console.log("converting value to int");
            value = parseInt(value, 10);
            console.log("converting arithmetic to int");
            arithmetic = parseInt(arithmetic, 10);
            console.log("converting harmonic to int");
            harmonic = parseInt(harmonic, 10);
            console.log("converting average to int");
            average = parseInt(average, 10);
            console.log("converted all values to int");
            return_status = tty_206neutrinos_desync_loop_display(value, arithmetic, harmonic, average);
            console.log("Loop display finished")
            return return_status;
        } catch (error) {
            tty_epirror(`${TTY_ERROR_STRING}Invalid argument. Arguments must be integers. | ${error}`);
            return TTY_EPITECH_ERROR;
        }
    } else {
        tty_epirror(`${TTY_ERROR_STRING}Invalid number of arguments. Use '-h' for help.`);
        return TTY_EPITECH_ERROR;
    }
}

function tty_epitech_206neutrinos_start_stop_message(command) {
    var return_status = TTY_SUCCESS;
    tty_printf("206neutrinos - An Epitech program", true, false);
    tty_log("Entered Epitech program 206neutrinos", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, TTY_SUCCESS);
    return_status = tty_206neutrinos_main(command);
    tty_log("Exited Epitech program 206neutrinos", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, TTY_SUCCESS);
    if (return_status != TTY_SUCCESS) {
        return TTY_ERROR;
    }
    return TTY_SUCCESS;
}
