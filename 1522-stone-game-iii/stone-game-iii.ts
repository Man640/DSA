function stoneGameIII(stoneValue: number[]): string  {

//     // // brute force (recursive)
//     const n = stoneValue.length;

//     // റിക്കർഷൻ വഴി എല്ലാ സാധ്യതകളും പരിശോധിക്കുന്നു
//     function solve(i: number): number {
//         // കല്ലുകൾ ഒന്നും ബാക്കിയില്ലെങ്കിൽ സ്കോർ വ്യത്യാസം പൂജ്യം
//         if (i >= n) return 0;

//         // സാധ്യത 1: ഒരു കല്ല് എടുക്കുമ്പോൾ
//         let ans = stoneValue[i] - solve(i + 1);

//         // സാധ്യത 2: രണ്ട് കല്ലുകൾ എടുക്കുമ്പോൾ
//         if (i + 1 < n) {
//             ans = Math.max(ans, (stoneValue[i] + stoneValue[i + 1]) - solve(i + 2));
//         }

//         // സാധ്യത 3: മൂന്ന് കല്ലുകൾ എടുക്കുമ്പോൾ
//         if (i + 2 < n) {
//             ans = Math.max(ans, (stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2]) - solve(i + 3));
//         }

//         return ans;
//     }

//     const diff = solve(0);
//     if (diff > 0) return "Alice";
//     if (diff < 0) return "Bob";
//     return "Tie";

//    // TC = > O(3N);
//    // SC = > O(1);

    // Optimised = > Dynamic programing (Bottum-up approach)

      const n = stoneValue.length;
    // ഓരോ ഇൻഡെക്സിലെയും മികച്ച സ്കോർ സൂക്ഷിക്കാൻ dp അറേ (വലിപ്പം n + 1)
    const dp = new Array(n + 1).fill(0);

    // കളി അവസാനിക്കുന്ന ഇടത്തുനിന്ന് പിന്നോട്ട് ലൂപ്പ് ചെയ്യുക
    for (let i = n - 1; i >= 0; i--) {
        // ഒരു കല്ല് എടുക്കുന്നു
        let ans = stoneValue[i] - dp[i + 1];

        // രണ്ട് കല്ലുകൾ എടുക്കുന്നു
        if (i + 1 < n) {
            ans = Math.max(ans, stoneValue[i] + stoneValue[i + 1] - dp[i + 2]);
        }

        // മൂന്ന് കല്ലുകൾ എടുക്കുന്നു
        if (i + 2 < n) {
            ans = Math.max(ans, stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]);
        }

        dp[i] = ans;
    }

    const diff = dp[0];
    if (diff > 0) return "Alice";
    if (diff < 0) return "Bob";
    return "Tie";

    // // TC & SC = > O(N);
}