/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // const len1 = s1.length;
    // const len2 = s2.length;

    // // If s1 is longer, it cannot be a substring of s2
    // if (len1 > len2) return false;

    // // Helper function to sort a string alphabetically
    // const sortStr = (str) => str.split('').sort().join('');

    // // Sort the target string s1 once
    // const sortedS1 = sortStr(s1);

    // // Check every possible substring of s2 with the same length as s1
    // for (let i = 0; i <= len2 - len1; i++) {
    //     // Extract the current substring
    //     const substring = s2.substring(i, i + len1);

    //     // If the sorted substring matches sorted s1, we found a permutation
    //     if (sortStr(substring) === sortedS1) {
    //         // Immediately stop and return true
    //         return true;
    //     }
    // }

    // // No matching permutation found after checking all positions
    // return false;

    // // TC = > \(O(M log M)) 

    // // SC = > O(M)

    // better apprach is sliding window


     const len1 = s1.length;
    const len2 = s2.length;

    // Edge case: s1 cannot be a permutation if it is longer than s2
    if (len1 > len2) return false;

    // Initialize frequency arrays for 26 lowercase English letters
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    // Populate frequencies for s1 and the first window of s2
    for (let i = 0; i < len1; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // Helper function to check if both frequency arrays match
    const matches = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    // If the first window matches, we are done
    if (matches(s1Count, s2Count)) return true;

    // Slide the window across s2
    for (let i = len1; i < len2; i++) {
        // Add the incoming character on the right
        s2Count[s2.charCodeAt(i) - 97]++;
        
        // Remove the outgoing character on the left
        s2Count[s2.charCodeAt(i - len1) - 97]--;

        // Check if the current window matches s1
        if (matches(s1Count, s2Count)) return true;
    }

    return false;
};