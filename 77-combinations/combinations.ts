function combine(n: number, k: number): number[][] {
     const result: number[][] = [];
    const path: number[] = [];

    function backtrack(start: number) {
        // Base case: combination size reached
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        // Try all possible choices
        for (let i = start; i <= n; i++) {
            // Choose
            path.push(i);

            // Explore
            backtrack(i + 1);

            // Undo choice (backtrack)
            path.pop();
        }
    }

    backtrack(1);

    return result;
};