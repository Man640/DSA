function maxSubarraySumCircular(nums: number[]): number {
    let totalSum = 0;

    let maxSum = nums[0];
    let currentMax = nums[0];

    let minSum = nums[0];
    let currentMin = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            // Kadane for maximum subarray
            currentMax = Math.max(nums[i], currentMax + nums[i]);
            maxSum = Math.max(maxSum, currentMax);

            // Kadane for minimum subarray
            currentMin = Math.min(nums[i], currentMin + nums[i]);
            minSum = Math.min(minSum, currentMin);
        }

        totalSum += nums[i];
    }

    // All numbers are negative
    if (maxSum < 0) {
        return maxSum;
    }

    // Either normal max subarray or circular max subarray
    return Math.max(maxSum, totalSum - minSum);
}