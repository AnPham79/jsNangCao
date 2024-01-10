const restaurant = {
    nameR: "Nhà hàng ABC",
    location: ["Địa chỉ 123", "Thành phố XYZ"],
    menu: [
      { dish: "Mì xào", price: 8.99 },
      { dish: "Phở", price: 7.5 },
      { dish: "Cơm rang", price: 6.75 }
    ],
    mainMenu: [
        { dish: "gà quay - Main", price: 10.99 },
        { dish: "kem sôi - Main", price: 9.5 }
    ],
    starterMenu: [
        { dish: "rau muống - Starter", price: 5.99 },
        { dish: "sườn nướng - Starter", price: 4.5 }
    ],
    openingHours: {
      thu: {
        open: 22,
        close : 23
      },
      fri: {
        open: 22,
        close : 23
      },
      sat: {
        open: 22,
        close : 23
      }
    },
    reviews: [
      { user: "Người 1", comment: "Rất ngon!", rating: 4.5 },
      { user: "Người 2", comment: "Dịch vụ tốt", rating: 5 }
    ],

    order: function (starterIndex, mainIndex) {
      return [this.menu[starterIndex], this.menu[mainIndex]];
    },
  
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:30', address }) {
      console.log(`Vận chuyển ${this.menu[starterIndex].dish} và ${this.menu[mainIndex].dish} 
      đến địa chỉ ${address} vào thời gian ${time}`);
    },

    orderPizza: function (ing1, ing2, ing3) {
      console.log(`Nguyên liệu làm Pizza:`);
      console.log(`Đây là danh sách nguyên liệu làm Pizza 
      ${ing1}, ${ing2} và ${ing3}`);
    },

    orderCakes: function (mainIncredient, ...lmaoIncredient) {
      console.log(`Nguyên liệu làm bánh kem:`, mainIncredient);
      console.log(lmaoIncredient);
    }
    
  };

//   Trong JavaScript, "short-circuiting" là một hiện tượng xảy ra khi việc đánh giá biểu thức logic 
//   dừng lại ngay khi kết quả cuối cùng có thể được xác định từ một phần của biểu thức mà không cần 
//   phải đánh giá toàn bộ biểu thức.

  // sử dụng vài kiểu dữ liệu, trả về vài kiểu dữ liệu
  // đó là short-circuiting
  console.log('---- OR ----');
  // or sẽ trả về giá trị truthy nếu k có thì trả về giá trị cuối cùng trong mảng.

  // 3 là một giá trị "truthy", do đó kết quả là 3.
  console.log(3 || 'Phạm An');
  // là một giá trị "falsy", nên kết quả là 'phạm An'
  console.log('' || 'phạm An');
  // true là một giá trị "truthy", kết quả là true
  console.log(true || 0);
  //  Cả hai đều là giá trị "falsy", nên kết quả là null
  console.log(undefined || null);

  // undefined không phải kiểu dữ liệu, '' là dữ liệu giả, 0 cũng vậy nên hello sẽ hợp lệ và in ra
  // Trả về 'hello', vì 'hello' là giá trị đầu tiên "truthy" trong danh sách.
  console.log(undefined || '' || 0 || 'hello' || true || 243);

  restaurant.numGuest = 0;

  const guest_1 = restaurant.numGuest ? restaurant.numGuest : 12
  console.log(guest_1);

  const guest_2 = restaurant.numGuest || 10
  console.log(guest_2);

  console.log('---- AND ----');
  // and thì trả về giá trị falthy nếu k có cái nào falthy thì sẽ trả về giá trị cuối cùng
  
  console.log(3 && 'Phạm An');
  console.log('' && 'phạm An');
  console.log(true && 0);
  console.log(undefined && null);

  console.log(undefined && '' && 0 && 'hello' && true && 243);

  if(restaurant.orderPizza) {
    restaurant.orderPizza('bánh pow', 'bún real');
  }

  restaurant.orderPizza && restaurant.orderPizza('râu cải', 'chuối') 