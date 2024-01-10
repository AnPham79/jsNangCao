const rest = new Map();
rest.set('name', 'nhà hàng Navy');
rest.set(1, 'nhà hàng Spain')
rest.set(2, 'nhà hàng italy')

rest
    .set('category',['pizza', 'pastas', 'phở', 'bún', 'cơm rang'])
    .set('open', 7)
    .set('close', 22)
    .set(true, 'chúng tôi đã mở cửa :D')
    .set(false, 'chúng tôi đã đóng cửa')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

