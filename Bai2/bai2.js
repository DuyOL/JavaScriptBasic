class Person {
    constructor(ten, diachi) {
        this.ten = ten;
        this.diachi = diachi;
    }
    getdiachi() {
        return 'I Live in ' + this.diachi;
    }
}
const test = new Person("Nguyen Duc Duy", "Hai Duong");
console.log("   >>> Check test:  ", test)
console.log("   >>> Check dia chi :  ", test.getdiachi());

class Novel {
    constructor(Tittle, Author) {
        this.Tittle = Tittle;
        this.Author = Author;
    }
    getAuthor() {
        return 'Tên của bạn là ' + this.Author;
    }
}
const myNovel = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Ngọc Ánh")
console.log(myNovel);
console.log("   >>> Check Author :  ", myNovel.getAuthor());

