/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Brute-Force 


    // let longest = 0;

    // for(const num of nums){
    //     let current = num
    //     let count = 1;

    //     while(nums.includes(current+1)){
    //         current = current + 1
    //         count ++
    //     }

    //     longest = Math.max(longest ,count);
    // }

    // return longest;

//     Time complexity: \(O(n^2)\) worst case.
//      Space complexity: \(O(1)\) auxiliary space.

// Optimal Approach ...

  const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let count = 1;

            while (numSet.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
};