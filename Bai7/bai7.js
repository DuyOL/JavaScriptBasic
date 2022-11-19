// Spread Operator (Toán Tử Mở Rộng)
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const numbersCombined = [...numbersOne, ...numbersTwo];
const numbersCombineds = [...numbersTwo, ...numbersOne];
console.log(numbersCombineds)

// Push a new item to Array (Sử dụng với Array)
let myArr = ["Eric", "HoiDanIT", "React"];
myArr = [...myArr, "new item"];// thêm phần tử vào cuối mảng với toán tử (...)
console.log(myArr);

let ngonNgu = ["Python", "PHP", "JavaScripts"];
ngonNgu = ["ruby", ...ngonNgu];// thêm phần tử vào đầu mảng với toán tử (...)
console.log(ngonNgu);

// Spread operator with Object (sử dụng với Object)
const myDuy = {
    names: 'Duy',
    ages: 20,
    address: "Hai Duong"
}
const myQuan = {
    name: "Quân",
    age: 19,
    address: "Vĩnh Phúc"
}
const update = { ...myDuy, ...myQuan };
// Thằng phần tử bên tay phải sẽ ghi đè phần tử bên tay trái
//(các thuộc tính trùng sẽ bị ghi đè) X <= Y
console.log(update);

// Cách thay đổi một thuộc tính trong một Object với toán tử (...)
const zoom = {
    name: 'Sư Tử',
    age: 14,
    address: 'Châu Phi'
}
const zooms = { ...zoom, age: 500 };
console.log(zooms)

// Bài tập 1
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
const arraysAll = [...arrayOne, ...arrayTwo];
console.log(arraysAll);
// Bài tập 2
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));


