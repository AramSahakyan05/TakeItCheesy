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
    if(a === 0 && b === 0) {
      return ['Your numbers must be greather than 1']
    }
    if((a && b) && (a >= 1 && b >= 1)) {
      if(a === 1 && b === 1) {
        return [`${a} neither prime nor composite`]
      }
      if(a === b) {
        if(isPrime(a)) {
          return ['Prime number: ', a]
        } else if (!isPrime(a)) {
          return ['Composite number: ', a]
        }
      }
      if(a < b) {
        for (let num = a; num <= b; num++) {
          if (isPrime(num)) {
            primeNumbers.push(num);
          } else {
            if(num !== 1) {
              compositeNumbers.push(num)
            };
          }
        }
        return ["Prime numbers: ",...primeNumbers, "Composite numbers: ",...compositeNumbers]
      } else return ['First number must be less or equal than the second, try again']
        
    } else {
        return ["Something went wrong try again"];
    }
}

export {primeCompositeArray};