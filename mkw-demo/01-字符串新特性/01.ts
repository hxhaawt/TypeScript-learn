/**
 * Created by hxh on 2017/9/19.
 */

const str = `jack is 
            very good`;


const name1: string = 'rouse';

const newName: string = `new name ${name1}`;

function getName(): string {
    return "jack";
}

const str2 = `<div>
    <p>name is : ${name1}</p>
    <p>newName is : ${newName}</p>
    <p>getname is : ${getName()}</p>
</div>`;


console.log(str);
console.log(name1);
console.log(newName);
console.log(str2);


const myName = 'angular';
const age = 4;
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}

// 字符串模板
test`my name is ${myName}, i am ${age}`;

// 输出
// Array(3)0: "my name is "1: ", i am "2: " age"
// angular
// 4















