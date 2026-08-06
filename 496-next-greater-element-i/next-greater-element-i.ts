function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
     const stack: number[] = [];
    const map = new Map<number, number>();

    for (const num of nums2) {
        while (
            stack.length > 0 &&
            num > stack[stack.length - 1]
        ) {
            map.set(stack.pop()!, num);
        }

        stack.push(num);
    }

    while (stack.length > 0) {
        map.set(stack.pop()!, -1);
    }

    return nums1.map(num => map.get(num)!);
};