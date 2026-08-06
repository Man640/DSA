class RecentCounter {
    private queue: number[];

    constructor() {
        this.queue = [];
    }

    ping(t: number): number {
        // Add current request time
        this.queue.push(t);

        // Remove requests older than 3000 ms
        while (this.queue[0] < t - 3000) {
            this.queue.shift();
        }

        // Remaining requests are within the range
        return this.queue.length;
    }
}