function numJewelsInStones(jewels: string, stones: string): number {
    const freq = new Map<string, number>();

    for (const stone of stones) {
        freq.set(stone, (freq.get(stone) || 0) + 1);
    }

    let count = 0;

    for (const jewel of jewels) {
        count += freq.get(jewel) || 0;
    }

    return count;
}