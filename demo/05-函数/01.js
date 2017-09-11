/**
 * Created by hxh on 2017/9/11.
 */
// 函数
// js 原生写法
function sum(a, b) {
    return a + b;
}
var res = sum(1, 3);
// ts 写法
// 要写参数类型和返回值类型
// 函数定义类型
function sum2(x, y) {
    return x + y;
}
// 完整的函数类型
var sum3 = function (x, y) {
    return x + y;
};
// 函数类型有两部分组成：参数类型、返回值类型
// x 和 y  是参数的名字，number是参数的类型
// =>number 指定函数返回值的类型
// 函数无返回值时用，void
function test(a) {
    console.log(a);
}
// 可选 形参
// 函数有两个 形参a, b 其b 可选
// 可选形参要放在 必选形参后面
function test2(a, b) {
    console.log(a);
    if (b) {
        console.log(b);
    }
}
