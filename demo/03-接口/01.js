/**
 * Created by hxh on 2017/9/11.
 */
function createPerson(per) {
    console.log(per.name, per.age);
}
var perNew = { name: 'jack', age: 30 };
createPerson(perNew);
function createAnimal(ani) {
    var aniTemp = {
        color: 'blue',
        size: 100
    };
    if (ani.color) {
        aniTemp.color = ani.color;
    }
    if (ani.size) {
        aniTemp.size = ani.size;
    }
    return aniTemp;
}
createAnimal({
    color: 'red'
});
