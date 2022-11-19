const s1 = "Hello world";
const s2 = 'Hello World';
const s3 = `Hello world`;
console.log(s1, '+', s2, '+', s3);

let a = 5;
let b = 10;
console.log('Fifteen' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
console.log(`Fifteen ${(a + b)}  and
not ${(6 * a + b)}`);

const base_url = "Localhost:8000";
const api = "get-user"; fetch_page = 2;
const ketqua = `${base_url}/${api}?page=${fetch_page}`;
console.log(ketqua);