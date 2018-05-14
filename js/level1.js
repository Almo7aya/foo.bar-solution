

// const number = 1000000;
// console.log(answer(number));

function answer(n) {
    const arr = [];
    if (!n) return arr;
    let minSum = n;
    while (minSum) {
        const last = getMaxSq(minSum);
        minSum -= last;
        arr.push(last || 1);
    }
    return arr;
}

function getMaxSq(n) {
    let i = 0;
    let lastSq = 0;
    while (true) {
        const square = Math.pow(i, 2);
        if (square >= n) {
            break;
        }
        lastSq = square;
        i++;
    }
    return lastSq || 1;
}

// function caseTester (max) {
//     i = 1;
//     while (i < max) {
//         if (arrToNum(answer(i)) !== i) {
//             console.log('errwith ->', arrToNum(answer(i)));
//         }
//         console.log(arrToNum(answer(i)) === i);
//         i++;
//     }
//     console.log('pass');
// }

// function arrToNum (arr) {
//     return arr.reduce((acc, value) => {
//         return acc += +value;
//     }, 0);
// }


// console.log(answer(0));