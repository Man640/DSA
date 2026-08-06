function climbStairs(n: number): number {
    // if(n===1||n===2){
    //     return n
    // }
    // return climbStairs(n-1)+climbStairs(n-2)

    //TC = > O(2n);
    //SC = >O(n);

    // here the recursive approach could work if its asmall problem
    // now here it cause time limit Exceeded warning

        if (n <= 2) {
        return n;
    }
        
    // Track choices for the last two steps only
    let prev2: number = 1;
    let prev1: number = 2;
        
    // Iteratively build up to n
    for (let i: number = 3; i <= n; i++) {
        const current: number = prev1 + prev2;
        prev2 = prev1;  // Move prev2 forward
        prev1 = current; // Move prev1 forward
    }
            
    return prev1;

    // TC = > O(n);
    // SC = > O(1);
};