const assert = require('assert');

// Hard Assertion (fails immediately)
function testHardAssertion() {
    console.log("Running hard assertion test...");
    assert.strictEqual(1 + 1, 2, "Math is broken!"); // Passes
    assert.strictEqual(1 + 1, 3, "This will fail!"); // This will throw an error and stop execution
    console.log("This will not be reached if assertion fails.");
}

// Soft Assertions (collects errors but continues execution)
class SoftAssert {
    constructor() {
        this.errors = [];
    }

    assertEquals(actual, expected, message) {
        try {
            assert.strictEqual(actual, expected, message);
        } catch (error) {
            this.errors.push(error.message);
        }
    }

    assertTrue(condition, message) {
        try {
            assert.ok(condition, message);
        } catch (error) {
            this.errors.push(error.message);
        }
    }

    report() {
        if (this.errors.length > 0) {
            console.log("Soft Assertion Failures:");
            this.errors.forEach((err, index) => console.log(`${index + 1}: ${err}`));
            throw new Error("Soft assertions failed!");
        } else {
            console.log("All soft assertions passed.");
        }
    }
}

// Example usage of soft assertions
function testSoftAssertion() {
    console.log("Running soft assertion test...");
    const softAssert = new SoftAssert();

    softAssert.assertEquals(1 + 1, 2, "Math should be correct"); // Passes
    softAssert.assertEquals(1 + 1, 3, "This will fail, but test continues"); // Captures error
    softAssert.assertTrue(false, "This condition should be true"); // Captures error

    console.log("Test continues even after failures...");

    softAssert.report(); // Throws error if there are any failures
}

// Run tests
try {
    testHardAssertion(); // This will stop on first failure
} catch (error) {
    console.error("Hard assertion failed:", error.message);
}

try {
    testSoftAssertion(); // This will collect failures and then throw an error at the end
} catch (error) {
    console.error("Soft assertion summary:", error.message);
}
