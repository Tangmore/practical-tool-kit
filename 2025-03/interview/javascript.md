1. [JavaScript的变量名在定义时需要遵守哪些规则？](https://github.com/pwstrick/daily/issues/246)
2. [不能被encodeURIComponent()函数编码的字符有哪些？](https://github.com/pwstrick/daily/issues/247)
3. [如何获得Select元素（选择框）中选中项的索引？](https://github.com/pwstrick/daily/issues/248)
change
e.target.selectedIndex 和 e.target.options.selectedIndex
4. [JavaScript的内置对象有哪些。](https://github.com/pwstrick/daily/issues/249)
Array Math String Date
5. [如何为一个\<p>元素添加CSS类primary？](https://github.com/pwstrick/daily/issues/250)
6. [与鼠标相关的事件有哪些？](https://github.com/pwstrick/daily/issues/251)
7. [如何通过jQuery的方式获得代码中单选框的选中值。](https://github.com/pwstrick/daily/issues/252)
8. [执行下面的代码，在控制台输出的x为__________，y为__________。](https://github.com/pwstrick/daily/issues/253)
```javascript
var x = 0, y = 0;
x
++
y
console.log(x, y);
```
9. [调用下面代码中的函数，最终返回的结果为__________。](https://github.com/pwstrick/daily/issues/254)
```javascript
function isArray() {
  return
  true;
}
isArray();
```
10. [执行下面的代码后，在控制台输出的y为__________。](https://github.com/pwstrick/daily/issues/255)
```javascript
var y,
  x = 1;
y = x+++x;
```
11. [2+true等于__________，'6'+9等于__________。](https://github.com/pwstrick/daily/issues/256)
12. [4+3+2+"1"等于__________，"1"+2+4等于__________。](https://github.com/pwstrick/daily/issues/257)
13. [(1, 5 - 1) * 2 等于__________。](https://github.com/pwstrick/daily/issues/258)
14. [执行下面的代码后，在控制台输出的y为__________。](https://github.com/pwstrick/daily/issues/259)
```javascript
var x = "1", y;
switch (x) {
  case 1:
    y = 1;
    break;
  case 2:
    y = 2;
    break;
  default:
    y = 0;
}
console.log(y);
```
15. [!function(){}的返回值是__________。](https://github.com/pwstrick/daily/issues/260)
16. [7 - "a"等于__________，7 / 0等于__________。](https://github.com/pwstrick/daily/issues/261)
17. [3..toFixed(2)得到的结果为__________。](https://github.com/pwstrick/daily/issues/262)
18. [parseFloat('12.3.4')返回的结果为__________。](https://github.com/pwstrick/daily/issues/263)
19. [Number(012)返回的结果为__________，Number("0xA")返回的结果为__________。](https://github.com/pwstrick/daily/issues/264)
20. [在下面的代码中，Number()函数的参数是一个对象，最终的结果为__________。](https://github.com/pwstrick/daily/issues/265)
```javascript
var numberObj = {
  valueOf: function() {
    return {};
  },
  toString: function() {
    return "10";
  }
};
Number(numberObj);
```
21. [~{}等于__________，~1.25等于__________。](https://github.com/pwstrick/daily/issues/266)
22. [以下代码最终在控制台输出的结果为__________。](https://github.com/pwstrick/daily/issues/267)
```javascript
var a = {},
  b = { name: "ping" },
  c = { name: "wen" };
a[b] = 10;
a[c] = 20;
console.log(a[b]);
```
23. [[] == ![]得到的结果为__________。](https://github.com/pwstrick/daily/issues/268)
24. [[] + {}得到的结果为__________，{} + []得到的结果为__________。](https://github.com/pwstrick/daily/issues/269)
25. [Array.prototype.isPrototypeOf([1, 2])的结果为__________。](https://github.com/pwstrick/daily/issues/270)
26. [下面代码最终的打印结果是__________。](https://github.com/pwstrick/daily/issues/271)
```javascript
var obj1 = {
  names: []
};
var obj2 = obj1.names;
obj2.push("strick");
console.log(obj1.names);
```
27. [在下面的代码中，调用了三次test()方法，得到的结果分别是__________、__________ 和__________。](https://github.com/pwstrick/daily/issues/272)
```javascript
var str = "pw1",
  pattern1 = /\d/,
  pattern2 = /\d/g;
pattern1.test(str);
pattern2.test(str);
pattern2.test(str);
```
28. [执行下面的代码后，arr1.length为__________。](https://github.com/pwstrick/daily/issues/273)
```javascript
var arr1 = "ping".split(""),
  arr2 = arr1.reverse(),
  arr3 = "pw".split("");
arr2.push(arr3);
```
29. [执行下面的代码后，arr数组的值为__________。](https://github.com/pwstrick/daily/issues/274)
```javascript
var arr = [4, 1, 5, 2, 3];
arr.sort(function(a, b) {
  return a > b;
});
```
30. [[1, 2, 3, 4, 5].splice(-2)的值为__________。](https://github.com/pwstrick/daily/issues/275)
31. [[1, 2, 3, 4, 5].slice(NaN, 1)的值为__________。](https://github.com/pwstrick/daily/issues/276)
32. [下面代码执行后，在控制台会输出b变量，得到的结果是__________。](https://github.com/pwstrick/daily/issues/277)
```javascript
(function() {
  var a = b = 5;
})();
console.log(b);
```
33. [1 instanceof Number的返回值是__________，2 in [1,2]的返回值是__________。](https://github.com/pwstrick/daily/issues/278)
34. [typeof undefined的返回值是__________，typeof null的返回值是__________。](https://github.com/pwstrick/daily/issues/279)
35. [将Object的toString()方法分别应用于null和undefined（如下所示），得到的结果为__________和__________。](https://github.com/pwstrick/daily/issues/280)
```javascript
var toString = Object.prototype.toString;
toString.call(null);
toString.call(undefined);
```
36. [执行下面的代码，结果的输出顺序是__________、__________、 __________。](https://github.com/pwstrick/daily/issues/281)
```javascript
console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);
```
37. [请简单描述一下你对JavaScript的理解。](https://github.com/pwstrick/daily/issues/4)
38. [JavaScript有哪些优势和劣势？](https://github.com/pwstrick/daily/issues/282)
39. [相等（==）和全等（===）运算符有哪些区别？](https://github.com/pwstrick/daily/issues/283)
40. [在JavaScript中，字面量是指什么？](https://github.com/pwstrick/daily/issues/284)
41. [分号会在什么时候自动补全？自动补全有什么弊端？](https://github.com/pwstrick/daily/issues/285)
42. [什么是严格模式？严格模式有哪些限制？](https://github.com/pwstrick/daily/issues/286)
43. [undefined和null的有哪些异同？](https://github.com/pwstrick/daily/issues/287)
44. [请说明JavaScript中的原生对象（native objects）和宿主对象（host objects）。](https://github.com/pwstrick/daily/issues/288)
45. [全局函数eval()有什么作用？](https://github.com/pwstrick/daily/issues/289)
46. [请简单描述一下你所理解的原型链。](https://github.com/pwstrick/daily/issues/290)
每个函数都有一个prototype属性，这个属性指向函数的原型对象。
每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。
每个原型都有一个constructor属性，指向该关联的构造函数。
47. [用new运算符创建对象时，例如new Fn()，具体的创建过程有哪几步？](https://github.com/pwstrick/daily/issues/291)
创建一个空对象
将所创建对象的__proto__属性值设为构造函数的prototype的属性值
执行构造函数中的代码，构造函数中的this指向该对象
返回对象
48. [JSON格式的数据与XML格式的数据相比，有哪些优势？](https://github.com/pwstrick/daily/issues/292)
JSON(JavaScript Object Notation)是一种轻量级的数据交换格式，相比于xml这种数据交换格式来说，因为解析xml比较的复杂，而且需要编写大段的代码，所以客户端和服务器的数据交换格式往往通过JSON来进行交换。
49. [函数声明和函数表达式有哪些区别？](https://github.com/pwstrick/daily/issues/293)
函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用。
50. [Function构造器有哪些功能？](https://github.com/pwstrick/daily/issues/294)
apply()、call()、bind()
51. [执行下面的代码，为何输出的都是3？](https://github.com/pwstrick/daily/issues/295)
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}
```
52. [请谈谈你对闭包的理解。](https://github.com/pwstrick/daily/issues/296)
1）closure可以调用（闭包存储的外部变量是引用而不是值，这点非常重要）在当前函数以外的定义的变量（即使外部函数已经返回）；
2）closure可以修改外部定义的变量值。
53. [什么是事件循环？](https://github.com/pwstrick/daily/issues/297)
JavaScript 的运行机制：
所有同步任务都在主线程上执行，形成一个 “执行栈”（execution context stack）；
主线程之外，存在一个 “任务队列”（task queue），在走主流程的时候，如果碰到异步任务，那么就在 “任务队列” 中放置这个异步任务；
一旦 “执行栈” 中所有同步任务执行完毕，系统就会读取 “任务队列”，看看里面存在哪些事件。那些对应的异步任务，结束等待状态，进入执行栈，开始执行；
主线程不断重复上面三个步骤；

同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入任务队列。主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event Loop (事件循环)。
54. [如果一个全局变量没有事先声明，那么在控制台能否输出它的值？](https://github.com/pwstrick/daily/issues/298)

55. [如何用脚本获取当前显示器的分辨率？](https://github.com/pwstrick/daily/issues/299)
56. [document.write()和innerHTML有哪些区别？](https://github.com/pwstrick/daily/issues/300)
57. [请介绍一下DocumentFragment类型的节点。](https://github.com/pwstrick/daily/issues/301)
58. [HTML元素的特性和属性是怎么定义的？](https://github.com/pwstrick/daily/issues/302)
59. [jQuery有哪些特色？](https://github.com/pwstrick/daily/issues/303)
60. [在jQuery中有哪些方法可以删除元素。](https://github.com/pwstrick/daily/issues/304)
61. [jQuery UI是什么？](https://github.com/pwstrick/daily/issues/305)
62. [请用JavaScript实现冒泡排序。](https://github.com/pwstrick/daily/issues/306)
63. [请实现一个遍历至100的循环，在能被3整除时输出“three”，在能被5整除时输出 “five”，在能同时被3和5整除时输出“all”。](https://github.com/pwstrick/daily/issues/307)
64. [封装一个isInteger()函数，用于检测传入的值是整数。](https://github.com/pwstrick/daily/issues/308)
65. [请重新封装一个isNaN2()函数，此函数弥补了全局函数isNaN()的不足。](https://github.com/pwstrick/daily/issues/309)
66. [编写一个函数，能让两个并不大的小数正确相乘。](https://github.com/pwstrick/daily/issues/310)
67. [统计字符串“xxxxyyydda”中每个字母出现的次数。](https://github.com/pwstrick/daily/issues/311)
<script>
	/*这个字符串中的每个字每出现了多少次*/
	var ary = "asasDFGHadDfFFhjkMNJGBHGDsdfghjfghjkdfghjkl";
	var obj = {};
	var i = 0;
	ary1 = ary.toLocaleLowerCase(); //将字符串转为小写
	for(i = 0; i < ary1.length; i++){
		key = ary1[i];
		if(obj[key]){
			//对象中有这个字母
			obj[key]++;
		}else{
			//对象中没有这个字母,把字母加到对象中
			obj[key] = 1;
		}
	}
	for(var key in obj){ //遍历这个对象
		console.log(key + "这个字母出现了" + obj[key] + "次");
	}
</script>
<script>
  var str='xxxxyyydda'
  var names=str.split('')
  let nameNum = names.reduce((pre,cur)=>{
    if(cur in pre){
      pre[cur]++
    }else{
      pre[cur] = 1 
    }
    return pre
  },{})
  console.log(nameNum); 
</script>
68. [执行a == 1 && a == 2 && a == 3，返回的结果是true，那么a的值是什么？](https://github.com/pwstrick/daily/issues/312)
69. [如何判断对象中的某个属性是继承而来的？](https://github.com/pwstrick/daily/issues/313)
70. [如何用JavaScript实现对象继承？](https://github.com/pwstrick/daily/issues/314)
71. [怎么实现深拷贝？](https://github.com/pwstrick/daily/issues/315)
1）Object.assign()
2）slice()
3）concat()
4）es6的扩展运算符"..."
5）JSON.stringify和JSON.parse
72. [在网页中实现一个倒计时，能够动态显示“××天××时××分××秒” 。](https://github.com/pwstrick/daily/issues/316)

73. [请用多种方式获取当前时间的毫秒数。](https://github.com/pwstrick/daily/issues/317)
74. [如何判断某一年是闰年？](https://github.com/pwstrick/daily/issues/318)
75. [如何计算两个日期相隔的天数？](https://github.com/pwstrick/daily/issues/319)
76. [请编写一个格式化字符串的函数，例如传入“我的名字叫{0}”和“strick”，返回“我的名字叫strick”。](https://github.com/pwstrick/daily/issues/320)
77. [用JavaScript封装一个函数，可实现整数的千分位逗号分隔符（不用考虑小数），例如12345用12,345表示。](https://github.com/pwstrick/daily/issues/321)
<script>
  function splitMoney(num) {
    var numb = Math.abs(num);
    var decimal = String(numb).split('.')[1] || '';//小数部分
    var tempArr = [];
    var revNumArr = String(numb).split('.')[0].split("").reverse();//倒序
    for (i in revNumArr){
      tempArr.push(revNumArr[i]);
      if((i+1)%3 === 0 && i != revNumArr.length-1){
        tempArr.push(',');
      }
    }
    var zs = tempArr.reverse().join('');//整数部分
    let res= decimal?zs+'.'+decimal:zs;
    if(num >= 0)  return res; 
    return '-' + res; 
} 
</script>
78. [编写一个函数，用于清除字符串前后的空格。](https://github.com/pwstrick/daily/issues/322)

79. [如何将字符串“get-element-by-id”转化成驼峰表示法的“getElementById”？](https://github.com/pwstrick/daily/issues/323)
<script>
	var str = 'get-element-by-id';
	var arr = str.split('-');
	for (var i = 1; i < arr.length; i++) {
    console.log(arr[i].charAt(0).toUpperCase())//E B I
    console.log(arr[i].slice(1))//lement y d
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}
	str = arr.join('');
	console.log(str)
</script>
<!-- 正则 -->
<script>
	var str = "get-element-by-id";
	var reg = /-(\w)/g;
	console.log(str.match(reg));//["-e", "-b", "-i"]
	console.log(str.replace(reg,function(p){
    console.log(p)
		return p[1].toUpperCase()//返回下标为1的字母的大写字母
	}));
</script>
80. [用数组方法把数组中的元素（假设元素值都是数字）加起来，得到的和赋给result变量。](https://github.com/pwstrick/daily/issues/324)
<script>
  var arr = [1, 2, 3, 4];
  var sum = arr.reduce(function(prev, cur, index, arr) {
      console.log(prev, cur, index);
      return prev + cur;
  },0)
  console.log(arr, sum);
</script>
<script>
  // reduce的用法 
  // 统计字符出现次数   
  // 去重 
  var arr = [1, 2, 2, 4];
  var map = arr.reduce(function(prev, cur, index, arr) {
       if(!prev.includes(cur)){
          prev.push(cur);
       }
       return prev;
  },[])
  console.log(arr, map);
</script>

81. [不用循环语句（for、while等）创建一个长度为50的数组，每个元素的值等于它的索引。](https://github.com/pwstrick/daily/issues/325)
<script>
  console.log(Object.keys(Array.from({ length: 100 })))
  console.log(Array.from(Array(100).keys()))
</script>
82. [设计一个函数能够补全整数的前置零，例如为3补全两个前置零，得到的结果为“003”。](https://github.com/pwstrick/daily/issues/326)
<script>
    function PrefixInteger(num,length) {
        let numStr = ( "000000" + num ).substr( -length ); 
        console.log(numStr);
        return numStr; 
    } 
    PrefixInteger(1,3)
</script>
83. [有一个数组，其值为[1,[2,[3,4,2],2],5,[6]]，如何才能输出[1,2,3,4,2,2,5,6]？](https://github.com/pwstrick/daily/issues/327)
<script>
  var arr=[1,[2,[3,4,2],2],5,[6]];
  arr=arr.reduce((prev,cur)=>{
    prev=prev.concat(cur)
    return prev
  },[])
  console.log(arr)
</script>
84. [请封装一个函数，用于判断某个数是否是质数。](https://github.com/pwstrick/daily/issues/328)
<script>
  function isPrime(number) {
   if (typeof number !== 'number' || number<2) {
      // 不是数字或者数字小于2
      return false;
   }
   if (number === 2) {//2是质数
      return true;
   } else if (number % 2 === 0) {//排除偶数
      return false;
   }
   var squareRoot = Math.sqrt(number);
　　//因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}
</script>
85. [请封装一个函数，可序列化URL中的查询字符串，也就是把字符串转换为一个包含所有参数的对象。](https://github.com/pwstrick/daily/issues/329)
<script>
  function GetRequest() {  
    var url = location.search.replace(/\s+/g, "");  
    var theRequest = {}; 
    if (url.indexOf("?") != -1) { 
       var str = url.substr(1); 
       strs = str.split("&");  
       for(var i = 0; i < strs.length; i ++) {
          theRequest[decodeURI(strs[i].split("=")[0])]=decodeURI(strs[i].split("=")[1]);
       }
    }
    return theRequest;  
 }
</script>
86. [设计一个函数，用于判断一个HTML元素是另一个HTML元素的后代。](https://github.com/pwstrick/daily/issues/330)

87. [创建一个\<dd>元素，设置该元素的内容为4，并插入到id属性为“third”的\<dd>元素之前。要求用DOM方法实现。](https://github.com/pwstrick/daily/issues/331)
88. [如何动态的添加外部脚本？](https://github.com/pwstrick/daily/issues/332)
<script>
  document.write("<script src='package.js'><\/script>");//异步加载 会重写页面
  
</script>
89. [用多种方式为一个<div>元素设置一个名为ui-border的CSS类。](https://github.com/pwstrick/daily/issues/333)
90. [请封装一个函数，模拟getBoundingClientRect()方法，但只要返回元素到视口顶部（top）和左边（left）的距离。](https://github.com/pwstrick/daily/issues/334)
91. [如何禁用HTML文档中的提交按钮？](https://github.com/pwstrick/daily/issues/335)
92. [用JavaScript为HTML元素设置两个CSS属性：字体大小和宽度，把字体大小设为18px，宽度设为100px，请用多种方式实现。](https://github.com/pwstrick/daily/issues/336)
93. [有一个div元素，其宽度设为了百分数，如何用JavaScript获得经过计算后的真正宽度？](https://github.com/pwstrick/daily/issues/337)

94. [如何用JavaScript隐藏一个按钮？](https://github.com/pwstrick/daily/issues/338)
setAttribute
95. [假设有一个按钮，如何在点击类型的事件处理程序中阻止事件传播。](https://github.com/pwstrick/daily/issues/339)
event.stopPropagation()
96. [请封装一个注册事件的函数，要求能够跨浏览器运行。](https://github.com/pwstrick/daily/issues/340)
<script>
  var EventUtil = {
        addHandler: function(element, type, handler){
        //浏览器是否支持DOM2
        if(elelment.addEventListener){
          element.addEventListener(type, handler, false);
        }else if(element.attachEvent){//浏览器是否支持IE
          element.attachEvent("on"+type, handler);
        }else{//如果以上都不支持，采用DOM0级事件处理程序
          element["on"+type] = handler;
        }
    },
    removeHandler : function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if(element.detachEvent){
            element.detachEvent("on"+type, handler);
        }else{
                element["on" + type] = null;
        }
    }
};
var btn  = document.getElementById("myBtn");
var handler= function（）{ //处理逻辑
 
};
EventUtil.addHandler(btn, "click", handler);//创建一个事件处理程序
EventUtil.removeHandler(btn, "click", handler);//删除一个事件处理程序
</script>
97. [什么是事件委托？请用一个例子来描述委托？](https://github.com/pwstrick/daily/issues/341)
原理是DOM元素的事件冒泡，把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。
<script>
      var item1 = document.getElementById("goSomewhere");
    var item2 = document.getElementById("doSomething");
    var item3 = document.getElementById("sayHi");
 
    document.addEventListener("click", function (event) {
      var target = event.target;
      switch (target.id) {
        case "doSomething":
          document.title = "事件委托";
          break;
        case "goSomewhere":
          location.href = "http://www.baidu.com";
          break;
        case "sayHi": alert("hi");
          break;
      }
    })
</script>
<script>
  // jQuery 
    $(document).ready(function () {
      $("#myLinks").delegate("#goSomewhere", "click", function () {
        location.href = "http://www.baidu.com";
      });
    }); 
</script>
98. [不使用第三方类库，用DOM方法读取复选框中选中的值。](https://github.com/pwstrick/daily/issues/342)
<script>
var checkbox= document.getElementsByName("number");
for(var i=0;i<checkbox.length;i++){
  if(checkbox[i].checked==true){
    alert(checkbox[i].value);
  }
}
</script>
<script>
  // jQuery
 $("input[name='number']:checked").each(function(){
    alert(this.value);
  });
</script>
99. [用多种方式移除选择框（Select元素）中的选项（Option元素）。](https://github.com/pwstrick/daily/issues/343)

100. [如何用<iframe>元素实现无刷新文件上传。](https://github.com/pwstrick/daily/issues/344)
101. [HTML5新增了FileReader对象，如何利用这个对象来读取上传按钮中选择的文件？](https://github.com/pwstrick/daily/issues/345)

<script>
  // <input type="file" multiple="multiple" class="fileups-input" style="display: none">
  $(".fileups-input").on('change', function () {
            var files = this.files;
            var reader = new FileReader();
            var fileLen = $(this).parent().find('li.new ').length;
            for(var i=0;i<files.length;i++){
                let ind=fileLen+i;
                fileState=1;
                reader = new FileReader();
                fileList.push(files[i]);
                $(this).before('<li class="new"><div style="width:150px !important;">'+ files[i].name +'</div><button onclick="deleteFiles(this)"  data-indmin="file'+ ind +'">删除</button></li>');
                reader.readAsDataURL(files[i]);
                reader.onload=function(e){
                }
            }
        });
</script>
<script>
  onchangeImgFun(e,type) {
      if(e.target.files[0]){ 
        let file = e.target.files[0];
        // 获取图片的大小，做大小限制有用
        let imgSize = file.size;
        console.log(imgSize);//size = (limit/(1024 * 1024)).toFixed(2) + "MB"
        let _this = this; // this指向问题，所以在外面先定义
        // base64方法 2
        let reader = new FileReader();
        reader.readAsDataURL(file); // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          let dataURL = reader.result;
          _this.imgStr = dataURL;
          // 下面逻辑处理
        };  
      }
  }
</script>
102. [不借助第三方类库，请实现一次简单的Ajax请求。](https://github.com/pwstrick/daily/issues/346)
<script>
  // var Ajax={ 
  //   get: function (url,fn){ 
  //         var xhr=new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
  //         xhr.open('GET',url,true); 
  //         xhr.onreadystatechange=function(){
  //                 if (xhr.readyState==4&&xhr.status==200||xhr.status==304){//readyState==4说明请求已完成
  //                     fn.call(this, xhr.responseText);  //从服务器获得数据
  //                   }          
  //             };         
  //         xhr.send(null);
  //     },     
  //     post: function (url,data,fn){
  //         var xhr = new XMLHttpRequest();
  //         xhr.open("POST", url, true);
  //         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //         xhr.onreadystatechange=function(){
  //               if (xhr.readyState==4&&(xhr.status==200||xhr.status==304)){//304未修改
  //                   fn.call(this, obj.responseText);             
  //                 }         
  //           };
  //           xhr.send(data);
  //         }
  // }

const $ = (function() {
    return {
        ajax: function({type,url,data,isAsync,success}) {
            if (!url) {
                console.error('请输入请求地址')
                return;
            } 
            //创建 - 非IE6
            if (window.XMLHttpRequest) {
                var xhr = new XMLHttpRequest();
            } else { //IE6及其以下版本浏览器
                var xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }  
            // 处理data对象
            var queryData = [];
            for (var key in data) {
                // 默认encodeURIComponent
                queryData.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
            queryData = queryData.join('&');

            //连接 和 发送
            if (!type || type == 'GET') {
              // get方式参数要跟在url上
              url = url + '?' + queryData;
              xhr.open("GET", url, isAsync || true);
              xhr.send(null);
            }else if(type=='POST'){
              xhr.open(type,url,isAsync || true);
              //HTTP请求头赋值
              xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhr.send(queryData);
            }

            //接收
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // 有传入success回调就执行
                    success && success(xhr.responseText);
                }
            }
        }
    }
})();

//类似jquery的使用方式
$.ajax({
    type: 'GET',
    url: 'http://192.168.2.252:8081/central/smartOffice/companyMusic/queryMusicByType',
    data: {
        type: 1
    },
    success: function(res) {
        console.log(res);
    }
})
$.ajax({
    type: 'POST',
    url: 'http://192.168.2.252:8081/central/login',
    data: {
        aldToken: 1
    },
    success: function(res) {
        console.log(res);
    }
})

</script>
103. [请解释JSONP的工作原理，并用代码描述其过程。](https://github.com/pwstrick/daily/issues/347)

104. [如何用jQuery来创建插件？](https://github.com/pwstrick/daily/issues/348)
105. [两次输出各是什么？](https://github.com/pwstrick/daily/issues/729)
```javascript
     for (var i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 1)
     }
     
     for (let i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 1)
     }
```

106. [下面代码的输出是什么？](https://github.com/pwstrick/daily/issues/737)
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

107. [当我们这样做时会发生什么？](https://github.com/pwstrick/daily/issues/738)
```javascript
function bark() {
  console.log("Woof!");
}
bark.animal = "dog";
```

108. [事件传播的三个阶段是什么？](https://github.com/pwstrick/daily/issues/739)
事件捕获，目标对象本身的事件程序，事件冒泡

109. [所有对象都有原型，这句描述是否正确？](https://github.com/pwstrick/daily/issues/740)
不能说所有。Object.create(null)创建的对象,指向的原型就是null,而不是Object.prototype对象。
110. [下面代码的输出是什么？](https://github.com/pwstrick/daily/issues/741)
```javascript
let number = 0;
console.log(number++); //0
console.log(number);//1
console.log(++number);//2
```

111. [下面代码的输出是什么？](https://github.com/pwstrick/daily/issues/743)
```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
checkAge({ age: 18 });
```

112. [下面代码的输出是什么？](https://github.com/pwstrick/daily/issues/745)
```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}
getAge();
```

113. [cool_secret可以访问多长时间？](https://github.com/pwstrick/daily/issues/746)
```javascript
sessionStorage.setItem("cool_secret", 123);
```

114. [JavaScript全局执行上下文为你创建了全局对象和this关键字，这句话是否正确？](https://github.com/pwstrick/daily/issues/749)

115. [单击按钮时event.target指向的是哪个元素？](https://github.com/pwstrick/daily/issues/753)
```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button id="btn">
      Click!
    </button>
  </div>
</div>

<script>
  btn.onclick=((event)=>{
      console.log(event.target) //触发事件的元素
      // event.currentTarget 是附加事件处理程序的元素
  })
</script>
```

116. [单击下面的html片段打印的内容是什么？](https://github.com/pwstrick/daily/issues/754)
```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

117. [下面这些值哪些是假值？](https://github.com/pwstrick/daily/issues/757)
```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

118. [前端的requestAnimationFrame了解吗？有使用过吗？请说一下使用场景。](https://github.com/pwstrick/daily/issues/768)
【1】requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
【2】在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量
【3】requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销
<div id="myDiv" style="background-color: blue;width: 0;height: 20px;line-height: 20px;">0%</div>
<button id="btn">run</button>
<script> 
var timer;
btn.onclick = function(){
    myDiv.style.width = '0';
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        if(parseInt(myDiv.style.width) < 500){
            myDiv.style.width = parseInt(myDiv.style.width) + 5 + 'px';
            myDiv.innerHTML =     parseInt(myDiv.style.width)/5 + '%';
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }    
    });
}
</script> 

119. [对前后端跨域可以说一下吗？有碰到过跨域问题吗？如何解决跨域的？](https://github.com/pwstrick/daily/issues/769)
1)JSONP跨域  只支持get请求、不支持post请求  jQuery
2)CORS跨域 后端修改请求头
header(‘Access-Control-Allow-Origin:*’);允许访问的网址
header(‘Access-Control-Allow-Method:POST,GET’);允许访问的方式
3)代理  proxy
120. [闭包为什么会造成内存泄漏？](https://github.com/pwstrick/daily/issues/784)
不再用到的内存，没有及时释放，就叫做内存泄漏。
121. [请讲一下JavaScript的垃圾回收机制。](https://github.com/pwstrick/daily/issues/785)
什么事垃圾？
一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。
程序的运行需要内存，只要程序提出要求，操作系统或者运行是就必须供给内存。
对于持续运行的服务进程，必须及时释放内存，否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。
解决内存的泄露，垃圾回收机制会定期（周期性）找出那些不再用到的内存（变量），然后释放其内存。
122. [求一个对象的层级数，用递归和循环分别实现。](https://github.com/pwstrick/daily/issues/799)

123. [实现下面这道题中的machine函数。](https://github.com/pwstrick/daily/issues/800)
```javascript
function machine() {
    
}
machine('ygy').execute() 
// start ygy
machine('ygy').do('eat').execute(); 
// start ygy
// ygy eat
machine('ygy').wait(5).do('eat').execute();
// start ygy
// wait 5s（这里等待了5s）
// ygy eat
machine('ygy').waitFirst(5).do('eat').execute();
// wait 5s
// start ygy
// ygy eat
```

124. [lodash和ramda的区别是什么？](https://github.com/pwstrick/daily/issues/809)

125. [字符串和new String出来的字符串有啥区别？](https://github.com/pwstrick/daily/issues/810)
通过String直接创建的字符串为基本数据类型，属于JavaScript中的直接量
通过 New String来实例化的是一个String对象
126. [JS如何判断网页中图片加载成功或者失败？](https://github.com/pwstrick/daily/issues/822)
1）onload事件
<script>
// 方法一：图片已经下载完
document.getElementById('img1').onload = function(e){
e.stopPropagation();
alert(1);
}
</script>

2）判断img对象（DOM）的complete属性
<script>
// 方法二：img的complate属性
var timer = setInterval(function(){
if (document.getElementById('img1').complete){
clearInterval(timer);
alert(1);
console.log(document.getElementById('img1').complete)
}
}, 10);
</script>

127. [递归和迭代的区别是什么，各有什么优缺点？](https://github.com/pwstrick/daily/issues/823)
递归 在一定条件下函数自己调用自己
迭代 循环调用一段程序
128. [实现一个类型判断函数，需要鉴别出基本类型、function、null、NaN、数组、对象？](https://github.com/pwstrick/daily/issues/825)
<script>
  var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  }; 
  function testType(){}
  type({}); // "object"
  type([]); // "array"
  type(5); // "number"
  type(null); // "null"
  type(); // "undefined"
  type(/abcd/); // "regex"
  type(new Date()); // "date"
  type(testType); // "function"
  type(NaN); //NaN
</script>
129. [什么是节流和抖动？](https://github.com/pwstrick/daily/issues/827)
<script>
  //防抖（debounce）
  // 定义： 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时；(类似于 王者荣耀回城效果~~）
  // 典型的案例 输入搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，就重新计时。
  // 实现原理： 函数防抖的基本思想是设置一个定时器，在指定时间间隔内运行代码时清楚上一次的定时器，并设置另一个定时器，知道函数请求停止并超过时间间隔才会执行。
  // 使用场景：
  // 1.搜索框搜索输入，最后一次输入完成后，再发送请求；
  // 2.手机号、邮箱的输入验证；
  // 3.window 触发 resize 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次；
  const debouncePromise = (fn, ms = 0) => {
    let timeoutId;
    const pending = [];
    return (...args) =>
      new Promise((res, rej) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const currentPending = [...pending];
          pending.length = 0;
          Promise.resolve(fn.apply(this, args)).then(
            data => {
              currentPending.forEach(({ resolve }) => resolve(data));
            },
            error => {
              currentPending.forEach(({ reject }) => reject(error));
            }
          );
        }, ms);
        pending.push({ resolve: res, reject: rej });
      });
  };
  const fn = arg => new Promise(resolve => {
    setTimeout(resolve, 1000, ['resolved', arg]);
  });
  const debounced = debouncePromise(fn, 200);
  debounced('foo').then(console.log);
  debounced('bar').then(console.log);

  //节流(throttle)
  // 定义： 规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效；
  // 典型的案例 鼠标不断点击触发，规定在n秒内多次点击只有一次生效。
  // 实现原理： 原理是用时间戳来判断是否已到回调该执行时间，记录上次执行的时间戳，然后每次触发 scroll 事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经到达 规定时间段，如果是，则执行，并更新上次执行的时间戳。
  // 使用场景：
  // 1.DOM 元素的拖拽功能实现（mousemove）；
  // 2.表单的多次点击提交；
  // 3.计算鼠标移动的距离（mousemove）；
  // 4.Canvas 模拟画板功能（mousemove）；
  // 5.射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）；
  // 6.滚动加载，加载更多的操作； 
  // 防抖
  function _debounce(fn, delay = 500) {
    var timer = null;
    return function () {
      var _this = this;
      var args = arguments;
      if (timer) clearTimeout(timer); 
      timer = setTimeout(function () {
        fn.apply(_this, args);
      }, delay);
    };
  } 
  // 节流
  function _throttle(fn,delay = 1000){
    var lastTime, timer, delay;
    return function(){
      var _this = this;
      var args = arguments;
      var nowTime = Date.now(); 
      if(lastTime && nowTime - lastTime < delay){
        if (timer) clearTimeout(timer); 
        timer = setTimeout(function(){
          lastTime = nowTime;
          fn.apply(_this,args);
        },delay)
      }else{
        lastTime = nowTime;
        fn.apply(_this,args);
      } 
    }
  }   
  export {
    _debounce,
    _throttle,
  } 
</script>
130. [深拷贝和浅拷贝有什么区别？](https://github.com/pwstrick/daily/issues/828)
1.对于字符串类型，浅复制是对值的复制。
2.对于对象来说，浅复制是对对象地址的复制，并没有开辟新的栈，也就是复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，则另一个对象的属性也会改变，而深复制则是开辟新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。
131. [如何实现对一个DOM元素的深拷贝，包括元素的绑定事件？](https://github.com/pwstrick/daily/issues/833)

132. [用代码模拟出apply()、call()和bind()三个函数。](https://github.com/pwstrick/daily/issues/854)
<script>
  //apply
  // 思路：将要改变this指向的方法挂到目标this上执行并返回
  Function.prototype.myapply = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('not funciton')
    }
    context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
    delete context.fn
    return result
  }

  //call
  // 思路：将要改变this指向的方法挂到目标this上执行并返回
  Function.prototype.mycall = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('not funciton')
    }
    context = context || window
    context.fn = this
    let arg = [...arguments].slice(1)
    let result = context.fn(...arg)
    delete context.fn
    return result
  }

  //bind
  // 思路：类似call，但返回的是函数
  Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    let _this = this
    let arg = [...arguments].slice(1)
    return function F() {
      // 处理函数使用new的情况
      if (this instanceof F) {
        return new _this(...arg, ...arguments)
      } else {
        return _this.apply(context, arg.concat(...arguments))
      }
    }
  }


</script>
133. [用代码模拟instanceof运算符。](https://github.com/pwstrick/daily/issues/855)
<script>
  // 思路：右边变量的原型存在于左边变量的原型链上
  function instanceOf(left, right) {
    let leftValue = left.__proto__
    let rightValue = right.prototype
    while (true) {
      if (leftValue === null) {
        return false
      }
      if (leftValue === rightValue) {
        return true
      }
      leftValue = leftValue.__proto__
    }
  }
</script>
134. [实现一个简单的路由。](https://github.com/pwstrick/daily/issues/856)
<script>
  // hash路由
  class Route{
    constructor(){
      // 路由存储对象
      this.routes = {}
      // 当前hash
      this.currentHash = ''
      // 绑定this，避免监听时this指向改变
      this.freshRoute = this.freshRoute.bind(this)
      // 监听
      window.addEventListener('load', this.freshRoute, false)
      window.addEventListener('hashchange', this.freshRoute, false)
    }
    // 存储
    storeRoute (path, cb) {
      this.routes[path] = cb || function () {}
    }
    // 更新
    freshRoute () {
      this.currentHash = location.hash.slice(1) || '/'
      this.routes[this.currentHash]()
    }
  }
</script>
135. [封装鼠标拖拽的功能。](https://github.com/pwstrick/daily/issues/857)

136. [如何让两个非常大的数字相加？](https://github.com/pwstrick/daily/issues/859)
自己写 满十进一
137. [宏任务和微任务是指什么？](https://github.com/pwstrick/daily/issues/939)
JavaScript异步任务的两种：
宏任务（Macrotask）：script（整体代码）、setTimeout、setInterval、XMLHttpRequest.prototype.onload、I/O、UI 渲染
微任务（Microtask）：Promise、MutationObserver

138. [实现预加载和懒加载。](https://github.com/pwstrick/daily/issues/945)
懒加载也叫延迟加载：js图片延迟加载，延迟加载图片或者符合某些条件是才加载某些图片；
预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。（base64小图片可以通过css保存）
 

139. [如何用Ajax实现大文件上传？](https://github.com/pwstrick/daily/issues/958)
分片上传
140. [ES6的模块和CommonJS模块的对比](https://github.com/pwstrick/daily/issues/964)
141. [模拟Object.create()方法。](https://github.com/pwstrick/daily/issues/967)
<script>
  // 思路：将传入的对象作为原型
  function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()
  }
</script>
142. [实现一个基本的 Event Bus？](https://github.com/pwstrick/daily/issues/977)
<script> 
  // 组件通信，一个触发与监听的过程
  class EventEmitter {
    constructor () {
      // 存储事件
      this.events = this.events || new Map()
    }
    // 监听事件
    addListener (type, fn) {
      if (!this.events.get(type)) {
        this.events.set(type, fn)
      }
    }
    // 触发事件
    emit (type) {
      let handle = this.events.get(type)
      handle.apply(this, [...arguments].slice(1))
    }
  }
  // 测试
  let emitter = new EventEmitter()
  // 监听事件
  emitter.addListener('ages', age => {
    console.log(age)
  })
  // 触发事件
  emitter.emit('ages', 18)  // 18

</script>

143. [实现JSON.parse()方法。](https://github.com/pwstrick/daily/issues/968)
1）eval
<script>
  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
  if (
      rx_one.test(
          json
              .replace(rx_two, "@")
              .replace(rx_three, "]")
              .replace(rx_four, "")
      )
  ) {
      var obj = eval("(" +json + ")");
  } 
// 2)递归
</script>
144. [setTimeout背后的原理是怎么样的？](https://github.com/pwstrick/daily/issues/969)
145. [如果实现前端截图？](https://github.com/pwstrick/daily/issues/970)

146. [setTimeOut 和 setInterval 底层有哪些区别？](https://github.com/pwstrick/daily/issues/971)
147. [在CORS跨域请求时，什么情况下会发两次请求？](https://github.com/pwstrick/daily/issues/972)
只要同时满足以下两大条件，就属于简单请求。
请求方法是以下三种方法之一：
HEAD GET POST
HTTP的头信息不超出以下几种字段：
Accept Accept-Language Content-Language Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
凡是不同时满足上面两个条件，就属于非简单请求。
当请求存在跨域资源共享(CORS)并且是非简单请求，就会触发CORS的预检请求(preflight);"预检"请求用的请求方法是OPTIONS。
148. [在CORS跨域请求时，需要携带cookie，得做哪些配置？](https://github.com/pwstrick/daily/issues/973)
前端  xhr.withCredentials = false;
149. [如何实现并发请求？](https://github.com/pwstrick/daily/issues/977)
<script>
  function multiRequest(urls = [], maxNum) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;

    return new Promise((resolve, reject) => {
      // 请求maxNum个
      while (count < maxNum) {
      next();
      }
      function next() {
        let current = count++;
        // 处理边界条件
        if (current >= len) {
          // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
          !result.includes(false) && resolve(result);
          return;
        }
        const url = urls[current];
        console.log(`开始 ${current}`, new Date().toLocaleString());
        fetch(url)
          .then((res) => {
          // 保存请求结果
          result[current] = res;
          console.log(`完成 ${current}`, new Date().toLocaleString());
          // 请求没有全部完成, 就递归
          if (current < len) {
            next();
          }
          })
          .catch((err) => {
          console.log(`结束 ${current}`, new Date().toLocaleString());
          result[current] = err;
          // 请求没有全部完成, 就递归
          if (current < len) {
            next();
          }
          });
      }
    });
}

</script>
150. [实现一个双向数据绑定？](https://github.com/pwstrick/daily/issues/977)
<script>
  let obj = {}
  let input = document.getElementById('input')
  let span = document.getElementById('span')
  // 数据劫持
  Object.defineProperty(obj, 'text', {
    configurable: true,
    enumerable: true,
    get() {
      console.log('获取数据了')
    },
    set(newVal) {
      console.log('数据更新了')
      input.value = newVal
      span.innerHTML = newVal
    }
  })
  // 输入监听
  input.addEventListener('keyup', function(e) {
    obj.text = e.target.value
  })
</script>
151. [判断是否文件为image格式？](https://github.com/pwstrick/daily/issues/977)
<script> 
  function isAssetTypeAnImage(path) {  
    var index= path.lastIndexOf("."); 
    var ext = path.substr(index+1); 
    return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
  }
</script>
154. [骨架屏？](https://github.com/pwstrick/daily/issues/977)

## 思维导图
![JavaScript](https://github.com/pwstrick/daily/blob/master/assets/img/mind/JavaScript.png)
