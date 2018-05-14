let i, j;
let rs = '';
for (i = 2; i < 30000; i++) {
    console.log(j)
    for (j = 2; j <= i; j++) {
        if (i == j) {
            rs = rs + i;
        }
        if (i % j == 0) {
            break;
        }
    }
}

function answer(n) {
    return rs.split('').slice(n, n + 5).join('');
}

// console.log(rs);