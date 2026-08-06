function findMiddleIndex(nums: number[]): number {
    let totalSum = 0;

    // Calculate total sum
    for (const num of nums) {
        totalSum += num;
    }

    let leftSum = 0;

    // Find middle index
    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}