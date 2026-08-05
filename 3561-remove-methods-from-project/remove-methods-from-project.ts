function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of invocations) {
        adj[u].push(v);
    }

    const isSuspicious: boolean[] = new Array(n).fill(false);

    // Iterative DFS avoids queue.shift() overhead
    const stack: number[] = [k];
    isSuspicious[k] = true;

    while (stack.length > 0) {
        const curr = stack.pop()!;
        for (const neighbor of adj[curr]) {
            if (!isSuspicious[neighbor]) {
                isSuspicious[neighbor] = true;
                stack.push(neighbor);
            }
        }
    }

    // Check edge boundary violations
    for (const [u, v] of invocations) {
        if (!isSuspicious[u] && isSuspicious[v]) {
            return Array.from({ length: n }, (_, i) => i);
        }
    }

    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        if (!isSuspicious[i]) {
            result.push(i);
        }
    }

    return result;
}