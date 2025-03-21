const imperativeFactorial = (n) => {
    let product = 1;
    while (n > 0) {
        product *= n;
        n--;
    }
    return product;
};

const recursiveFactoiral = (n) => {
    if (n === 0) return 1;
    return n * recursiveFactoiral(n - 1);
};

console.log(recursiveFactoiral(6));