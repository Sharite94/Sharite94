function value(number) {
  const outcome1 = number * number,
  const outcome2 = outcome1 + outcome1,
  const outcome3 = outcome2 * outcome2;
  return outcome3;
};


const value2 = function(number) {
  const outcome1 = number * number,
  const outcome2 = outcome1 + outcome1,
  const outcome3 = outcome2 * outcome2;
  return outcome3;
};



const value3 = () => {
  const outcome1 = number * number,
  const outcome2 = outcome1 + outcome1,
  const outcome3 = outcome2 * outcome2;
  return outcome3;
  console.log(value3(5));
};

value(5);