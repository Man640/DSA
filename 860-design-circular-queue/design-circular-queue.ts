class MyCircularQueue {
    private queue: number[];
    private front: number;
    private rear: number;
    private count: number;
    private size: number;

    constructor(k: number) {
        this.queue = new Array(k);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
        this.size = k;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }

        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.size;
        this.count++;

        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }

        this.front = (this.front + 1) % this.size;
        this.count--;

        return true;
    }

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[this.front];
    }

    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }

        // rear points to next insertion spot,
        // so previous index is the last element
        let index = (this.rear - 1 + this.size) % this.size;

        return this.queue[index];
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.size;
    }
}