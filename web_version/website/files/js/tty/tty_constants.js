/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_constants.js
*/

const TTY_SUCCESS = 0;
const TTY_ERROR = 1;
const TTY_EPITECH_ERROR = 84;
const TTY_NOT_IMPLEMENTED = 255;
const TTY_ERROR_STRING = "Error: ";
const TTY_TAB_STRING = "&nbsp;&nbsp;&nbsp;&nbsp;";

// The help trigger token
const TTY_HELP_TOKEN = [
    "help", "h",
    ".?", ".h", ".help",
    "-?", "-h", "-help",
    "--?", "--help", "--h",
    "man",
    "/help", "/h", "/?"
];

// The help commands are displayed when the user types the help command
const TTY_HELP_COMMANDS = {
    "ls": "List directory contents",
    "cd": "Change the shell working directory",
    "cat": "Concatenate files and print on the standard output",
    "pwd": "Print name of current/working directory",
    "clear or cls": "Clear the terminal screen",
    "whoami": "Print the user name associated with the current effective user ID",
    "uname": "Print system information",
    "date": "Display the current date and time",
    "time": "Display the current time",
    "echo": "Display a line of text",
    "env": "Display, set, or remove environment variables",
    "setenv": "Set an environment variable",
    "unsetenv": "Remove an environment variable",
    "exit": "Exit the shell",
    "help or h or .? or .h or .help or -? or -h or -help or --? or --help or --h or man or /help or /h or /?": "Display information about available commands",
    "make": "Compile the program",
    "neutrinos": "Run the math program",
    "pong": "Run the pong program",
    "architect": "Run the architect program",
    "nano": "Text editor",
    "alert": "Display an alert message",
    "alert_html": "Display an alert message using a custom html alert window",
    "prompt_js": "Display a prompt message using the default javascript prompt function",
    "prompt_html": "Display a prompt message using a custom html prompt function",
    "reboot": "Reboot the terminal (This command will mostly act as if you refreshed the page, thus meaning you will loose all unsaved data)",
    "joke": "Display a joke"
};
