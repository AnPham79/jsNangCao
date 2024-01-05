// phá hủy cấu trúc object
// ghi đè giá trị

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

  const {nameR, menu, reviews} = restaurant

  console.log(nameR, menu, reviews)

  const {
    nameR: tennhahang,
    menu: menunhahang,
    reviews: trainghiemkhachhang
  } = restaurant;
  
  console.log(tennhahang, menunhahang, trainghiemkhachhang);


  // giá trị mặt định
  const { menuR = [], openingHours = [] } = restaurant

  console.log(menuR, openingHours);


  // giá trị ghi đè
  let a = 111;
  let b = 999;

  const obj = {a : 9, b: 10, c : 11};
  ({a , b} = obj)
  console.log(a, b)


  
