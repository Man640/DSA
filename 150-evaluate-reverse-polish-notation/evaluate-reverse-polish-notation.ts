function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (
            token === "+" ||
            token === "-" ||
            token === "*" ||
            token === "/"
        ) {
            const second = stack.pop()!;
            const first = stack.pop()!;

            switch (token) {
                case "+":
                    stack.push(first + second);
                    break;
                case "-":
                    stack.push(first - second);
                    break;
                case "*":
                    stack.push(first * second);
                    break;
                case "/":
                    stack.push(Math.trunc(first / second));
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
}