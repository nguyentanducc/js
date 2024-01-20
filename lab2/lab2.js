function name(lap2b) {
    // Hàm chuyển đổi từ underscore_case sang camelCase
function toCamelCase(str) {
    return str.toLowerCase().replace(/_([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

// Test
const variables = ["underscore_case", "first_name", "Some_Variable", "calculate_AGE", "delayed_departure"];
variables.forEach(variable => {
    const camelCaseVar = toCamelCase(variable);
    console.log(`${camelCaseVar} ${'✅'.repeat(camelCaseVar.length)}`);
});

}
name('lap2b');