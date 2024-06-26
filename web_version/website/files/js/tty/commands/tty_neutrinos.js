/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_neutrinos.js
*/

function tty_neutrinos_display_help() {
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

function tty_neutrinos_display_value(value, average, arithmetic, root, harmonic) {
    tty_printf(`Number of values:\t${value}`, true, false, true);
    tty_printf(`Standard deviation:\t${average.toFixed(2)}`, true, false, true);
    tty_printf(`Arithmetic mean:\t${arithmetic.toFixed(2)}`, true, false, true);
    tty_printf(`Root mean square:\t${root.toFixed(2)}`, true, false, true);
    tty_printf(`Harmonic mean:\t${harmonic.toFixed(2)}`, true, false, true);
    tty_printf("", true, false, true);
}

function tty_neutrinos_standard_deviation(average, arithmetic, value, index) {
    const sumOfSquares = (Math.pow(average, 2) + Math.pow(arithmetic, 2)) * (value - 1) + Math.pow(index, 2);
    const mean = ((arithmetic * (value - 1)) + index) / value;
    const result = Math.sqrt((sumOfSquares / value) - Math.pow(mean, 2));
    return result;
}

function tty_neutrinos_arithmetic_mean(arithmetic, value, index) {
    const result = ((arithmetic * (value - 1)) + index) / value;
    return result;
}

function tty_neutrinos_root_mean(average, arithmetic, value, index) {
    const sumOfSquares = (Math.pow(average, 2) + Math.pow(arithmetic, 2)) * (value - 1) + Math.pow(index, 2);
    const result = Math.sqrt(sumOfSquares / value);
    return result;
}

function tty_neutrinos_harmonic_mean(harmonic, value, index) {
    const result = value / (((1 / harmonic) * (value - 1)) + (1 / index));
    return result;
}

async function tty_neutrinos_loop_display(value, arithmetic, harmonic, average) {
    let cont = true;
    var request = "";
    var buffer_kill = 10;
    console.log("Before while");
    while (cont === true && buffer_kill > 0) {
        PROMPT_JS_RESPONSE = "";
        PROMPT_HTML_RESPONSE = "";
        // buffer_kill -= 1;
        console.log("In while");
        request = await tty_prompt_js("Enter next value: ");
        console.log(`request = ${request}, PROMPT_JS_RESPONSE = ${PROMPT_JS_RESPONSE}, PROMPT_HTML_RESPONSE = ${PROMPT_HTML_RESPONSE}`);
        console.log("After prompt");
        if (request === TTY_SUCCESS) {
            console.log("request is TTY success");
            if (PROMPT_JS_RESPONSE != "") {
                request = PROMPT_JS_RESPONSE;
            } else {
                request = PROMPT_HTML_RESPONSE;
            }
        } else {
            request = "";
            console.log("request is not TTY succes");
            continue;
        }
        if (request.trim() === "END") {
            console.log("request is END");
            tty_log("User entered END", TTY_SUCCESS);
            cont = false;
            break;
        }
        console.log("rest of loop");
        value += 1;
        const index = parseInt(request, 10);
        const root = tty_neutrinos_root_mean(average, arithmetic, value, index);
        average = tty_neutrinos_standard_deviation(average, arithmetic, value, index);
        arithmetic = tty_neutrinos_arithmetic_mean(arithmetic, value, index);
        harmonic = tty_neutrinos_harmonic_mean(harmonic, value, index);
        console.log("going to display content");
        tty_neutrinos_display_value(value, average, arithmetic, root, harmonic);
        console.log("content displayed");
    }
    console.log("After while");
    return TTY_SUCCESS;
}

async function tty_neutrinos_main(command) {
    var return_status = TTY_SUCCESS;
    console.log(`command.length = ${command.length}`);
    if (command.length === 1 && TTY_HELP_TOKEN.includes(command[0])) {
        return tty_neutrinos_display_help();
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
            return_status = await tty_neutrinos_loop_display(value, arithmetic, harmonic, average);
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

async function tty_epitech_neutrinos_start_stop_message(command) {
    var return_status = TTY_SUCCESS;
    tty_printf("neutrinos - An Epitech program", true, false);
    tty_log("Entered Epitech program neutrinos", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, TTY_SUCCESS);
    return_status = await tty_neutrinos_main(command);
    tty_log("Exited Epitech program neutrinos", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, TTY_SUCCESS);
    if (return_status != TTY_SUCCESS) {
        return TTY_ERROR;
    }
    return TTY_SUCCESS;
}
