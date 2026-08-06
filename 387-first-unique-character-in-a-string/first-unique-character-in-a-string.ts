function firstUniqChar(s: string): number {
    const freq = new Map<string, number>();

    // Count frequency of each character
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Queue storing [character, index]
    const queue: [string, number][] = [];

    // Process characters in order
    for (let i = 0; i < s.length; i++) {
        queue.push([s[i], i]);

        // Remove characters that are no longer unique
        while (queue.length > 0 && freq.get(queue[0][0])! > 1) {
            queue.shift();
        }
    }

    return queue.length > 0 ? queue[0][1] : -1;
}