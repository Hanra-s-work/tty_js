/*
** EPITECH PROJECT, 2023
** B-MAT-400-PAR-4-1-206neutrinos-henry.letellier
** File description:
** get_class_node.js
*/

function get_class_node(CLASS_NAME) {
    var styleSheets = document.styleSheets;

    for (var i = 0; i < styleSheets.length; i++) {
        var rules = styleSheets[i].cssRules || styleSheets[i].rules;
        if (!rules) continue; // Skip if stylesheet is inaccessible

        // Iterate through all rules in the stylesheet
        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText === CLASS_NAME) {
                // Update the font style property of the rule
                console.log(`Class ${CLASS_NAME} found.`);
                return rules[j]; // Exit function once rule is found and updated
            }
        }
    }
    console.error(`Class ${CLASS_NAME} not found.`)
    return undefined;
}
