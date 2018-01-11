/**
 * Created by hxh on 2017/9/19.
 */
/**
 * Created by hxh on 2017/9/19.
 */
// 箭头表达式
var sum = function (x, y) { return x + y; };
var sum2 = function (x, y) {
    // 这样写是没有返回值的
    x + y;
};
var sum3 = function (x) {
    console.log(x);
};
var arr3 = ['a', , , 'b'];
// 返回不是空的值
console.log(arr3.filter(function (x) { return true; }));
var arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4.filter(function (x) { return x % 2 === 0; }));
function test5(name) {
    this.name = name;
    // 这样写 this.name 是没有定义的
    setTimeout(function () {
        console.log('name is :' + this.name);
    }, 100);
}
var val1 = new test5('jack');
function test6(name) {
    var _this = this;
    this.name = name;
    // 这样写 this.name 才有值
    // 因为 箭头函数内部的this是外部的this，不是内部的this
    setTimeout(function () {
        console.log('name is :' + _this.name);
    }, 100);
}
var val2 = new test6('jack');
