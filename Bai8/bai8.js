// Khi sử dụng JavaScripts thuần (Truyền Thống)
const person = { ten: 'Duy', tuoi: 20, diaChi: 'Hai Duong', gioitinh: 'Boy' };
const ten = person.ten;
const tuoi = person.tuoi;
console.log(ten);
console.log(tuoi);

// Khi sử dụng Destructuring với Object
const hocSinh = { name: 'Quan', age: 19, diaChi: 'Vinh Phuc', xex: 'Boy' };
const { diaChi, xex } = hocSinh;
console.log(diaChi);
console.log(xex);

// Khi sử dụng Destructuring với Array
const city = ['Ha Noi', 'Hai Duong', 'Hai Phong', 'Sai Gon'];
const [x, y, , a] = city;
console.log(x, y, a);

// Bài tập 1
let react = ['Fecabook', 'All-in-one', 'JavasCript'];
let [, , JavasCript] = react;
let tech = JavasCript;
console.log(tech);

// Bài tập 2
const dev = { salary: 2000, tool: 'Laptop', like: 'bugs' };
const { like } = dev;
console.log(like);
