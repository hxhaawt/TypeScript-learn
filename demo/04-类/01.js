/**
 * Created by hxh on 2017/9/11.
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
    // 构造函数
    function Person(nameNew) {
        this.name = nameNew;
    }
    // 方法
    Person.prototype.info = function () {
        return this.name;
    };
    return Person;
}());
// 实例化一个Person类的对象
var p1 = new Person('jack');
// 继承 封装 多态
// 子类继承父类
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
