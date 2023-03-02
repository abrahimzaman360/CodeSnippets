// DOTS

function reverseString(str) {
    let arr = [];

    for (let i = 0; i <= str.length - 1; ++i) {
        arr.push(str[i])
    }

    let revArr = arr.reverse().toString();
    revArr = revArr.split(',').join('')

    return revArr;
}

console.log(reverseString("Hello"))