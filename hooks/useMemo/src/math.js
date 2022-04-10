export function isPrimeNumber(number) {
  if (!number) {
    return null;
  }

  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return number > 1;
}

export function findNthPrimeNumber(index) {
  if (!index || index < 1) {
    return null;
  }

  let leftToFind = index;
  let lastFoundPrimeNumber = 1;
  let number = 0;
  do {
    number++;

    if (isPrimeNumber(number)) {
      lastFoundPrimeNumber = number;
      leftToFind--;
      continue;
    }
  } while(leftToFind > 0);

  return lastFoundPrimeNumber;
}