// DOTS


// Problem: String Reverse;
function reverseString(str) {
  /** 
    ! Beginner Approach Maybe: (Hard Lock) **/
    let arr = [];

    for (let i = 0; i <= str.length - 1; ++i) {
        arr.push(str[i])
    }

    let revArr = arr.reverse().toString();
    revArr = revArr.split(',').join('')

    return revArr;
  /* Next Approach - Intermediate */
}

console.log(reverseString("Hello World"));
