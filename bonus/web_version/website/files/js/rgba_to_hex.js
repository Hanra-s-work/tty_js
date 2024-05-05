/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** rgba_to_hex.js
*/

function rgb_to_hex(RGB_COLOUR) {
    var rgbValues = RGB_COLOUR.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
    console.log(`rgbValues = ${rgbValues}`);
    if (rgbValues == undefined || RGB_COLOUR.size == 0 || rgbValues.length == 0) {
        console.error("Colour not found, defaulting to white.");
        return "#ffffff";
    }
    var hex = "#" + ("0" + parseInt(rgbValues[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgbValues[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgbValues[3], 10).toString(16)).slice(-2);
    return hex;
}
