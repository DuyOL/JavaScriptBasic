let person = { name: 'Eric', age: '26' }
console.log(" >>> check var ", person);
// Cách tạo một Object
const Zoo = {
    name: "Su Tu",
    bietdanh: "Chua Son Lam",
    age: 11,
    color: "Yeloww"
}
console.log(" >>> Check zoo ", Zoo)
// Cách 1
console.log(" >>> Check color ", Zoo.color)
// Cách 2
console.log(" >>> Check color ", Zoo["color"])


// Cách tạo một Array
const hocSinh = ["name", "age", "address"];
console.log(" >>> check hocSinh ", hocSinh[1]);

// Bài tập về Object
let React = {
    language: 'JavaScript',
    author: 'Fecabook',
};
let Tutorial = {
    name: "React Tutorial",
    author: "Nguyễn Đức Duy",
    language: "JavaScript"
};
console.log(" >>>", Tutorial.name)