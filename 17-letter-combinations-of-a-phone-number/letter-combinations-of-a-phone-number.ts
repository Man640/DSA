function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const result: string[] = [];

    const phoneMap: { [key: string]: string } = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    function backtrack(index: number, path: string) {

        // Base case: all digits processed
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const letters = phoneMap[digits[index]];

        // Try every letter for current digit
        for (const letter of letters) {

            // Choose
            backtrack(index + 1, path + letter);

            // No explicit undo needed because strings are immutable
        }
    }

    backtrack(0, "");

    return result;
};