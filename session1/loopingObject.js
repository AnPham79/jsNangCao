const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'fri', 'sat'];

const openingHours = {
    [weekdays[2]]: {
      open: 22,
      close : 23
    },
    [weekdays[3]]: {
      open: 22,
      close : 23
    },
    [weekdays[4]]: {
      open: 22,
      close : 23
    }
    ,
    [weekdays[5]]: {
      open: 22,
      close : 23
    }
};

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
    openingHours,
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

  const properties = Object.keys(openingHours);
  console.log(properties);

  let strOpen = ` chúng tôi mở cửa vào ngày ${properties.length}: `
  for (const day of properties) {
    strOpen += `${day}, `
  }
  console.log(strOpen);

  const values = Object.values(properties)
  console.log(values);

  const entries = Object.entries(properties);
  
  for(const [key, { open, close }] of Object.entries(openingHours)) {
    console.log(`vào ${key}, 
    chúng tôi sẽ mở cửa vào lúc ${open} 
    và đóng cửa vào lúc ${close}`);
}

