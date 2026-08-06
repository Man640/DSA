function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue: [number, number][] = [];
    let fresh = 0;

    // Add rotten oranges to queue and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    let minutes = 0;
    let front = 0;

    // BFS
    while (front < queue.length && fresh > 0) {
        const size = queue.length - front;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue[front++];

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}