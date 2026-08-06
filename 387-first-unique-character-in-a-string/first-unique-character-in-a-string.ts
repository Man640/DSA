function firstUniqChar(s: string): number {
    const freq = new Map<string, number>();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    const queue: [string, number][] = [];
    let front = 0;

    for (let i = 0; i < s.length; i++) {
        queue.push([s[i], i]);

        while (front < queue.length && freq.get(queue[front][0])! > 1) {
            front++;
        }
    }

    return front < queue.length ? queue[front][1] : -1;
}