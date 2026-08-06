function dailyTemperatures(temperatures: number[]): number[] {
    const result = new Array(temperatures.length).fill(0);
    const stack: number[] = []; // stores indices

    for (let i = 0; i < temperatures.length; i++) {
        // Found a warmer temperature for previous days
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const prevDay = stack.pop()!;
            result[prevDay] = i - prevDay;
        }

        // Store current day index
        stack.push(i);
    }

    return result;
}