function minWindow(s: string, t: string): string {

    //  if (!s || !t || s.length < t.length) {
    //     return "";
    // }

    // let minLen = Infinity;
    // let result = "";

    // // 1. Map target frequencies
    // const tCount: Record<string, number> = {};
    // for (const char of t) {
    //     tCount[char] = (tCount[char] || 0) + 1;
    // }

    // // 2. Generate and check every possible substring
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i; j < s.length; j++) {
    //         const substring = s.substring(i, j + 1);

    //         // Count characters in current substring
    //         const subCount: Record<string, number> = {};
    //         for (const char of substring) {
    //             subCount[char] = (subCount[char] || 0) + 1;
    //         }

    //         // Check if all required characters match
    //         let isValid = true;
    //         for (const char in tCount) {
    //             if ((subCount[char] || 0) < tCount[char]) {
    //                 isValid = false;
    //                 break;
    //             }
    //         }

    //         // 3. Keep track of the shortest valid match
    //         if (isValid && substring.length < minLen) {
    //             minLen = substring.length;
    //             result = substring;
    //         }
    //     }
    // }

    // return result;


    // TC = > O(n^3)



    // Optimal apprach = > Sliding window


        if (!s || !t || s.length < t.length) return "";

    // Count required frequencies
    const targetMap: Record<string, number> = {};
    for (const char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1;
    }

    const requiredUniqueChars = Object.keys(targetMap).length;
    const windowMap: Record<string, number> = {};

    let left = 0;
    let formedUniqueChars = 0;
    let minLen = Infinity;
    let startIdx = 0;

    // Expand the window
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        windowMap[rightChar] = (windowMap[rightChar] || 0) + 1;

        // If frequency matches target, we matched one unique character
        if (targetMap[rightChar] !== undefined && windowMap[rightChar] === targetMap[rightChar]) {
            formedUniqueChars++;
        }

        // Shrink the window from the left if it's valid
        while (formedUniqueChars === requiredUniqueChars) {
            const currentLen = right - left + 1;
            if (currentLen < minLen) {
                minLen = currentLen;
                startIdx = left;
            }

            const leftChar = s[left];
            windowMap[leftChar]--;

            // If a required character drops below needed frequency, window is invalid
            if (targetMap[leftChar] !== undefined && windowMap[leftChar] < targetMap[leftChar]) {
                formedUniqueChars--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(startIdx, startIdx + minLen);
};