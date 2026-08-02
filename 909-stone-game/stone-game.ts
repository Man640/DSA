function stoneGame(piles: number[]): boolean {

    // brute force  (recursive);

    // const n = piles.length;

    // function solve (i:number,j:number):number{
    //     if(i>j){
    //         return 0
    //     }

    //     let pickleft = piles[i] - solve(i+1,j);

    //     let pickright = piles[j] - solve(i,j-1);

    //     return Math.max(pickleft,pickright)
    // }
    // return solve(0,n-1) > 0

    // // TC = > O(2n)

    // // SC = >O(n)

    // optimized approach

     let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < piles.length; i++) {
        if (i % 2 === 0) {
            evenSum += piles[i];
        } else {
            oddSum += piles[i];
        }
    }

    // രണ്ട് തുകയും തുല്യമാകില്ല (കാരണം ആകെ കല്ലുകളുടെ എണ്ണം ഒറ്റസംഖ്യയാണ്).
    // അതിനാൽ Alice കൂടുതൽ കല്ലുകളുള്ള ഗ്രൂപ്പ് തിരഞ്ഞെടുത്ത് എപ്പോഴും വിജയിക്കും.
    return evenSum > oddSum || oddSum > evenSum; 

    // TC = >  O(n);

    // SC = > O(1);
};