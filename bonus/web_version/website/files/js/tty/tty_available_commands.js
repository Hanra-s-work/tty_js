/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier [fed34_prox_vm]
** File description:
** tty_available_commands.js
*/

const tty_available_commands = {
    "ls": tty_ls,
    "cd": tty_cd,
    "cat": tty_cat,
    "pwd": tty_pwd,
    "clear": tty_cls,
    "cls": tty_cls,
    "whoami": tty_whoami,
    "uname": tty_uname,
    "date": tty_date,
    "time": tty_time,
    "echo": tty_echo,
    "env": tty_env,
    "setenv": tty_setenv,
    "unsetenv": tty_unsetenv,
    "exit": tty_exit,
    "help": tty_help,
    "h": tty_help,
    ".?": tty_help,
    ".h": tty_help,
    ".help": tty_help,
    "-?": tty_help,
    "-h": tty_help,
    "-help": tty_help,
    "--?": tty_help,
    "--h": tty_help,
    "--help": tty_help,
    "man": tty_help,
    "/?": tty_help,
    "/h": tty_help,
    "/help": tty_help,
    "make": tty_cat,
    "206neutrinos": tty_epitech_206neutrinos_start_stop_message,
    "nano": tty_nano,
    "alert": tty_alert,
    "prompt_js": tty_prompt_js_friendly,
    "prompt_html": tty_prompt_html_friendly,
    "reboot": tty_reboot
};
