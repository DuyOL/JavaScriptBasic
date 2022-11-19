### Spread Operator (Toán Tử Mở Rộng)
 - Toán tử 3 dấu chấm cho phép chúng ta copy hết tất cả ( hoặc một phần )
  của một Array/Object sang một Array/Object khác.

  const numbersOne = [1,2,3];
  const numbersTwo = [4,5,6];

  const numbersCombined = [...numbersOne,...numbersTwo]; //[1,2,3,4,5,6]
  const numbersCombined = [...numbersTwo,...numbersOne]; //[4,5,6,1,2,3]