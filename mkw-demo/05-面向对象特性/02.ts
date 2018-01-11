
// 接口

interface IPerson {
    name: string;
    age : number;
}


class Person {
    // 用接口作类型声明,参数必须要是接口类型
    constructor(public config: IPerson) {

    }
}

let p1 = new Person({
    name: 'jack',
    age: 23
});


interface Animal {
    eat();
}

// implements 表明 Sheep 必须实现 Animal 中的方法
class Sheep implements Animal {

    eat() {
        console.log( 'eat grass');
    }
}

class Tiger implements Animal {

    eat() {
        console.log( 'eat meat');
    }
}


























