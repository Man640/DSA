function partition(s: string): string[][] {
     const result: string[][] = [];
    const path: string[] = [];

    function isPalindrome(str: string, left: number, right: number): boolean {

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }


    function backtrack(start: number) {

        // Reached end of string
        if (start === s.length) {
            result.push([...path]);
            return;
        }


        // Try every possible substring
        for (let end = start; end < s.length; end++) {

            // Only choose palindrome substrings
            if (isPalindrome(s, start, end)) {

                // Choose
                path.push(s.substring(start, end + 1));


                // Explore
                backtrack(end + 1);


                // Undo choice
                path.pop();
            }
        }
    }


    backtrack(0);

    return result;
};