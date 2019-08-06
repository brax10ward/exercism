exports.validate = input => {
  const inputString = input.toString();
  const inputLength = inputString.length;

  if (inputLength === 1) {
    return true;
  }

  if (inputLength === 2) {
    return false;
  }

  const sum = inputString
    .split("")
    .map(digit => Math.pow(parseInt(digit), inputLength))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum === input;
};

exports.validate(153);
