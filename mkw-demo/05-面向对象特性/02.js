// 接口
var Person = (function () {
    // 用接口作类型声明,参数必须要是接口类型
    function Person(config) {
        this.config = config;
    }
    return Person;
}());
var p1 = new Person({
    name: 'jack',
    age: 23
});
// implements 表明 Sheep 必须实现 Animal 中的方法
var Sheep = (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log('eat grass');
    };
    return Sheep;
}());
var Tiger = (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log('eat meat');
    };
    return Tiger;
}());
