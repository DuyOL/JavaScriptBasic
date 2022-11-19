// VD đơn giản về Other variants (?)
let user = {};
console.log(user.address); //undefined (không xác định)
console.log(user.address ? user.address.street : undefined);
//undefined (không xác định) vì không có thuộc tính street nên trả về
//undefined thay vì error

//Khi dùng toán tử ? sẽ ngắn gọn hơn như VD sau:
console.log(user?.address?.street ?? 'no found used');  //undefined (không xác định)


// VD Other variants (?) đối với Array and Object
let usedAdmin = {
    admin() {
        console.log("I am Nguyen Duc Duy");
    }
};
let usedGuest = {};
usedAdmin.admin(); // I am Nguyen Duc Duy
usedGuest.admin?.();// Nếu hàm admin này có tồn tại sẽ in ra nếu không sẽ không in ra và không lỗi

// Thao tác với Object
// obj? . a ? . b ? . c // undefined

// obj ?. a ? . b ? . c ?? ' not found '

// Thao tác Function
// obj.function?.()
let obj = {
    name: 'Duy',
    channel: 'Thơ Ông Đệ',
    address: {
        street: 'RealMadrid',
        province: 'Trần Duy Hưng'
    }
}
console.log(obj?.address?.zyz ?? 'Ngõ 3 Xóm Cầu');
const test = undefined;
test?.map?.(item => item)
console.log(test)