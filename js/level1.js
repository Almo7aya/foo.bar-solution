console.log('working');

const number = 15324;

console.log(answer(number));

function answer(n) {
    const arr = [];
    let minSum = n;
    while (minSum) {
        const last = getMaxSq(minSum);
        minSum = minSum - last;
        arr.push(last || 1);
    }
    return arr;
}

function getMaxSq (n) {
    let i = 1;
    let lastSq = 0;
    while (true) {
        const mul = Math.pow(i, 2);
        if (mul >= n) {
            break;
        }
        lastSq = mul;
        i++;
    }

    return lastSq || 1;
}