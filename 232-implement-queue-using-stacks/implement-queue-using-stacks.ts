class MyQueue {
    private inputStack: number[];
    private outputStack: number[];

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    push(x: number): void {
        this.inputStack.push(x);
    }

    pop(): number {
        this.moveIfNeeded();
        return this.outputStack.pop()!;
    }

    peek(): number {
        this.moveIfNeeded();
        return this.outputStack[this.outputStack.length - 1];
    }

    empty(): boolean {
        return (
            this.inputStack.length === 0 &&
            this.outputStack.length === 0
        );
    }

    private moveIfNeeded(): void {
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop()!);
            }
        }
    }
}