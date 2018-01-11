/**
 * Created by hxh on 2017/9/19.
 */
// Rest and Spread 操作符
// 参数任意个
function test() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
test(1, 2, 3);
test(1, 2, 3, 4);
// test(1, 2, 3, 4, 5, 8);
function test2(a, b, c) {
    console.log(a, b, c);
}
var args = [1, 2];
var arr2 = [1, 3, 4, 5];
var arr3 = [1, 3, 4];
test2.apply(void 0, args);
test2.apply(void 0, arr2);
test2.apply(void 0, arr3);
// generator 函数
// 控制函数的执行过程，手工暂停和恢复代码执行
// function 加 * 表示generator函数
function* test3() {
    console.log('start');
    yield;
    console.log('end');
}
// 这样直接写是会报错的
test3();
var fun1 = test3();
// 调用next()方法会停在 yield处
fun1.next();
fun1.next();
function* test4() {
    while (true) {
        yield Math.random() * 100;
    }
}
var fun2 = test4();
var limitPrice = 30;
var price = 100;
// 当价格小于 30 ，才停止调用函数
while (price > limitPrice) {
    price = fun2.next().value;
    console.log("generator return: " + price);
}
console.log("buy price: " + price);
