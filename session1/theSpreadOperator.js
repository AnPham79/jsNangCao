// Tất nhiên! Spread operator (...) trong JavaScript là một cú pháp mạnh mẽ 
// giúp bạn làm việc với các cấu trúc dữ liệu có thể "trải" (spread) ra 
// thành các phần tử riêng lẻ. Nó có thể được áp dụng cho các mảng (array),
// chuỗi (string) hoặc các iterable khác.

const restaurant = {
    nameR: "Nhà hàng ABC",
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

    order: function (starterIndex, mainIndex) {
      return [this.menu[starterIndex], this.menu[mainIndex]];
    },
  
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:30', address }) {
      console.log(`Vận chuyển ${this.menu[starterIndex].dish} và ${this.menu[mainIndex].dish} 
      đến địa chỉ ${address} vào thời gian ${time}`);
    }
  };

  restaurant.orderDelivery({
    starterIndex: 1,
    mainIndex: 2,
    time: '20:30',
    address: 'Cam Thành Nam, Cam Ranh, Khánh Hòa'
  });

  // cách thông thường

  const arr = [1, 2 ,9];

  const newArray = [ 22, 32 , 4 , arr[0], arr[1], arr[2] ];

  console.log(newArray);

  // sử dụng spread operator

  const arrUseSpread = [1, 5, 7 , ...arr];

  console.log(arrUseSpread);
  console.log(...arrUseSpread);

  const newMenu = [...restaurant.menu, "Bánh mì"];
  console.log(newMenu);

  // coppy array
  const mainMenuCoppy = [...restaurant.menu];
  console.log(mainMenuCoppy);

  // kết hợp 2 mảng
  const startedIndex = 0;
  const menu = [restaurant.menu[startedIndex], ...mainMenuCoppy];
  console.log(menu);

  const myName = "PhamNgocBaoAn";
  const letters = [...myName , ' ' , "S."];
  console.log(letters);
  console.log(...myName);
