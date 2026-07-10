/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    //brute force

    // if(typeof s !== "string") return false

    // let cleanstring = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // if (cleanstring === cleanstring.split('').reverse().join('')){
    //     return true
    // }else{
    //    return false
    // }
    // return false

    //sc = > O(n)
    //tc = > O(n)

    // here to avoid the reverse we go for Optimazie approach
    // which is  TWO POINTER APPROACH

     let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
            left++;
        }

        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
    // sc = >O(n)
    // tc = >O(1)
};