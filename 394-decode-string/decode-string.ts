function decodeString(s: string): string {
    const countStack: number[] = [];
    const stringStack: string[] = [];

    let currentString = "";
    let currentNumber = 0;

    for (const char of s) {

        // Build number
        if (char >= "0" && char <= "9") {
            currentNumber = currentNumber * 10 + Number(char);
        }

        // Save current state
        else if (char === "[") {
            countStack.push(currentNumber);
            stringStack.push(currentString);

            currentNumber = 0;
            currentString = "";
        }

        // Build string
        else if (char !== "]") {
            currentString += char;
        }

        // Decode section
        else {
            const repeat = countStack.pop()!;
            const previousString = stringStack.pop()!;

            currentString = previousString + currentString.repeat(repeat);
        }
    }

    return currentString;
}