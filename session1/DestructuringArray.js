//Destructuring trong JavaScript là một cách rút gọn, 
//tiện lợi để trích xuất dữ liệu từ một mảng hoặc đối tượng và gán chúng 
//vào các biến riêng lẻ một cách dễ dàng hơn.

//Khi sử dụng destructuring với mảng trong JavaScript, 
//bạn có thể viết mã ngắn gọn hơn bằng cách chỉ định các biến bằng 
//cách sử dụng cú pháp mảng trong dấu ngoặc vuông [].

// phá hủy cấu trúc mảng
//ghi đè giá trị

const restaurant = {
    name: "Nhà hàng ABC",
    location: ["Địa chỉ 123", "Thành phố XYZ"],
    menu: [
      { dish: "Mì xào", price: 8.99 },
      { dish: "Phở", price: 7.5 },
      { dish: "Cơm rang", price: 6.75 }
    ],
    openingHours: {
      weekdays: ["Thứ Hai - Thứ Sáu: 9AM - 10PM"],
      weekends: ["Thứ Bảy - Chủ Nhật: 10AM - 11PM"]
    },
    reviews: [
      { user: "Người 1", comment: "Rất ngon!", rating: 4.5 },
      { user: "Người 2", comment: "Dịch vụ tốt", rating: 5 }
    ],

    order: function(startedIndex, mainIndex) {
        return [this.menu[startedIndex], this.menu[mainIndex]];
      }
  };
  
const arr = [1, 2 ,3];
const a = arr[1];
const b = arr[2];
const c = arr[3];

const [x, y, z] = arr

console.log(x, y, z)

let [first, , second] = restaurant.menu;

console.log(first, second);

// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];

console.log(first, second);

// nhận 2 giá trị trả về 1 hàm
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


const nested = [1, [4, 6]]

const [i, [k , l]] = nested

console.log(i, k, l)

  