/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_help.js
*/
function tty_help(command) {
    var global_status = TTY_SUCCESS;
    var command_node = "";
    // Handle no arguments provided
    if (command.length === 0) {
        // Display available commands
        printf("Available commands:");
        Object.keys(TTY_HELP_COMMANDS).forEach(cmd => printf(`${cmd}: ${TTY_HELP_COMMANDS[cmd]}`));
        return TTY_SUCCESS;
    }

    // Handle help or variants
    for (var i = 0; i < command.length; i++) {
        command_node = command[i].trim();
        if (TTY_HELP_TOKEN.includes(command_node)) {
            // Display brief paragraph about the help function
            printf("help [command]: Display information about available commands.");
        } else {
            // Handle unknown command
            if (!TTY_HELP_COMMANDS.hasOwnProperty(command_node)) {
                printf(`${TTY_ERROR_STRING}Unknown command '${command_node}'`);
                global_status = TTY_ERROR;
            } else {
                // Handle help for a specific command
                printf(`${command_node}: ${TTY_HELP_COMMANDS[command_node]}`);
            }
        }
    }
    return global_status;
}
