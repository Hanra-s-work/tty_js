/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** tty_uname.js
*/

function tty_uname_get_operating_system(user_agent) {
    const userAgent = user_agent.toLowerCase();
    if (userAgent.includes("windows")) {
        return "Windows";
    } else if (userAgent.includes("android")) {
        return "Android";
    } else if (userAgent.includes("macintosh") || userAgent.includes("mac os x")) {
        return "Mac OS X";
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod")) {
        return "iOS";
    } else if (userAgent.includes("linux")) {
        return "Linux";
    } else {
        return "Unknown";
    }
}

function tty_uname_get_browser(user_agent) {
    const lower_case_ua = user_agent.toLowerCase();
    if (lower_case_ua.includes("brave")) {
        return "Brave";
    } else if (lower_case_ua.includes("vivaldi")) {
        return "Vivaldi";
    } else if (lower_case_ua.includes("yabrowser")) {
        return "Yandex Browser";
    } else if (lower_case_ua.includes("ucbrowser")) {
        return "UC Browser";
    } else if (lower_case_ua.includes("samsungbrowser")) {
        return "Samsung Internet";
    } else if (lower_case_ua.includes("opera mini")) {
        return "Opera Mini";
    } else if (lower_case_ua.includes("duckduckgo")) {
        return "DuckDuckGo Browser";
    } else if (lower_case_ua.indexOf("opera") !== -1 || lower_case_ua.indexOf("OPR") !== -1) {
        return "Opera";
    } else if (lower_case_ua.indexOf("edge") !== -1) {
        return "Edge";
    } else if (lower_case_ua.indexOf("chrome") !== -1) {
        return "Chrome";
    } else if (lower_case_ua.indexOf("safari") !== -1) {
        return "Safari";
    } else if (lower_case_ua.indexOf("firefox") !== -1) {
        return "Firefox";
    } else if (lower_case_ua.indexOf("trident") !== -1 || lower_case_ua.indexOf("MSIE") !== -1) {
        return "Internet Explorer";
    } else {
        return "Unknown";
    }

}

function tty_uname_get_platform(user_agent) {
    // Define a regular expression pattern to match the platform information
    const platformPattern = /\((.*?)\)/;
    const match = user_agent.match(platformPattern);

    // If a match is found, return the extracted platform information (the first capturing group)
    if (match && match.length > 1) {
        return match[1];
    } else {
        return "Unknown";
    }
}

function tty_uname_get_app_version() {
    const userAgent = navigator.userAgent;
    const appVersionIndex = userAgent.indexOf(") ") + 2; // Find the index of the closing parenthesis and move two characters forward
    const appVersionEndIndex = userAgent.indexOf(" ", appVersionIndex); // Find the index of the next space after the closing parenthesis
    const appVersion = userAgent.substring(appVersionIndex, appVersionEndIndex); // Extract the substring between the two indices
    return appVersion;
}

function tty_uname_help() {
    printf("Usage: uname [OPTION]...", true);
    printf("Print certain system information.  With no OPTION, same as -s.", true);
    printf("", true);
    printf("  -a, --all                print all information, in the following order,", true);
    printf("                             except omit -p and -i if unknown:", true);
    printf("  -s, --kernel-name        print the kernel name", true);
    printf("  -n, --nodename           print the network node hostname", true);
    printf("  -r, --kernel-release     print the kernel release", true);
    printf("  -v, --kernel-version     print the kernel version", true);
    printf("  -m, --machine            print the machine hardware name", true);
    printf("  -p, --processor          print the processor type (non-portable), [unavailable in javascript]", true);
    printf("  -i, --hardware-platform  print the hardware platform (non-portable), [unavailable in javascript]", true);
    printf("  -o, --operating-system   print the operating system", true);
    printf("      --help     display this help and exit", true);
    printf("      --version  output version information and exit", true);
    printf("", true);
    printf("GNU coreutils online help: <https://www.gnu.org/software/coreutils/>", true);
    printf("Full documentation <https://www.gnu.org/software/coreutils/uname>", true);
    printf("or available locally via: info '(coreutils) uname invocation'", true);
}
async function tty_uname(command) {
    if (command.length === 0) {
        command.push("-a"); // If no option provided, default to -a
    }
    let unameInfo = "";
    const ua = navigator.userAgent;
    var usr_opt = "";
    const kernelName = tty_uname_get_platform(ua); // Kernel name
    const nodeName = window.location.hostname; // Network node hostname
    const kernelRelease = navigator.userAgent; // Kernel release
    const kernelVersion = tty_uname_get_app_version(ua); // Kernel version
    const machineHardware = tty_uname_get_browser(ua); // Machine hardware name
    const operatingSystem = tty_uname_get_operating_system(ua); // Operating system
    const all_in_one = `${kernelName} ${nodeName} ${kernelRelease} ${kernelVersion} ${machineHardware} ${operatingSystem}`;

    for (var i = 0; i < command.length; i++) {
        usr_opt = command[i].trim()
        console.log(`usr_opt = ${usr_opt}`);
        // Determine which option was provided and retrieve the corresponding system information
        switch (usr_opt) {
            case "-h":
            case "--help":
                tty_uname_help();
                return TTY_SUCCESS;
            case "--kernel-name":
            case "-s":
                unameInfo = kernelName; // Kernel name
                break;
            case "--nodename":
            case "-n":
                unameInfo = nodeName; // Network node hostname
                break;
            case "--kernel-release":
            case "-r":
                unameInfo = kernelRelease; // Kernel release
                break;
            case "--kernel-version":
            case "-v":
                unameInfo = kernelVersion; // Kernel version
                break;
            case "--machine":
            case "-m":
                unameInfo = machineHardware; // Machine hardware name
                break;
            case "--operating-system":
            case "-o":
                unameInfo = operatingSystem; // Machine hardware name
                break;
            case "--all":
            case "-a":
                unameInfo = all_in_one; // All information
                break;
            default:
                // If no or unrecognized option provided, print all information
                unameInfo = all_in_one;
                break;
        }

        printf(unameInfo, true); // Print the system information
    }
    return TTY_SUCCESS;
}

