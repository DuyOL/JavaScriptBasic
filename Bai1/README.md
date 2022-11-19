### Var
 - var, phạm vi của biến số là phạm vi hàm số (function scope) chứa phần khai báo biến hoặc phạm vi toàn cục (Global scope)==> Phạm vi rộng nhất có thể
 - VD (Global scope)
    :root {
        --color: red;
    }
    div {
        color: var(--color)
    }
 - Có thể gán lại và khai báo lại biến sử dụng từ khóa var
 - var được đưa lên đầu phạm vi của chúng và được khởi tạo với giá trị undefined.

 ### let
 - Phạm vi của biến sử dụng let là phạm vi một khối (block), xác định bởi cặp {}
 - Let được định phạm vi trong khối mã (Block-scoped)
 - VD (Block-scoped)
     let greeting = “say Hi”;

   let times = 4;

   if (times > 3) {

        let hello = “say Hello instead”;

        console.log(hello);// “say Hello instead”

    }
   console.log(hello) // hello is not defined
   - Khi truy cập biến hello bên ngoài khối mã chứa khai báo sẽ nhận được thông báo hello is not define. Bởi vì biến hello được khai báo bằng let và chỉ tồn tại trong khối mã của mệnh đề if.
   - Let có thể được cập nhật nhưng không được khai báo lại
  ### const
  -Khai báo const được định phạm vi theo khối mã (Block-scoped)
  -Giống với khai báo let, khai báo biến const chỉ được truy cập trong khối mã biến được khai báo
  -Const không thể được cập nhật và khai báo lại
  -Không thể cập nhật và khai báo lại nghĩa là giá trị của biên không thể được thay đổi và không thể khai báo biến có trùng tên trong cùng phạm vi tồn tại
  -Giống với let, khai báo const được dịch chuyển lên đầu của đoạn mã nhưng không được khởi gán giá trị.

  #### Tóm lại sự khác nhau giữa var ,let  ,const có thể hiểu như sau :
  + Khai báo var được định phạm vi toàn cục (global) hay hàm (function) trong khi let và const được định phạm vi là khối mã (block)
  + Biến var có thể được cập nhật và khai báo lại trong phạm vi tồn tại; biến let có thể được cập nhật nhưng không thể khai báo lại; biến const không thể cập nhật nhưng không thể khai báo lại.
  + Khai báo của var, let, const đều được dịch chuyển lên đầu của phạm vi. Nhưng trong khi biến var được khởi gán giá trị với undefined, biến let và const không được khởi gán giá trị.
  + Trong khi var và let có thể được khai báo không khởi gán giá trị, const phải khởi gán giá trị khi khai báo.