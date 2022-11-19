### Template literals (Template strings)
- Các chữ mẫu là các chữ được phân tách bằng các ký tự backtick (`), cho phép các chuỗi   nhiều dòng, nội suy chuỗi với các biểu thức được nhúng và các cấu trúc đặc biệt được gọi là các mẫu được gắn thẻ.
### Back-Tick Syntax
- Sử dụng dấu nháy chéo thay vì dấu nháy đơn/nháy đôi
- Với Template strings , chúng ta sử dụng dấu nháy đơn và nháy đôi cùng 1 lúc
### Multi-line strings
 - Bất kỳ ký tự dòng mới nào được chèn vào nguồn đều là một phần của mẫu chữ.
 - Sử dụng các chuỗi bình thường, bạn sẽ phải sử dụng cú pháp sau để có được các chuỗi nhiều dòng : 
        console.log("string text line 1\n" + "string text line 2");
        // "string text line 1
        // string text line 2"
 _ Sử dụng chữ mẫu, bạn có thể làm tương tự với điều này:
                  console.log(`string text line 1
                  string text line 2`);
                  // "string text line 1
                  // string text line 2"