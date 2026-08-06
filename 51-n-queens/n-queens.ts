function solveNQueens(n: number): string[][] {
     const result: string[][] = [];

    const board: string[][] = Array.from(
        { length: n },
        () => Array(n).fill(".")
    );

    const columns = new Set<number>();
    const diag1 = new Set<number>(); // row - col
    const diag2 = new Set<number>(); // row + col

    function backtrack(row: number) {

        // All queens placed
        if (row === n) {
            result.push(board.map(r => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {

            if (
                columns.has(col) ||
                diag1.has(row - col) ||
                diag2.has(row + col)
            ) {
                continue;
            }

            // Choose
            board[row][col] = "Q";
            columns.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            // Explore
            backtrack(row + 1);

            // Undo
            board[row][col] = ".";
            columns.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);

    return result;
};