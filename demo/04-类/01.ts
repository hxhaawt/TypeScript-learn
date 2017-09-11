/**
 * Created by hxh on 2017/9/11.
 */

// 类
class Person {
    // 类的成员
    // 属性
    name: string;

    // 构造函数
    constructor (nameNew: string) {
        this.name = nameNew;
    }

    // 方法
    info () {
        return this.name;
    }
}
// 实例化一个Person类的对象
let p1 = new Person('jack');

// 继承 封装 多态
// 子类继承父类
class Animal {
    // 可见度
    // 外部所有类似都可以访问
    public name : string;
    // 外部不能访问，只能自己访问
    private age : number;
    // 子类 可以在外部访问，其他类不行
    protected sex : string;
}
class Cat extends Animal {

}



















