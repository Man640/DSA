function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        // Best day to buy so far
        minPrice = Math.min(minPrice, price);

        // Profit if we sell today
        const profit = price - minPrice;

        // Keep maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}