function canConstruct(ransomNote: string, magazine: string): boolean {
    const count = new Map<string, number>();

    // Count characters in magazine
    for (const char of magazine) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    // Use characters for ransomNote
    for (const char of ransomNote) {
        if (!count.has(char) || count.get(char)! === 0) {
            return false;
        }

        count.set(char, count.get(char)! - 1);
    }

    return true;
}