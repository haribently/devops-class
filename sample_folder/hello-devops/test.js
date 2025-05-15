const greet = require('./app');
if (greet() === 'Hello devops') {
    console.log("✅Test passed");
    Process.exit(0);
    } else {
        console.log("❌Test failed");
        Process.exit(1);
        }