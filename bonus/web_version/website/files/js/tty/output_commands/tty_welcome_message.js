/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_welcome_message.js
*/

function tty_welcome_message() {
    tty_cls();
    tty_clear_log();
    var welcome_message = [
        '      ::::::::  :::    :::     :::     :::::::::   ::::::::  :::       ::: ::::    ::: :::::::::: ::::::::::: ',
        '    :+:    :+: :+:    :+:   :+: :+:   :+:    :+: :+:    :+: :+:       :+: :+:+:   :+: :+:            :+:      ',
        '   +:+        +:+    +:+  +:+   +:+  +:+    +:+ +:+    +:+ +:+       +:+ :+:+:+  +:+ +:+            +:+       ',
        '  +#++:++#++ +#++:++#++ +#++:++#++: +#+    +:+ +#+    +:+ +#+  +:+  +#+ +#+ +:+ +#+ +#++:++#       +#+        ',
        '        +#+ +#+    +#+ +#+     +#+ +#+    +#+ +#+    +#+ +#+ +#+#+ +#+ +#+  +#+#+# +#+            +#+         ',
        '#+#    #+# #+#    #+# #+#     #+# #+#    #+# #+#    #+#  #+#+# #+#+#  #+#   #+#+# #+#            #+#          ',
        '########  ###    ### ###     ### #########   ########    ###   ###   ###    #### ##########     ###           ',
        ' ',
        'Welcome to the web terminal!',
        'Type in the box and press enter to echo your input.',
        'Enter "clear" to clear the terminal.',
        'Enter "help" to display available commands.',
        'Note: Any resemblance to real companies, people or products is purely coincidental and fictitious. We do not have any affiliation with them.',
        'This terminal is provided as-is, without any warranty, express or implied. Use it at your own risk.'
    ];

    for (var i = 0; i < welcome_message.length; i++) {
        printf(welcome_message[i], false, true);
    }
}
