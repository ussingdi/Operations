const fs = require("fs");

function modifyFile() {
    const filename = "complexOperations.js";
    let fileContent = fs.readFileSync(filename, "utf8");

    // Add a debug statement to the `calculateSum` function
    const targetFunction = "function calculateSum(a, b) {";
    if (fileContent.includes(targetFunction)) {
        fileContent = fileContent.replace(
            targetFunction,
            `${targetFunction}\n    console.log(\`Debug: Adding \${a} and \${b}\`);`
        );
        fs.writeFileSync(filename, fileContent, "utf8");
        console.log(`Modified ${filename}: Added debug statement in 'calculateSum'.`);
    } else {
        console.log(`Could not find 'calculateSum' in ${filename}.`);
    }
}

function commitChanges() {
    // Stage and commit changes
    const { execSync } = require("child_process");
    execSync("git add .");
    execSync('git commit -m "Modified calculateSum for testing"');
    execSync("git push");
    console.log("Changes committed and pushed to the repository.");
}

// Run the functions
modifyFile();
commitChanges();
