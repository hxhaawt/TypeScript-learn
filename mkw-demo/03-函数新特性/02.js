/**
 * Created by hxh on 2017/9/19.
 */
// 析构表达式
function getStock() {
    return {
        code: 'google',
        price: 900
    };
}
// 名字要一样
var _a = getStock(), code = _a.code, price = _a.price;
//名字可以不一样，用别名
var _b = getStock(), codex = _b.code, pricex = _b.price;
console.log(code, price);
console.log(codex, pricex);
function getStock2() {
    return {
        code: 'IBM',
        price: {
            price1: 800,
            price2: 900
        }
    };
}
var _c = getStock2(), code2 = _c.code, price2 = _c.price.price2;
console.log(code2, price2);
// 数组析构表达式
var arr = [1, 2, 3, 4];
var n1 = arr[0], n2 = arr[1], n3 = arr[2];
var n11 = arr[0], n12 = arr[1];
var n111 = arr[2], n222 = arr[3];
var n1_4 = arr[0], other = arr.slice(1);
console.log(n1, n2, n3);
console.log(n11, n12);
console.log(n111, n222);
console.log(n1_4, other);
var arr1 = [11, 22, 33, 44];
function test(_a) {
    var n1 = _a[0], n2 = _a[1], other = _a.slice(2);
    console.log(n1, n2, other);
}
test(arr1);
