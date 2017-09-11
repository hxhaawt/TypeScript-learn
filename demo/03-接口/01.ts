/**
 * Created by hxh on 2017/9/11.
 */

// 接口
interface Person {
    name: string;
    age: number;
}
function createPerson (per: Person) {
    console.log(per.name, per.age );
}
let perNew = {name: 'jack', age: 30};
createPerson( perNew );

// 可选属性 属性名后面加 ？ 表示属性可选
interface Animal {
    color?: string;
    size? : number;
}
function createAnimal (ani: Animal):
{ color: string; size: number } {
    let aniTemp = {
        color: 'blue',
        size : 100
    };
    if (ani.color){
        aniTemp.color = ani.color;
    }
    if (ani.size){
        aniTemp.size = ani.size;
    }

    return aniTemp;
}

createAnimal({
    color: 'red'
});

































