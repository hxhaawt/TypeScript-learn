/**
 * Created by hxh on 2017/9/11.
 */

// 布尔类型
let isSelect :boolean = true;

// 数值
let max :number = 256;

// 字符串
let p1 :string = "jack";

// 数组
// 内容是数值
let arr :number[] = [1, 2, 3];
let arr2 :Array<number> = [1, 2, 3];
console.log(arr[0]);

// 内容是 字符串
let arrStr :string[] = ['a', 'b'];


// 元祖
// 同时可以保存数字和字符串，而且只可以保存两个值，顺序是数字、字符串
let per: [number, string];
// per = [1, 3, 'a']  per = ['b', 1] 这都是错误的
per = [1, "a"];  // 只可以保存两个值，顺序是数字、字符串


// 枚举 类型
enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
};
let season: Season = Season.Autumn;

enum Season2 {
    Spring = 3,
    Summer,
    Autumn,
    Winter
};
// 取 Spring 字符串
let season2: string = Season2[1];
console.log( season2 );  // Spring


// 任意值 any
let a :any = 4;
a = 'test';


// null 和 undefined
let b :undefined = undefined;
// 可以把 null 和 undefined 类型的数据赋值给其他类型
// max = b;









