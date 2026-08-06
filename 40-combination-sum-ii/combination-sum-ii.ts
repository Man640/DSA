function combinationSum2(candidates: number[], target: number): number[][] {
       const result: number[][] = [];
    const path: number[] = [];

    // Sort to handle duplicates
    candidates.sort((a, b) => a - b);

    function backtrack(start: number, remaining: number) {

        // Target reached
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicates at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Stop if number is too large
            if (candidates[i] > remaining) {
                break;
            }

            // Choose
            path.push(candidates[i]);

            // Explore
            // i + 1 because each number can be used only once
            backtrack(i + 1, remaining - candidates[i]);

            // Undo choice
            path.pop();
        }
    }

    backtrack(0, target);

    return result;
};