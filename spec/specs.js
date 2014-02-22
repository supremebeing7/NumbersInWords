describe ('numberToWord', function() {
  it('takes the number "1" and outputs the word "one"', function () {
    numberToWord(1).should.equal("one");
  });

  it('takes the number "2" and outputs the word "two"', function () {
    numberToWord(2).should.equal("two");
  });

  it('takes the number "11" and outputs the word "eleven"', function() {
    numberToWord(11).should.equal("eleven");
  });

  it('takes the number "15" and outputs the word "fifteen"', function() {
    numberToWord(15).should.equal("fifteen");
  });

  it('takes the number "44" and outputs the word "forty four"', function() {
    numberToWord(44).should.equal("forty four");
  });

  // it('takes the number "744" and outputs the word "seven hundred forty four"', function() {
  //   numberToWord(744).should.equal("seven hundred forty four");
  // });

  it('takes the number "40" and outputs the word "forty"', function() {
    numberToWord(40).should.equal("forty");
  });

  // it('takes the number "257491" and outputs the words "two hundred fifty seven thousand four hundred ninety one"', function() {
  //   numberToWord(257491).should.equal("two hundred fifty seven thousand four hundred ninety one");
  // });
});

describe ('twoDigitNumberGreaterThanTwentyAndLessThanOneHundred', function() {
  it('takes a number greater than 20 and returns the words for that number', function() {
    twoDigitNumberGreaterThanTwentyAndLessThanOneHundred(55).should.equal("fifty five");
  });
});

describe('numberBetweenOneHundredAndOneThousand', function() {
  it('takes a number greater than 100 and returns the words for the hundred case', function() {
    numberBetweenOneHundredAndOneThousand(294).should.equal("two hundred");
  });
});

describe('numberBetweenOneThousandAndOneMillion', function() {
  it('takes a number greater than 1000 and returns the words for the thousand case', function() {
    numberBetweenOneThousandAndOneMillion(519123).should.equal("five hundred nineteen thousand");
  });

//   it('takes the number "257491" and outputs the words "two hundred fifty seven thousand"', function() {
//     numberBetweenOneThousandAndOneMillion(257491).should.equal("two hundred fifty seven thousand");
//   });
// });

// describe('numberBetweenOneHundredThousandAndOneMillion', function() {
//   it('takes a number greater than 100000 and returns the words for the hundred thousand case', function() {
//     numberBetweenOneThousandAndOneHundredThousand(519123).should.equal("five hundred nineteen thousand");
//   });
});
