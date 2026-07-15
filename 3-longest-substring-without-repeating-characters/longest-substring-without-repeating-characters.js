/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // sliding window 
     let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        
        // If the character is seen and inside our current window, jump 'left'
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }
        
        map.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};