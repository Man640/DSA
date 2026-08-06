function isValid(s: string): boolean {
    const stack: string[] = [];

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const char of s) {
        // Opening bracket
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            // Closing bracket
            const top = stack.pop();

            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}