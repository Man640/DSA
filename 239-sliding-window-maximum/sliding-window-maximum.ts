function maxSlidingWindow(nums: number[], k: number): number[] {
    // Optimal Aproach = > sliding window

        if (nums.length === 0 || k === 0) return [];
    
    const result: number[] = [];
    const deque: number[] = []; // Stores indices

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window bounds
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift(); // Remove from front
        }

        // 2. Remove elements smaller than the current element from the back
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop(); // Remove from back
        }

        // 3. Add current element's index to the back
        deque.push(i);

        // 4. Append the maximum element to the result once the window reaches size k
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;

};