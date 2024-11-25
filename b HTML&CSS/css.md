## CSS
1. [CSS指的是什么？](层叠样式表，用于描述网页或应用程序外观和样式的标记语言)
CSS（Cascading Style Sheets）是用来控制网页的外观和布局的样式表语言。通过 CSS，开发者可以定义元素的颜色、字体、边距、对齐方式、响应式布局等，赋予网页美观的外观。CSS 决定了网页“怎么展示”。
2. [请谈谈你对CSS Hack的理解。](由于不同厂商的浏览器，比如IE,Safari,Firefox,Chrome等，或者同一浏览器的不同版本，对CSS的解析不完全一样，因此会导致生成的页面效果不一样。这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果)
3. [什么是CSS Sprite，它有何利弊？]()
(一种CSS图像合并技术，该方法是将小图标和背景图像合并到一张图片上，然后利用css的背景定位来显示需要的图片部分。
优点：
1）可以很好地减少网页的http请求，从而提高页面的性能。
2）减少图片的大小，从而减少所在内存空间
3）易于风格更换。只需改变少张图片样式或者颜色，就可以改变整个网页风格。
4）减少图片命名，只需对一张整体的图片命名即可。
缺点：
1）引入不必要的背景，并不是所有图片都是背景。有些传达重要信息的图片应该写入HTML页面中
2）开发麻烦，需要测量工具定位每个背景的坐标位置，较为繁琐。
3）维护复杂，如果要更改的图片与原图片大小差别较大，那么就需要调整其他背景图片的位置，增加繁琐度)
4. [为什么要初始化浏览器中的HTML元素默认的CSS样式？](不同浏览器对默认样式的解析存在差异，这可能导致网页在不同浏览器中显示不一致。初始化CSS样式是前端开发中的重要步骤，它可以消除不同浏览器之间的默认样式差异，确保网页在不同浏览器中具有一致的外观和布局。)
(CSS样式初始化优点：
1）统一浏览器显示效果
通过初始化CSS样式，可以消除不同浏览器之间的默认样式差异，确保网页在不同浏览器中具有一致的外观和布局。 
2）提高开发效率
初始化CSS样式后，开发者可以更专注于自定义样式的编写，而不需要花费大量时间去覆盖或调整浏览器的默认样式。 
3）简化样式代码
初始化CSS样式可以减少冗余的样式代码，使样式表更加简洁和易于维护。 
4）提升用户体验
一致的网页外观和布局可以提升用户体验，使用户在不同浏览器中都能获得良好的浏览体验。 )
5. [请谈谈你对Normalize.css的理解。](进行CSS样式初始化的库) 
8. [CSS中的@font-face有什么作用？] 
9. [如何用多种颜色设置方式把p元素中的文本设置为红色？]  
10. [CSS中的特殊性是指什么？] 层叠 继承 优先级
11. [!important有什么作用？] 
12. [在CSS中使用哪3个内容属性能够在元素前面自动插入递增的序号？] 
13. [CSS中的属性值如果设为百分数，那么是如何计算的？] 
14. [将ul元素的默认样式设成无，可以改变哪三个属性？] 
16. [什么是hasLayout，触发hasLayout后会带来什么样的后果？] 
17. [用过calc()函数吗？它是什么，有什么作用？] 
18. [在移动端，经常会做一屏的专题页面。如何设置元素的高度，使得页面的背景能铺满整个屏幕？] 
19. [什么是设备像素比？] 

## 盒模型
1. [什么是盒模型？] 盒模型（Box Model）是Web开发中的一种概念，用于描述HTML元素如何在页面上占据空间。它将每个HTML元素看作是一个矩形盒子，并且定义了这个盒子由哪些部分组成，如何计算元素的总大小。
盒模型包括以下四个区域：
内容区域（Content）  内边距（Padding）  边框（Border） 外边距（Margin）

在CSS中，可以使用box-sizing属性来定义元素的盒模型类型。默认情况下，box-sizing的值为content-box，即宽度和高度只包括内容区域。还有一个常用的值是border-box，它使得元素的宽度和高度包括了内容区域、内边距和边框的总和，更方便进行布局计算。

## 选择器
2. [关系选择器中，哪个是相邻选择器，能匹配相邻的兄弟元素？] 
2. [CSS中类选择器和ID选择器有哪些区别？] 

## 属性
1. [CSS3新增的属性有哪些？] 
3. [IE支持哪些CSS属性级前缀？](https://caniuse.com/)

## 伪元素
1. [伪元素设置哪个属性，能在文本下面添加一条红色的波浪线？] 
2. [请谈谈你对伪元素::before和::after中的content属性的理解。] 
3. [伪元素::before和:before有什么区别？] 

## 伪类
1. [伪类:first-child与:first-of-type有什么区别？] 
2. [链接有4种状态，包括未访问（:link）、已访问（:visited）、激活（:active）和悬停（:hover），声明的顺序是怎么样的？] 

## background
1. [CSS的哪个属性能够缩放背景图像？] 
2. [把CSS3新增的background-size属性设为哪一个值，能在保持原图像的宽高比的前提下，缩放到能放进背景区的尺寸。] 
3. [把CSS属性background-attachment设为哪一个值，能把背景图像附着到内容上，使得图像会随着内容一起滚动。](local)
4. [在CSS中使用background:transparent与opacity:0有什么区别？] 

## 定位
1. [请谈谈你对定位布局的理解。] 
2. [使用定位（position）属性的哪几个关键字可以让元素脱离正常流？] 
3. [绝对定位（absolute）和浮动（float）有哪些异同？]  
1. [z-index属性有什么作用？] 

## 元素浮动（float）
1. [请说说你对元素浮动（float）的理解。] 
2. [清除浮动的方法有哪些？] 
3. [元素浮动的缺陷有哪些？] 

## 布局
1. [在多列布局中，使用哪个属性可让元素跨列？] 
2. [哪个属性能让伸缩容器中的子元素主轴对齐？] 
3. [请用多种方法实现等高布局，让页面中每列的高度相等。] 
4. [如何实现一个圣杯布局？] 
5. [在移动端通常会用弹性布局，请简单介绍一下弹性布局。] 
6. [如果要设置伸缩容器中子元素的显示顺序，可以用哪个属性实现？]  

## 单位
1. [与角度相关的单位有哪些？] 
2. [请说明相对长度单位vm、vh、vmax和vmin的作用。] 

## transform
1. [transform属性包含哪些变形函数？](translate rotate skew scale) 

## transition
1. [过渡（transition）的子属性有哪些？]() 
2. [设置了元素的过渡后，不能立刻看到效果，需要有触发条件。请列举可用的触发条件。] 

## 动画
1. [如何让CSS3动画实现无数次循环？] 
2. [如果要用JavaScript中的setTimeout()函数来实现动画，那么执行函数的时间间隔设为几ms会比较合理？] 
3. [CSS中的过渡与动画有哪些区别？] 
4. [CSS3动画如何实现暂停？](animation-play-state: pause;)
5. [请为div元素设计一个水平位移60px的动画（animation），要求持续时间为2s、循环无限次、有连贯性；在动画执行到一半时，水平位移30px。] 

## border
1. [border:none和border:0有哪些区别？] 
2. [不使用CSS属性border，使用其它属性模拟边框。] 

## 字体
1. [CSS中的通用字体系列有哪些？] 
2. [字体风格（font-style）有两个关键字，分别是italic和oblique，它们有什么区别？] 

## 换行
1. [如何用CSS让文本强制换行？]  word-wrap
2. [使用CSS属性white-space的哪个关键字可以保留HTML文档中的空格、换行和Tab制表符？] 

## 媒体查询
1. [媒体查询中的媒体特性有哪些？] 
2. [在一条媒体查询中，可能包含的操作符有哪些？] 
3. [什么是响应式设计？]  
4. [如何用CSS3的媒体查询实现视口宽度大于360px而小于640px时，div元素的宽度变成30%？]    //@media screen and (min-width:960px) and (max-width:1200px)


## 预处理器
1. [什么是CSS预处理器？] 
2. [CSS预处理器有哪些优缺点？] 
3. [Sass和SCSS有哪些区别？] 

## BFC(块级格式化上下文)
1. [请谈谈你对BFC的理解？]
BFC(block formatting context)块级格式化上下文，他是页面中的一块渲染区域，并且有一套属于自己的渲染规则，BFC 是一个独立的布局环境，具有BFC特性的元素可以看作是隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素。
（https://blog.csdn.net/m0_61049675/article/details/136043408）
浮动元素、绝对定位(absolute\fixed)、display(table\flex\grid)、overflow不为visible的块元素

## 外边距塌陷
47. [什么是外边距塌陷？] 
48. [当出现外边距塌陷时，外边距之间的计算方式是怎样的？] 

## 渐进增强
1. [什么叫渐进增强？和优雅降级有哪些区别？] 
1) 渐进增强： 一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。 
2) 优雅降级： 一开始针对一个高版本的浏览器构建页面，先完善所有的功能。然后针对各个不同的浏览器进行测试，修复，保证低级浏览器也有基本功能。 
区别: 渐进增强是向上兼容，优雅降级是向下兼容。 

## 省略号
1. [如何用纯CSS的方式让超出容器宽度的文本自动替换为省略号？] 
2. [在移动端使用伸缩盒，怎样才能实现伸缩容器内只显示一行文本，溢出的内容用省略号替换？] 
3. [单行文本与多行文本溢出显示省略号如何实现？]
    /* white-space: nowrap; */
    overflow: hidden;
    /*
    clip：默认值，超出容器的部分将被裁剪。
    ellipsis：超出容器的部分将以省略号（...）显示。 */
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;     /* 设置盒子排列方向为垂直 */
    -webkit-line-clamp: 3;            /* 限制显示的行数，例如显示 3 行 */

## Web安全色
1. [什么叫Web安全色？] 

## 居中
1. [如何让一个浮动中的元素水平居中？]  
2. [用CSS中的定位实现元素的水平居中。] 
3. [用CSS中的表格盒类型（即把display属性设为表格相关的盒类型）实现元素的垂直居中。] 
4. [用伸缩盒实现子元素的水平和垂直居中。] 
5. [vertical-align属性的默认值是什么关键字？] 
用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效
vertical-align : baseline | top | middle | bottom

## 元素空隙
1. [默认情况下，当img元素（即图像）和span元素（即文本）混排时，图像下方会留出几像素的空隙，这是为什么？] 
img元素为行内元素 默认vertical-align : baseline  对齐
2. [将元素的display属性设为inline-block后，能把多个元素排列在一行中，但元素之间会间隙，如何才能去除间隙？] 
设置父元素的 font-size 为 0，然后再在需要保留间距的子元素上重新设置 font-size
## line-height
1. [请说下你对CSS中行高（line-height）的理解。] 
2. [在CSS中，可以将line-height设置为纯数字或百分数，这两种赋值方式有何异同？]
直接在某个元素上使用，下面三种没有区别，均是将行高设置为当前元素字体大小的1.5倍：
    line-height: 150%;
    line-height: 1.5em;
    line-height: 1.5;
2.三者的区别是在给父元素使用行高，子元素继承的方式有区别
父元素line-height带单位px；子元素直接继承；
父元素line-height带单位em；使元素以其父元素font-size值参考来计算自己的行高。
纯数字，把比例传递给后代。
百分比，将计算后的值传给后代。

## img
1. [背景图像可以用Data URI描述，那什么是Data URI？]  

## display
1. [display:none与visibility:hidden都可隐藏元素，有何区别？] 
2. [请罗列出你所知道的display属性的全部值，并简单说明一下它们的作用。] 
1、作用不同:
visibility:hidden将元素隐藏，但是在网页中该占的位置还是占着。
display:none将元素的显示设为无，即在网页中不占任何的位置。
2、使用后HTML元素有所不同:
visibility:hidden，使用该属性后，HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在，也即是说它仍具有高度、宽度等属性值。
display:none，使用该属性后，HTML元素（对象）的宽度、高度等各种属性值都将“丢失”。 

1. [在项目中有哪些样式隔离的方案？]

## 实现特定图形
1. [如何实现一个自适应的正方形？] 
```css 
    .wrapper{
        width: 20%;
        padding-top: 20%;
        background-color: rgb(226, 172, 172); 
        display: flex;
        /* flex-direction: column; */
        overflow: hidden;
        box-sizing: border-box;
    } 
```
2. [用纯CSS实现一个三角形。]
```css
.wrapper{
       width: 0;
       height: 0;
       border:100px solid #f00;
       /* border-top-color: transparent; */
       border-bottom-color: transparent;
       border-left-color: transparent;
       /* border-right-color: transparent; */
    } 
```
3. [如何用多种方式CSS把一个宽和高都为100px的正方形变成圆形？] 
4. [正方形]
```css
 .wrapper{
        width: 100px;
        background-color: rgb(226, 172, 172);
        border: 1px solid #ccc;
        display: flex;
        /* flex-direction: column; */
        overflow: hidden;
        box-sizing: border-box;
    }
    .wrapper::after{
        content: '';
        /* 当padding、margin取值为百分比时，百分比的值是以父元素的width为参考 */
        padding-top: 100%;
    }
    .wrapper .box{
        display: flex;
        flex-direction: column;
    }
    img{
        width: 70%;
        height: auto;
    }
```
```html 
 <div class="wrapper">
        <div class="box">
            <img src="1.gif" alt="" srcset="">
            <div class="content">我是中间内容</div>
        </div>
    </div>
```
## 思维导图
![CSS](https://github.com/pwstrick/daily/blob/master/assets/img/mind/CSS.png)