/**
 * Created by hxh on 2017/9/19.
 */
var arr = [11, 22, 33];
arr.desc = 'three number';
// forEach 循环中间是不能打断的 break不能用
arr.forEach(function (x) {
    // 这会报错
    // if (x > 20) break;
    console.log(x);
});
// x 是 key
for (var x in arr) {
    if (arr[x] > 20)
        break;
    console.log(x, arr[x]);
}
// x 是 值
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var x = arr_1[_i];
    if (x > 20)
        break;
    console.log(x);
}
