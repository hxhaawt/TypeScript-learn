/**
 * Created by hxh on 2017/9/19.
 */

// 析构表达式


function getStock() {
    return {
        code: 'google',
        price: 900
    };
}

// 名字要一样
const {code, price} = getStock();
//名字可以不一样，用别名
const {code: codex, price: pricex} = getStock();

console.log( code, price);
console.log( codex, pricex);

function getStock2() {
    return {
        code: 'IBM',
        price: {
            price1: 800,
            price2: 900
        }
    };
}
const {code: code2, price: {price2: price2}} = getStock2();
console.log( code2, price2);

// 数组析构表达式
const arr = [1, 2, 3, 4];
const [n1, n2, n3] = arr;
const [n11, n12] = arr;
const [, , n111, n222] = arr;
const [n1_4, ...other] = arr;


console.log( n1, n2, n3);
console.log( n11, n12);
console.log( n111, n222);
console.log( n1_4, other);


const arr1 = [11, 22, 33, 44];
function test([n1, n2, ...other]) {
    console.log(n1, n2, other);
}

test(arr1);
















