"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = "example.txt";
// Writing
function writeFile(content) {
    try {
        fs.writeFileSync(filePath, content, "utf8");
        console.log("File written successfully.");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error writing file:", error.message);
        }
        else {
            console.error("Unexpected error:", error);
        }
    }
}
// Reading 
function readFile() {
    try {
        var data = fs.readFileSync(filePath, "utf8");
        console.log("File content:");
        console.log(data);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error reading file:", error.message);
        }
        else {
            console.error("Unexpected error:", error);
        }
    }
}
writeFile("Hello, OM KAKDE !");
readFile();
