// closure là 1 hàm mà nó có thể ghi nhớ nơi nó đc tạo và truy cập được biến bên
// ngoài phạm vi của nó.

// viết code ngắn gọn hơn
// biểu diễn , ứng dụng tính private trong oop

// function createCounter() {
//     let counter = 0;

//     function increment() {
//         return ++counter;
//     }

//     return increment;
// }

// let Counter = createCounter();

// console.log(Counter());
// console.log(Counter());
// console.log(Counter());

// nó k lặp lại số 1 liên tục mà nó tăng lên 
// vì nó lấy giá trị mới nhất.

// ======================== ví dụ áp dụng local storage ========================

// function createStorage(key) {
//     const store = JSON.parse(localStorage.getItem(key)) ?? {};

//     const save = () => {
//         localStorage.setItem(key, JSON.stringify(store));
//     };

//     const storage = {
//         get(key) {
//             return store[key];
//         },
//         set(key, value) {
//             store[key] = value;
//             save();
//         },
//         delete(key) {
//             delete store[key];
//             save();
//         },
//     };

//     return storage;
// }

// const setProfile = createStorage('setProfile');

// console.log(setProfile.get('fullName'));

// setProfile.set('fullName', 'Phạm Ngọc Bảo An');
// setProfile.set('age', 19);
// setProfile.set('Address', 'Khánh Hòa');

// ================================== tóm tắt ==============================

function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car);
        }, show(car) {
            console.log(cars);
        }
    }
}

const app = createApp();

app.show();
app.add('BWM', 'Mercedes', 'Leopard');
app.show();