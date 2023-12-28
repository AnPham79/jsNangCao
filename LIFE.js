// ---------------------------- LIFE trong như thế nào ---------------------------------

// (function(message) {
//     console.log('Lời chào', message);
// })('hello thằng lồn')

// (() => {
//     console.log('LIFE trông như thế này');
// })

// ---------------------------- dùng dấu chấm phẩy (;) trước LIFE -----------------------
// phải có dấu ; ở chỗ gọi biến hoặc trước hàm
// không thôi nó sẽ hiểu biến bạn vừa gọi là hàm
// const name = 'Phạm An'; <--
//  --> ;(function() {
// })()

// ---------------------------- LIFE là hàm private --------------------
// let i = 0;

// ;(function myFunc() {
//     i++;

//     console.log(i);

//     if (i <= 10)
//         myFunc()
// })()

// khi nào sử dụng LIFE để tránh trùng lặp khi dự án đôi khi sẻ có nhiều tên sẽ trùng nhau vì chúng là GLOBAL còn LIFE là 
// private nên sẽ giảm thiểu sự trùng lặp

// ------------------------ cách dùng LIFE phổ biến nhất ----------------
// (function(message) {
//     console.log('Lời chào', message);
// })('hello thằng lồn')

// ----------------------- ví dụ ---------------------------------------

const app = (function () {
    // private
    var cars = [];
    return {
        get(index) {
            return cars[index];
        }, insert(car) {
            cars.push(car);
        }, remove(car) {
            cars.splice(index, 1);
        }, edit(car, index) {
            cars['index'] = car
        }
    }
})()

// ----------------------- ví dụ ---------------------------------
(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)
// Output: 81
