function numIslands(grid: string[][]): number {
    if (grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    const directions = [
        [1, 0],   // down
        [-1, 0],  // up
        [0, 1],   // right
        [0, -1],  // left
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== "1") continue;

            islands++;

            const queue: [number, number][] = [[r, c]];
            grid[r][c] = "0"; // mark visited

            while (queue.length > 0) {
                const [row, col] = queue.shift()!;

                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (
                        nr >= 0 &&
                        nr < rows &&
                        nc >= 0 &&
                        nc < cols &&
                        grid[nr][nc] === "1"
                    ) {
                        grid[nr][nc] = "0";
                        queue.push([nr, nc]);
                    }
                }
            }
        }
    }

    return islands;
}