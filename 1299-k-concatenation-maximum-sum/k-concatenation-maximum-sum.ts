function kConcatenationMaxSum(arr: number[], k: number): number {
    const MOD = 1_000_000_007;

    function kadane(nums: number[]): number {
        let current = 0;
        let best = 0;

        for (const num of nums) {
            current = Math.max(num, current + num);
            best = Math.max(best, current);
        }

        return best;
    }

    const sum = arr.reduce((a, b) => a + b, 0);

    // k = 1
    if (k === 1) {
        return kadane(arr) % MOD;
    }

    // Need only two copies
    const twice = [...arr, ...arr];
    let answer = kadane(twice);

    // Middle copies give extra value only if total sum is positive
    if (sum > 0) {
        answer += (k - 2) * sum;
    }

    return answer % MOD;
}