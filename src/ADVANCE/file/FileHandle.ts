import * as fs from "fs";

const filePath = "example.txt";

// Writing
function writeFile(content: string): void {
    try {
        fs.writeFileSync(filePath, content, "utf8");
        console.log("File written successfully.");
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error writing file:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

// Reading 
function readFile(): void {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        console.log("File content:");
        console.log(data);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error reading file:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}


writeFile("Hello, OM KAKDE !");
readFile();
