/*
** EPITECH PROJECT, 2023
** tty_js [fed34_prox_vm]
** File description:
** tty_architect.js
*/

const { cos, sin } = Math;

function tty_epitech_architect_reflect(tab, d) {
    const a = (2 * d * Math.PI) / 180;
    const matrice = [cos(a), sin(a), 0, sin(a), -cos(a), 0, 0, 0, 1];
    tty_epitech_architect_fillTab(tab, matrice);
}

function tty_epitech_architect_rotate(tab, d) {
    const a = (d * Math.PI) / 180;
    const matrice = [cos(a), -sin(a), 0, sin(a), cos(a), 0, 0, 0, 1];
    tty_epitech_architect_fillTab(tab, matrice);
}

function tty_epitech_architect_scale(tab, m, n) {
    const matrice = [m, 0, 0, 0, n, 0, 0, 0, 1];
    tty_epitech_architect_fillTab(tab, matrice);
}

function tty_epitech_architect_translate(tab, i, j) {
    const matrice = [1, 0, i, 0, 1, j, 0, 0, 1];
    tty_epitech_architect_fillTab(tab, matrice);
}

function tty_epitech_architect_createFunctions(fun) {
    const nwFun = [
        { type: 't', args: 2, fct: tty_epitech_architect_translate, fct2: null },
        { type: 'z', args: 2, fct: tty_epitech_architect_scale, fct2: null },
        { type: 'r', args: 1, fct: null, fct2: tty_epitech_architect_rotate },
        { type: 's', args: 1, fct: null, fct2: tty_epitech_architect_reflect }
    ];

    for (let i = 0; i < 4; i++) { fun[i] = nwFun[i]; }
}

function tty_epitech_architect_isEmpty(tab) {
    for (let i = 0; i < 9; i++) {
        if (tab[i] !== 0) {
            return false;
        }
    }
    return true;
}

function tty_epitech_architect_compute(tab, matrice, mat2) {
    for (let i = 0; i < 9; i++) {
        tab[i] = 0;
        for (let j = 0; j < 3; j++) {
            tab[i] += matrice[Math.floor(i / 3) * 3 + j] * mat2[j * 3 + i - Math.floor(i / 3) * 3];
        }
    }
}

function tty_epitech_architect_fillTab(tab, matrice) {
    const mat2 = [...tab];

    if (isEmpty(tab)) for (let i = 0; i < 9; i++) {
        tab[i] = matrice[i];
    } else {
        tty_epitech_architect_compute(tab, matrice, mat2);
    }
}

function tty_epitech_architect_computeTransfo(i, av, tab, fun) {
    for (let j = 0; j < 4; j++) {
        if (av[i][1] === fun[j].type && fun[j].args === 1) {
            fun[j].fct2(tab, parseInt(av[i + 1]));
        }
        if (av[i][1] === fun[j].type && fun[j].args === 2) {
            fun[j].fct(tab, parseInt(av[i + 1]), parseInt(av[i + 2]));
        }
        if (av[i][1] === fun[j].type) {
            i += fun[j].args;
        }
    }
}

function tty_epitech_architect_help() {
    printf(`USAGE`, true, false, false);
    printf(`\t./102architect x y transfo1 arg11 [arg12] [transfo2 arg21 [arg22]] ...`, true, false, true);
    printf("", true, false, false);
    printf(`DESCRIPTION`, true, false, false);
    printf(`\tx\tabscissa of the original point`, true, false, true);
    printf(`\ty\tordinate of the original point`, true, false, true);
    printf("", true, false, false);
    printf(`\ttransfo arg1[arg2]`, true, false, true);
    printf(`\t-t i j\ttranslation along vector (i, j)`, true, false, true);
    printf(`\t-z m n\tscaling by factors m (x-axis) and n (y-axis)`, true, false, true);
    printf(`\t-r d  \trotation centered in O by a d degree angle`, true, false, true);
    printf(`\t-s d  \treflection over the axis passing through O with an inclination angle of d degrees`, true, false, true);
    return TTY_SUCCESS;
}

function tty_epitech_architect_displayActions(flag, av, compteur) {
    if (flag === 't') {
        printf(`Translation along vector (${parseInt(av[compteur + 1])}, ${parseInt(av[compteur + 2])})`, true, false, false);
    }
    if (flag === 'z') {
        printf(`Scaling by factors ${parseInt(av[compteur + 1])} and ${parseInt(av[compteur + 2])}`, true, false, false);
    }
    if (flag === 'r') {
        printf(`Rotation by a ${parseInt(av[compteur + 1])} degree angle`, true, false, false);
    }
    if (flag === 's') {
        printf(`Reflection over an axis with an inclination angle of ${parseInt(av[compteur + 1])} degrees`, true, false, false);
    }
}

function tty_epitech_architect_displayResult(tab, x, y) {
    const a = tab[0] * x + tab[1] * y + tab[2];
    const b = tab[3] * x + tab[4] * y + tab[5];

    for (let i = 0; i < 9; i += 3) {
        printf(`${tab[i].toFixed(2)} ${tab[i + 1].toFixed(2)} ${tab[i + 2].toFixed(2)}`, true, false, false);
    }
    printf(`(${x}.00, ${y}.00) => (${a.toFixed(2)}, ${b.toFixed(2)})`, true, false, false);
}

function tty_epitech_architect_test3(av) {
    for (let i = 0; i < av.length; i++) {
        if (!/^\d+$/.test(av[i]) && !(av[i] === '-' && i === 0)) {
            return true;
        }
    }
    return false;
}

function tty_epitech_architect_test2(ac, av, y, fun) {
    let temp = 0;

    for (let i = 1; i < av[y].length; i++) {
        if ((['t', 'z', 'r', 's'].indexOf(av[y][i]) === -1 && i === 1) || (av[y][i] !== '\0' && i > 1)) {
            return true;
        }
    }
    for (temp = 0; av[y][1] !== fun[temp].type; temp++);
    temp = fun[temp].args;
    for (let j = 0; j <= temp; j++) {
        if (j + y > ac) {
            return true;
        }
    }
    return false;
}

function tty_epitech_architect_test(ac, av, fun) {
    let temp = 0;

    for (let i = 1; i < ac; i++) {
        if (av[i][0] === '-' && !/^\d+$/.test(av[i][1])) {
            temp = tty_epitech_architect_test2(ac, av, i, fun);
        }
        if (temp === 1) {
            return true;
        }
        if (av[i][0] !== '-') {
            temp = tty_epitech_architect_test3(av[i]);
        }
        if (temp === 1) {
            return true;
        }
    }
    return false;
}

function tty_epitech_architect_main(ac, av) {
    const tab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const fun = [];

    if (ac === 1 && TTY_HELP_TOKEN.includes(av[0])) {
        tty_epitech_architect_help();
        return TTY_SUCCESS;
    }
    tty_epitech_architect_createFunctions(fun);
    if (tty_epitech_architect_test(ac, av, fun)) {
        return TTY_EPITECH_ERROR;
    }
    if (ac >= 5) {
        for (let i = 3; i < ac; i++) {
            tty_epitech_architect_displayActions(av[i][1], av, i);
            tty_epitech_architect_computeTransfo(i, av, tab, fun);
        }
        tty_epitech_architect_displayResult(tab, parseInt(av[1]), parseInt(av[2]));
        return TTY_SUCCESS;
    }
    return TTY_EPITECH_ERROR;
}

async function tty_epitech_architect_start_stop_message(command) {
    var return_status = TTY_SUCCESS;
    tty_printf("architect - An Epitech program", true, false);
    tty_log("Entered Epitech program architect", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_EPITECH_ERROR}`, TTY_SUCCESS);
    return_status = tty_epitech_architect_main(command.length, command);
    tty_log("Exited Epitech program architect", TTY_SUCCESS);
    tty_printf(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, true, false);
    tty_log(`Success statuses = ${TTY_SUCCESS} Error statuses = ${TTY_ERROR}`, TTY_SUCCESS);
    if (return_status != TTY_SUCCESS) {
        return TTY_ERROR;
    }
    return TTY_SUCCESS;
}
