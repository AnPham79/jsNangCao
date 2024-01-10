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

const questions = new Map([
    ['questions', 'Ngôn ngữ nào đang được sử dụng nhiều nhất trên thế giới?'],
    [1, 'C'],
    [2, 'PHP'],
    [3, 'Python'],
    [4, 'JavaScript'],
    ['correct', 4],
    [true, 'Chúc mừng bạn đã chọn đúng'],
    [false, 'Hãy thử lại nhé']
]);

console.log(questions);

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// quiz app
console.log(questions.get('questions'));
for(const [key, value] of questions) {
    if (typeof key === 'number'){
        console.log(`Câu trả lời ${key} : ${value}`);
    }
}

// Đầu tiên, bạn cần phải require module readline từ Node.js để sử dụng nó.
const readline = require('readline');

// tạo giao diện nhập
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //Sử dụng rl.question() để hiển thị một câu hỏi cho người dùng và chờ đợi họ nhập dữ liệu. 
  //Khi họ nhập xong và nhấn Enter, hàm callback được gọi với dữ liệu mà họ đã nhập.
rl.question('Nhập câu trả lời của bạn: ', (answer) => {
  // Chuyển câu trả lời từ chuỗi sang số nếu cần
  answer = Number(answer);
  // Hiển thị câu trả lời
  console.log(`Câu trả lời của bạn là: ${answer}`);

  // Kiểm tra câu trả lời
  const correctAnswer = questions.get('correct');
  const isCorrect = parseInt(correctAnswer) === answer;

  // Hiển thị kết quả
  console.log(isCorrect ? 'Chúc mừng bạn đã chọn đúng!' : 'Hãy thử lại nhé!');

  rl.close();
});
