/**
 * Created by hxh on 2017/9/19.
 */

// 类

class Person {

    // 默认为 public
    name: string;
    // private 外部不能访问
    private age: number;
    // 子类可以访问，外部不能访问
    protected job: any;

    constructor() {

    }

    // 类内部的函数全部都是挂到 prototype 下的
    getName () {
        console.log( this.name );
    }
}

let p1 = new Person();
p1.name = 'jack';
// 这是错的，在外部不能访问
// p1.age = 10;
p1.getName();

// 同样的 简化写法
class Person2 {

    constructor(
        // 在构造函数要明确指出类型 public/private/protected
        public name: string,
    ) {

    }

    // 类内部的函数全部都是挂到 prototype 下的
    getName () {
        console.log( this.name );
    }

    eat() {
        console.log( 'eat banana' );
    }
}

let p2 = new Person2();
p2.name = 'rose';
p2.getName();

let p3 = new Person2("richard");
p3.getName();

let p4 = new Person2("richard");
p4.name = 'rose';
p4.getName();


class Empoee extends Person2 {

    constructor(public name: string) {
        // 调用父类的构造函数
        super(name);

        console.log('----子类构造函数---');
    }

    code: string;

    // 外部不能用
    private doWork() {
        console.log('working...');
    }
    work() {
        super.eat();
        this.doWork();
    }
}

let p5 = new Empoee('angular');
p5.getName();
p5.work();



// 泛型

// 泛型 表示 workers 只能是Person2数据 的数组
let workers: Array<Person2> = [];
workers[0] = new Person2('jack');
workers[1] = new Person2('rose');
workers[2] = new Person2('richard');








