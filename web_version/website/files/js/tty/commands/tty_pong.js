/*
** EPITECH PROJECT, 2023
** tty_js
** File description:
** tty_epitech_pong.js
*/

function tty_epitech_pong_find_angle(cd) {
    let temp = 0;

    if ((cd[6] > 0 && cd[9] < 0) || (cd[6] < 0 && cd[9] > 0)
        || (cd[6] === 0 && cd[9] === 0)) {
        temp += Math.atan(Math.abs(cd[9]) / Math.sqrt((cd[7] * cd[7]) + (cd[8] * cd[8])));
        console.log("The incidence angle is:\n" + (temp * 180 / Math.PI).toFixed(2) + " degrees");
    } else {
        console.log("The ball won't reach the paddle.");
    }
}

function tty_epitech_pong_getfloat(nb) {
    let nbr = parseFloat(nb);
    let dec;
    let i;

    for (i = 0; nb[i] !== '.' && nb[i] !== '\0'; i += 1);
    if (nb[i] === '.') {
        dec = parseFloat(nb.substring(i + 1));
        for (; dec >= 1; dec /= 10);
        for (; nb[i + 1] === '0'; i += 1)
            dec /= 10;
        if (nbr < 0)
            nbr -= dec;
        else
            nbr += dec;
    }
    return nbr;
}

function tty_epitech_pong_setup_coord(ac, av) {
    let coord = [];

    coord[0] = parseInt(av[7]);
    for (let i = 1; i < 7; i += 1)
        coord[i] = tty_epitech_pong_getfloat(av[i]);
    for (let i = 7; i < 10; i += 1)
        coord[i] = coord[i - 3] - coord[i - 6];
    for (let i = 10; i < 13; i += 1)
        coord[i] = coord[i - 6];
    for (let temp = 0; temp < coord[0]; temp += 1)
        for (let i = 10; i < 13; i += 1)
            coord[i] += coord[i - 3];
    console.log("The velocity vector of the ball is:\n(" + coord[7].toFixed(2) + ", " + coord[8].toFixed(2) + ", " + coord[9].toFixed(2) + ")");
    console.log("At time t + " + coord[0] + ", ball coordinates will be:\n(" + coord[10].toFixed(2) + ", " + coord[11].toFixed(2) + ", " + coord[12].toFixed(2) + ")");
    tty_epitech_pong_find_angle(coord);
}

function tty_epitech_pong_test_errors_compute(ac, av) {
    let temp;
    let a = 0;

    if (ac !== 8)
        return TTY_EPITECH_ERROR;
    for (let i = 0; i < 6; i += 1)
        a += av[i + 1].length;
    temp = "";
    if (parseInt(av[7]) < 0)
        return TTY_EPITECH_ERROR;
    for (let i = 0; i < av[7].length; i += 1)
        if (!isNaN(parseInt(av[7][i])))
            return TTY_EPITECH_ERROR;
    for (let i = 0; i < 6; i += 1)
        temp += av[i + 1];
    for (let i = 0; i < a; i += 1)
        if (isNaN(parseInt(temp[i])) && temp[i] !== '.' && temp[i] !== '-')
            return TTY_EPITECH_ERROR;
    tty_epitech_pong_setup_coord(ac, av);
    return TTY_SUCCESS;
}

async function tty_epitech_pong_main(ac, av) {
    if (ac === 1) {
        if (TTY_HELP_TOKEN.includes(av[0])) {
            printf("USAGE", true, false, false);
            printf("\tnode 101pong.js x0 y0 z0 x1 y1 z1 n", true, false, true);
            printf("", true, false, false);
            printf("DESCRIPTION", true, false, false);
            printf("\tx0\tball abscissa at time t - 1", true, false, true);
            printf("\ty0\tball ordinate at time t - 1", true, false, true);
            printf("\tz0\tball altitude at time t - 1", true, false, true);
            printf("\tx1\tball abscissa at time t", true, false, true);
            printf("\ty1\tball ordinate at time t", true, false, true);
            printf("\tz1\tball altitude at time t", true, false, true);
            printf("\tn \ttime shift (greater than or equal to zero, integer)", true, false, true);
            return TTY_SUCCESS;
        }
    } else {
        return tty_epitech_pong_test_errors_compute(ac, av);
    }
}

async function tty_epitech_pong_start_stop_message(command) {
    var return_status = TTY_SUCCESS;
    tty_printf("pong - An Epitech program", true, false);
    tty_log("Entered Epitech program pong", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, TTY_SUCCESS);
    return_status = await tty_epitech_pong_main(command.length, command);
    tty_log("Exited Epitech program pong", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, TTY_SUCCESS);
    if (return_status != TTY_SUCCESS) {
        return TTY_ERROR;
    }
    return TTY_SUCCESS;
}
