function minimumPushes(word: string): number {
    let n = word.length;
    let totalPushes = 0;
    let pressesRequired = 1;

    while (n > 0) {
        // Greedily take up to 8 characters for the current tier
        const charsInThisTier = Math.min(n, 8);

        // Add total cost for this tier
        totalPushes += charsInThisTier * pressesRequired;

        // Move to the next tier
        n -= charsInThisTier;
        pressesRequired++;
    }

    return totalPushes;

    // greedy algorithum
 };