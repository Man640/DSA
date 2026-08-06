function predictPartyVictory(senate: string): string {
    const n = senate.length;

    const radiant: number[] = [];
    const dire: number[] = [];

    // Fill queues with senator positions
    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    let rFront = 0;
    let dFront = 0;

    // Simulate rounds
    while (rFront < radiant.length && dFront < dire.length) {
        const rIndex = radiant[rFront++];
        const dIndex = dire[dFront++];

        if (rIndex < dIndex) {
            // Radiant bans Dire, Radiant senator returns next round
            radiant.push(rIndex + n);
        } else {
            // Dire bans Radiant, Dire senator returns next round
            dire.push(dIndex + n);
        }
    }

    return rFront < radiant.length ? "Radiant" : "Dire";
}