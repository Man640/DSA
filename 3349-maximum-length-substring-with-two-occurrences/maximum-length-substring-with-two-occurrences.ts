function maximumLengthSubstring(s: string): number {
    let left = 0;
    let maxLength = 0;

    // Stores how many times each character appears
    // in the current window.
    const count = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Add the new character to the window
        count.set(char, (count.get(char) || 0) + 1);

        // If some character appears more than twice,
        // shrink the window from the left.
        while (count.get(char)! > 2) {
            const leftChar = s[left];

            count.set(leftChar, count.get(leftChar)! - 1);

            left++;
        }

        // Current window is valid
        const currentLength = right - left + 1;

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}