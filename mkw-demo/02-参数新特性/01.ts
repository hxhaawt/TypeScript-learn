///<reference path="../../demo/04-类/01.ts"/>
/**
 * Created by hxh on 2017/9/19.
 */

const myname: string = 'richard';
// 在编辑器报错，但是编译出来的文件是没有错的，这只是提醒你，这个变量是string
myname = 13;

// 这默认str1 就是 string
const str1 = '12121';
str1 = 11;

let str2: any;
str2 = '23';

let man: boolean = true;

function test(name: string): void{
    console.log(name);
}


class Person {

    name: string;
    age: number;
    private x: any;
    private y: any;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let p1: Person = new Person(11, 23);
p1.name = 'jack';
p1.age = 24;
console.log(p1.name, p1.age, p1.x, p1.y);

// 带默认值的参数要放在最后
function test2(a:string, b:string, c:string = 'jack') {
    console.log(a, b, c);
}

test2('one', 'two', 'three');
test2('one', 'two');


// 可选参数 也要放在后面 不能放在必须参数前面
function test3(a: string, b?: string, c: string = 'jack') {
    console.log(a, c);

    // console.log(b.length);
    // 要判断，不然直接测试长度，可选参数不存在时会报错
    if (b) {
        console.log(b.length);
    }

}

test3('xxx');
test3('xxx', 'yyy');














