
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeCompositeArray(a, b) {
    const primeNumbers = [];
    const compositeNumbers = [];

    for (let num = a; num <= b; num++) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        } else {
            compositeNumbers.push(num);
        }
    }
    return [...primeNumbers, ...compositeNumbers]
}

export {primeCompositeArray};