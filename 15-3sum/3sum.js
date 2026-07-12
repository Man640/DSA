/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // bruite force approach

//     let results = []

//     nums.sort((a,b)=>a-b)

//     for (let i=0; i<nums.length; i++) {
//     // check if the previous value is equal to current value
//     if (i > 0 && nums[i] === nums[i-1]) {
//         continue;
//     }
//     for (let j=i+1; j<nums.length; j++) {
//         if (j > i+1 && nums[j] === nums[j-1]) {
//             continue;
//         }
//         for(let k=j+1; k<nums.length; k++) {
//             if (k > j+1 && nums[k] === nums[k-1]) {
//                 continue;
//             }
//             // check if the total of elements in i, j and k is 0
//             if (nums[i] + nums[j] + nums[k] === 0) {
//                 results.push([nums[i], nums[j], nums[k]])
//             } 
//         }
//     }
// }
//     return results

    // Time Complexity => O(n^3)
    // Space Complexity => O(1)

    // better approach = > two pointer

    let results = [];
    let target = 0;
    nums.sort((a,b) => a-b);

     for (let i=0; i<nums.length; i++) {
        if (i > 0 && nums[i] === nums[i -1]) continue;
        
        let j = i+1;
        let k = nums.length -1;

        

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if(sum > target) {
               
                k--;
            } else if (sum < target) {
                // similarly here we have to increment j, as nums[j] < nums[j+1]
                j++;
            } else {
                // in this case we have got 1 result
                results.push([nums[i], nums[j], nums[k]]);
               
                while(nums[j] === nums[j+1]) {j++}
                while(nums[k] === nums[k-1]) {k--}
                
                j++;
                k--;
            }
        }
    }


    return results;

    // Time Complexity => O(n^2)
    // Space Complexity => O(1)
};