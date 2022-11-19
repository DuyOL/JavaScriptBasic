// Map()
const myArray = [1, 2, 3, 4];
const myList = myArray.map((item, index) => {
    return item * 2;
});
console.log(myArray, myList)

// Filter
const ages = [31, 13, 84, 90];
const result = ages.filter((items) => {
    return items >= 18;
});
console.log(result)
