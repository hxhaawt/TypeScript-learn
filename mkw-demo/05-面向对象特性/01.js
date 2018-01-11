/**
 * Created by hxh on 2017/9/19.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Person = (function () {
    function Person() {
    }
    // 类内部的函数全部都是挂到 prototype 下的
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var p1 = new Person();
p1.name = 'jack';
// 这是错的，在外部不能访问
// p1.age = 10;
p1.getName();
// 同样的 简化写法
var Person2 = (function () {
    function Person2(
        // 在构造函数要明确指出类型 public/private/protected
        name) {
        this.name = name;
    }
    // 类内部的函数全部都是挂到 prototype 下的
    Person2.prototype.getName = function () {
        console.log(this.name);
    };
    Person2.prototype.eat = function () {
        console.log('eat banana');
    };
    return Person2;
}());
var p2 = new Person2();
p2.name = 'rose';
p2.getName();
var p3 = new Person2("richard");
p3.getName();
var p4 = new Person2("richard");
p4.name = 'rose';
p4.getName();
var Empoee = (function (_super) {
    __extends(Empoee, _super);
    function Empoee(name) {
        var _this = 
        // 调用父类的构造函数
        _super.call(this, name) || this;
        _this.name = name;
        console.log('----子类构造函数---');
        return _this;
    }
    // 外部不能用
    Empoee.prototype.doWork = function () {
        console.log('working...');
    };
    Empoee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    return Empoee;
}(Person2));
var p5 = new Empoee('angular');
p5.getName();
p5.work();
// 泛型
// 泛型 表示 workers 只能是Person2数据 的数组
var workers = [];
workers[0] = new Person2('jack');
workers[1] = new Person2('rose');
workers[2] = new Person2('richard');
