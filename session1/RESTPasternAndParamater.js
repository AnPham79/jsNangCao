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

  restaurant.orderDelivery({
    starterIndex: 1,
    mainIndex: 2,
    time: '20:30',
    address: 'Cam Thành Nam, Cam Ranh, Khánh Hòa'
  });

  const arr = [1, 2, ...[3,4]];

  const [a , b, ...other] = [1, 2,3,45,65,21];

  console.log(a , b, other);

  const [pizza, , bread, ...otherFoot] = [...restaurant.mainMenu, ...restaurant.starterMenu];

  console.log(pizza, bread, otherFoot);


  // object
  const { thu, ...weekdays} = restaurant.openingHours

  console.log(weekdays);

  // function

const add = function(...numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  console.log(sum)
}

add(2, 3,4,5,6,7)
add(22,33,42,442,12)

restaurant.orderCakes('bột mì', 'bột nở', 'trứng', 'bơ', 'sửa')
