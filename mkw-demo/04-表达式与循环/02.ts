/**
 * Created by hxh on 2017/9/19.
 */

const arr = [11, 22, 33];
arr.desc = 'three number';

// forEach 循环中间是不能打断的 break不能用
arr.forEach( x => {
    // 这会报错
    // if (x > 20) break;
    console.log(x)
});

// x 是 key
for (let x in arr) {
    if (arr[x] > 20) break;
    console.log( x, arr[x] );
}
// x 是 值
for (let x of arr) {
    if (x > 20) break;
    console.log( x );
}


























