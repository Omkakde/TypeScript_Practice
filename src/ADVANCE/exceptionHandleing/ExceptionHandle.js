function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("An error occurred:", error.message);
        }
        else {
            console.error("An unexpected error occurred.");
        }
        return 0;
    }
    finally {
        console.log("Execution completed.");
    }
}
var results = divideNumbers(10, 0);
console.log("Result:", results);
