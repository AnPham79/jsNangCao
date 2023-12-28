// Trong JavaScript, scope (phạm vi) xác định vị trí và quyền truy cập của các biến được khai báo. 
// Scope quyết định những phần của mã có thể truy cập biến hoặc hàm nhất định.

// Có hai loại phạm vi chính trong JavaScript:

// 1. Global Scope (Phạm vi toàn cục):
// Biến được khai báo ở ngoài bất kỳ hàm nào được coi là biến 
// toàn cục và có thể truy cập từ mọi nơi trong mã.
// Được tạo khi mã bắt đầu chạy và tồn tại cho đến khi trang 
// web hoặc ứng dụng kết thúc.
// 2. Local Scope (Phạm vi cục bộ):
// Biến được khai báo bên trong một hàm chỉ có thể truy cập 
// được trong hàm đó (nghĩa là có phạm vi cục bộ).
// Mỗi khi một hàm được gọi, một phạm vi cục bộ mới sẽ được tạo 
// ra cho hàm đó, và biến được khai báo trong hàm chỉ tồn tại trong phạm vi đó.

// các loại phạm vi
// -- global (toàn cục)
// -- code block (khối mã) let const không có var vì var nó sẽ thành hàm global

// ví dụ về code block
// ----------------------------
// {
// const age = 18
//}
// -----------------------------

// -- local scope (hàm): var, function

// khi gọi mỗi hàm thì sẽ luôn có phạm vi mới đc gọi
// các hàm có thể truy cập các biến đc khai báo trong
// phạm vi của nó và bên ngoài nó.



const age = 18;

{
    {
        const age = 17;
        {
            {
                const age = 12;
                {
                    console.log('age: ' + age);
                }
            }
        }
    }
}

// nó sẽ lấy giá trị trong phạm vi gần nhất
// đây là cách 1 biến đc truy cập