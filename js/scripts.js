var numbers = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

var numberToWord = function(number) {
  if (number < 20) {
    return numbers[number];
  } else if ((number >= 20) && (number < 100)) {
    return twoDigitNumberGreaterThanTwentyAndLessThanOneHundred(number);
  } else if ((number >= 100) && (number < 1000)) {
    return numberBetweenOneHundredAndOneThousand(number) + " " + twoDigitNumberGreaterThanTwentyAndLessThanOneHundred(number);
  } else if ((number >= 1000) && (number < 1000000)) {
    return numberBetweenOneThousandAndOneMillion(number) + " " + numberBetweenOneHundredAndOneThousand(number) + " " + twoDigitNumberGreaterThanTwentyAndLessThanOneHundred(number);
  } 
};

var twoDigitNumberGreaterThanTwentyAndLessThanOneHundred = function(number) {

  var numberString = number.toString();
  numberString = numberString.slice(numberString.length-2)

    console.log(numbers[parseInt(numberString.charAt(1))]);

  if (numbers[parseInt(numberString.charAt(1))] === "zero") {
    console.log(numberString);
    return numbers[(Math.floor((number/10))*10)];
  } else {
  return numbers[(Math.floor((parseInt(numberString)/10))*10)] + " " + numbers[parseInt(numberString.charAt(1))];
  };
};

var numberBetweenOneHundredAndOneThousand = function(number) {

  var numberString = number.toString();
  return numbers[parseInt(numberString.charAt(0))] + " hundred" ;
}

var numberBetweenOneThousandAndOneMillion = function(number) {

  var numberString = number.toString();
  console.log(parseInt(numberString.substring(1,numberString.length-3)));
  if (number >= 100000) {
    return numberBetweenOneHundredAndOneThousand(parseInt(numberString.substring(0,numberString.length-3))) + " " + numbers[parseInt(numberString.substring(1,numberString.length-3))] + " thousand";
  }
  return numbers[parseInt(numberString.substring(0,numberString.length-3))] + " thousand";
}






