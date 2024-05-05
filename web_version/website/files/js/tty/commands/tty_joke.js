/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** add_a_joke.js
*/

async function tty_joke(command) {
    if (command.length > 0 && TTY_HELP_TOKEN.includes(command[0])) {
        tty_printf("Joke: Display a joke in the terminal.", true, false, false);
        return TTY_SUCCESS;
    }
    tty_printf(`<img alt="Jokes Card" aria-label="Jokes Cards, images with a joke to make you laugh" src="https://readme-jokes.vercel.app/api?hideBorder"/>`, false, false, false);
    return TTY_SUCCESS;
}
