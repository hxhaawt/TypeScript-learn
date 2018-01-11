/**
 * Created by hxh on 2017/9/19.
 */
var str = "jack is \n            very good";
var name1 = 'rouse';
var newName = "new name " + name1;
function getName() {
    return "jack";
}
var str2 = "<div>\n    <p>name is : " + name1 + "</p>\n    <p>newName is : " + newName + "</p>\n    <p>getname is : " + getName() + "</p>\n</div>";
console.log(str);
console.log(name1);
console.log(newName);
console.log(str2);
var myName = 'angular';
var age = 4;
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
// 字符串模板
(_a = ["my name is ", ", i am ", ""], _a.raw = ["my name is ", ", i am ", ""], test(_a, myName, age));
var _a;
// 输出
// Array(3)0: "my name is "1: ", i am "2: " age"
// angular
// 4
