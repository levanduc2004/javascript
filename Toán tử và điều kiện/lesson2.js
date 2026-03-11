// Bài 1: Nhập 1 số và kiểm tra số chẵn hay lẻ.

let number = prompt("Nhap so");
let parseInt = Number.parseInt(number);
const checkEvenorOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(checkEvenorOdd(parseInt));

// Bài 2: Kiểm tra số dương, âm hay bằng 0.

const checkNumber = (number) => {
  if (number > 0) {
    return "positive number";
  } else if (number === 0) {
    return "zero";
  } else {
    return "negative number";
  }
};
console.log(checkNumber(parseInt));

//  Bài 3: Nhập điểm và phân loại:

// ≥ 8: Giỏi

// ≥ 6.5: Khá

// ≥ 5: Trung bình

// < 5: Yếu

const point = (number) => {
  switch (number) {
    case number >= 8:
      return "Giỏi";
    case number >= 6.5:
      return "Khá";
    case number >= 5:
      return "Trung bình";
    case number < 5:
      return "Yếu";
    default:
      return null;
  }
};
console.log(point(number));

// Bài 4: Kiểm tra năm nhuận

const checkLeapYear = (number) => {
  if (number % 100 !== 0 && number % 4 === 0) {
    return "Năm nhuận";
  } else {
    return "Không phải năm nhuận";
  }
};
let numberYear = prompt("nhập năm");
console.log(checkLeapYear(Number.parseInt(numberYear)));

//Bài 5: So sánh 2 số và in ra số lớn hơn.
const compareTwoNumber = (a, b) => {
  a > b ? console.log(a) : console.log(b);
};

compareTwoNumber(3, 4);

//Bài 6: Viết chương trình máy tính đơn giản (+ - * /).

const calculator = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};
console.log(calculator(1, 2, "+"));
