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

  restaurant.numGuest = 0;

  const guest_2 = restaurant.numGuest || 10
  console.log(guest_2);

  const res1 = {
    name: 'capi',
    numGuest: 0
  }

  const res2 = {
    name: 'garz',
    owner: 'AnPahm'
  }

  // gán bằng 10 chỉ khi numguest bằng null hoặc undefine
  res1.numGuest = res1.numGuest ??= 10;
  res2.numGuest = res2.numGuest ??= 10;

  // nếu trusthy thì sẽ gán giá trị anonymous cho owner của res1 và rest2 còn falthy thì không
  res1.owner &&= '<ANONYMOUS>'
  res2.owner &&= '<ANONYMOUS>'

  console.log(res1);
  // Output: { name: 'capi', numGuest: 0, owner: '<ANONYMOUS>' }
  console.log(res2);
  // Output: { name: 'garz', owner: 'AnPahm' }

  // vì res1.numGuest = 0 (0 phải null hoặc undefined) nên giữ nguyên giá trị
  // còm res2.owner là trusthy nên sẽ đổi thành anonymous

