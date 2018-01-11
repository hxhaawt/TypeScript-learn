/**
 * Created by hxh on 2017/9/19.
 */
/**
 * Created by hxh on 2017/9/19.
 */

// 箭头表达式

let sum = (x, y) => x + y;
let sum2 = (x, y) => {
    // 这样写是没有返回值的
    x + y;
}

let sum3 = x => {
    console.log( x );
}

const arr3 = ['a', , , 'b'];
// 返回不是空的值
console.log( arr3.filter( x => true));

const arr4 = [1, 2, 3, 4, 5, 6];
console.log( arr4.filter( x => x%2 === 0));


function test5(name: string) {
    this.name = name;

    // 这样写 this.name 是没有定义的
    setTimeout( function () {
        console.log('name is :' + this.name);
    }, 100);

}

let val1 = new test5('jack');


function test6(name: string) {
    this.name = name;

    // 这样写 this.name 才有值
    // 因为 箭头函数内部的this是外部的this，不是内部的this
    setTimeout( () => {
        console.log('name is :' + this.name);
    }, 100);
}

let val2 = new test6('jack');








