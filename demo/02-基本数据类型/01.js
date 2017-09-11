/**
 * Created by hxh on 2017/9/11.
 */
// 布尔类型
var isSelect = true;
// 数值
var max = 256;
// 字符串
var p1 = "jack";
// 数组
// 内容是数值
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr[0]);
// 内容是 字符串
var arrStr = ['a', 'b'];
// 元祖
// 同时可以保存数字和字符串，而且只可以保存两个值，顺序是数字、字符串
var per;
// per = [1, 3, 'a']  per = ['b', 1] 这都是错误的
per = [1, "a"]; // 只可以保存两个值，顺序是数字、字符串
// 枚举 类型
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
var season = Season.Autumn;
var Season2;
(function (Season2) {
    Season2[Season2["Spring"] = 3] = "Spring";
    Season2[Season2["Summer"] = 4] = "Summer";
    Season2[Season2["Autumn"] = 5] = "Autumn";
    Season2[Season2["Winter"] = 6] = "Winter";
})(Season2 || (Season2 = {}));
;
// 取 Spring 字符串
var season2 = Season2[1];
console.log(season2); // Spring
// 任意值 any
var a = 4;
a = 'test';
// null 和 undefined
var b = undefined;
// 可以把 null 和 undefined 类型的数据赋值给其他类型
// max = b;
