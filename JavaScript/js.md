## Array
# sort 
默认转换toString()按照Unicode码比较
传参自定义函数后
```js
// 升序
arr.sort((a,b)=>a-b;)
// 降序
arr.sort((a,b)=>b-a;)

```
# map
返回新的数组
```js
 let arr=[1,3,4,5]
        let newArr = arr.map((item,index)=>{
            // console.log(item)
            console.log(index)
            return item*2
        })
        console.log(newArr)
        let objArr=[{name:'john',age:12},{name:'make',age:22}]
        let newArr2 = objArr.map((item)=>{
            return item.name
        })
        console.log(newArr2)
```
# reduce
* arr.reduce(callback,[initialValue]) 
callback:函数中包含四个参数
- previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
- currentValue （数组中当前被处理的元素）
- index （当前元素在数组中的索引)
- array （调用的数组）
 
initialValue （作为第一次调用 callback 的第一个参数。）

```js
var arr1 = [1, 3, 5, 7, 9];
arr1.reduce(function (x, y) {
    console.log(x)
    return x * 10 + y;
},0); // 13579

// 实现去重
let arr2=[3,2,2,3];
let newArr3=arr2.reduce((prev,cur)=>{
    if(!prev.includes(cur)) prev.push(cur);
    return prev;
},[])
console.log(newArr3)
```
# filter


## iterable
Array Set Map 均为iterable类型
可用for...of...遍历
## Map & Set
```js
// 一组键值对的结构
let map = new Map()
map.set('mak',12)
map.set('mak',123)

console.log(map.get('mak')) //键值唯一 值被覆盖
console.log(map)
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(m.get('Bob'))
// 一组key不重复的集合 
let set =new Set([1,3,4,5,3])
console.log(set)
```

# 执行环境 
执行环境中主要定义着当前变量或函数有权访问的其他变量和函数，并且决定着它们各自的行为；
## 作用域
作用域决定了代码区块中变量和其他资源的可见性
1. 全局作用域 
js默认有一个全局对象window，而具有全局作用域的变量或函数相当于绑定在全局对象上的属性
2. 函数作用域
2. 块级作用域
let const 

# 作用域链
我们在查找b变量的时候，先在函数作用域中查找，没有找到，再去全局作用域中查找，有一个往外层查找的过程。我们好像是顺着一条链条从下往上查找变量，这条链条，我们就称之为作用域链
# 变量提升
var function
# var let const

# this
如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象
this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）
1. apply 
第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
2. call 方法与apply一致，参数传入方式不同，参数按顺序传入
3. bind

# 闭包
当一个函数返回了一个函数后，其内部的局部变量还被新函数引用
# 箭头函数
this总是指向词法作用域
* 词法作用域
变量的作用域是在定义时决定而不是执行时决定，也就是说词法作用域取决于源码，通过静态分析就能确定，因此词法作用域也叫做静态作用域。
## 原型 原型链
只要创建了一个新函数，就会根据一定的规则为该函数创建一个prototype属性，该属性指向函数的原型对象。
默认情况下，函数的原型对象会被自动分配一个constructor属性，该属性含有一个指向prototype属性所在的函数的指针
即 [Person.prototype.constructor==Person]
当该函数被实例化后，prototype中的属性会被完全继承，此时 [person1.constructor==Person]

```js


function Foo(){
    this.name = 'blackstar'
}
var foo = new Foo()
console.log(foo.__proto__)
console.log(Foo.prototype)
console.log(foo.__proto__===Foo.prototype)
Foo.prototype.constructor==Foo
foo.constructor=Foo
```
# 检测数组
```js
let arrType=[2,1,1]
console.log(Array.isArray(arrType))
console.log(arrType instanceof Array)
console.log(arrType.constructor==Array) 
console.log(Object.prototype.toString.call(arrType)=='[object Array]')
```
## Date
```js
let date=new Date();
let now=Date.now()

// 当前时间格式化
let yy = new Date().getFullYear();
let mm = new Date().getMonth() + 1;
let dd = new Date().getDate();

let week = new Date().getDay();

let hh = new Date().getHours();
let mf = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();

let weekArr = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
let nowWeek=weekArr[week]; 
_this.nowDate = yy + "-" + mm + "-" + dd;
_this.nowTime = hh + ":" + mf;

```

## Function
# 函数定义
1. 函数声明（存在函数声明提升）
2. 函数表达式

# 函数属性
length:所需参数个数
prototype：定义着所有实例的公共方法和属性

## String
# slice substring subStr
# indexOf lastIndexOf
# 模式匹配
replace search 
# concat
# split 

## Global对象
# URL编码 encodeURL decodeURL

## Math
```js
// 数组最大值
let max = Math.max.apply(Math,arrType) 
console.log(max)

// Math.random取值[min,max]
Math.floor(Math.random(max-min+1)+min)
```




