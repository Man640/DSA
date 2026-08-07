function reverseBits(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1;        // Make room for the next bit
        result |= (n & 1);   // Copy the last bit of n
        n >>>= 1;            // Unsigned right shift
    }

    return result >>> 0;     // Convert to unsigned 32-bit
}