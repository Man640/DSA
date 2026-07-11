/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // brute force

    // for(let i=0;i<numbers.length;i++){
    //     for(let j=i+1;j<numbers.length;j++){
    //         if(numbers[i]+numbers[j]===target){
    //             return[i+1,j+1];
    //         }
    //     }
    // }

    // TC = > O(n^2);
    // SC = > O(1);

    // optimise approach, but  the time con plexity will ve higher = > has map

    // const map = new Map();

    // for (let i = 0; i < numbers.length; i++) {
    //     const needed = target - numbers[i];

    //     if (map.has(needed)) {
            
    //         return [map.get(needed) + 1, i + 1]; 
    //     }

        
    //     map.set(numbers[i], i); 
    // }

    // the best optimised approach = > Two pointer

     let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; 
        } else if (sum < target) {
            left++; 
        } else {
            right--; 
        }
    }
};