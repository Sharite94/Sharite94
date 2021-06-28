const adult = function (age) {
  if (age >= 18) {
    return true;
  }
};

const sayHi = function () {
  if (adult) {
    return "Hello there";
  } else {
    return "Hey kiddo";
  }
};

adult(20);
console.log(adult(20));
console.log(sayHi(20));

const totalprice = function (baseprice, VAT) {
  return baseprice + VAT;
};

const price = (baseprice * 1, 21);
