function findMissingElements(nums: number[]): number[] {
    const set = new Set(nums);

    let min = nums[0];
    let max = nums[0];

    // Find min and max
    for (const num of nums) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const result: number[] = [];

    // Check every number in the range
    for (let num = min; num <= max; num++) {
        if (!set.has(num)) {
            result.push(num);
        }
    }

    return result;
}