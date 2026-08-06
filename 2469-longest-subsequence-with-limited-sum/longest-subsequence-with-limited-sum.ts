function answerQueries(nums: number[], queries: number[]): number[] {
    // Sort nums to take smallest elements first
    nums.sort((a, b) => a - b);

    // Build prefix sum
    const prefix: number[] = [];
    let sum = 0;

    for (const num of nums) {
        sum += num;
        prefix.push(sum);
    }

    const result: number[] = [];

    // Binary search for each query
    for (const query of queries) {
        let left = 0;
        let right = prefix.length - 1;
        let ans = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid] <= query) {
                // We can take mid + 1 elements
                ans = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        result.push(ans);
    }

    return result;
}