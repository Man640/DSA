/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // Bute force

    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]===target){
    //             return [i,j]
    //         }
    //     }
    // }
  // TC o(n2)
  // SC o(1)

  //optomised approach  = > Hash map

   const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }

 // TC o(n)
 // SC o(n)

};
