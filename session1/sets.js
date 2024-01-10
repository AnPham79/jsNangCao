const orderSets = new Set(['pizza', 'pastas', 'phở', 'bún', 'cơm rang'])

console.log(new Set('phạm an'))

// tương đương với length
console.log(orderSets.size);
// kiểm tra tồn tại sản phẩm theo kiểu booleans
console.log(orderSets.has('pizza'))
console.log(orderSets.has('mì ý'))

// thêm phần tử
orderSets.add('trứng chiên')
orderSets.add('trứng cút')

// xóa phần tử
orderSets.delete('trứng cút')
console.log(orderSets);

// xóa tất cả
orderSets.clear('trứng cút')

// example

const staff = ['chef', 'managers', 'waiter', 'labor'];

for(const order of orderSets) {
    console.log(order);
}

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// và có thể áp dụng các phương thức trên vào này
console.log(new Set(['chef', 'managers', 'waiter', 'labor']).size);

const arr = [1, 2];

rest.set(arr, 'text');