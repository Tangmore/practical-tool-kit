## 关于 css 单位？

1. 字体单位 相对:rem em vh vw 绝对：px （rem 是相对于根元素 html 的 font-size 计算，em 相对于元素的 font-size 计算）
2. 时间单位 s ms
3. 角度单位 deg

## CSS（层叠样式表）布局基础

语义化标记
良好标记

1. DOCTYPE 声明文档类型，让浏览器或者其他用户代理知道使用的语言类型
2. 指定语言和字符集
3. 指定标题 利于搜索引擎优化

## 盒子模型

- https://blog.csdn.net/weixin_42752574/article/details/114477353
- 盒子类型由 display 决定 inline block

每个元素都会在页面上生成一个盒子
margin 外边距 盒子与相邻元素的距离
border 边框粗细、颜色、样式
padding 内边距 盒子边框与内容的距离
content

1. [W3C 标准盒模型]：宽只包括 content
   设置：box-sizing:content-box;

2. [IE 盒模型]：宽包括 content padding border  
   设置：box-sizing:border-box;

3. 获取盒子宽高
   dom.offsetWidth/offsetHeight 包含 width/height padding border

4. 盒子常见定位方案
   普通文档流
   浮动流
   绝对定位流

5. 盒子内部渲染排列方式

- BFC(Block Formatting Context)：块级格式化上下文： 一个独立的渲染区域，它规定了内部块级别 box 的渲染方式，并且与区域外部无关
  BFC 的特性
  内部的 Box 会在垂直方向上一个接一个的放置;
  垂直方向上的距离由 margin 决定;
  BFC 的区域不会与 float 的元素区域重叠;
  计算 BFC 的高度时，浮动元素也参与计算;
  BFC 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素;

  如何创建 BFC？
  float 的值不是 none;(让父盒子浮动起来)
  position 的值不是 static 或者 relative
  display:inline-block
  overflow:hidden;

  应用？
  自适应两栏布局
  高度坍塌(清除内部浮动)
  垂直 margin 重叠

- IFC
- GFC
- FFC

## 层叠上下文

HTML 中的根元素<html></html>本身就具有层叠上下文，称为“根层叠上下文”。
普通元素设置 position 属性为非 static 值并设置 z-index 属性为具体数值，产生层叠上下文。

- 层叠等级
- z-index

## 问题？

1. display：none
   隐藏元素，元素原先占据的空间移除，绑定事件无法触发
2. visibility：hidden
   隐藏元素，但仍然占据空间，绑定事件无法触发
3. opacity:0
   改变元素透明度

## overflow 相关属性

```css
span {
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space 对空格进行处理 pre(保留空格换行等) normal  nowrap 第*/
  white-space: nowrap;
  /* word-wrap  文字超过div的宽度是否自动换行*/
  /* word-break  文字超过div的宽度怎样换行*/
}
```

## 媒体查询

```css
@media screen and (max-width:960px) {<=960}
@media screen (min-width:600px) and (max-width:960px) {600<=x<=900}

```

```html
<!-- 外联样式使用link标签来引用样式： -->
<link rel="stylesheet" href="xx1.css" media="screen and (max-width:960px)" />

<meta
  name="viewport"
  content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
/>
```

## 边框和阴影

```css
.container {
  /* margin: 30px; */
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  background: rgb(210, 206, 241);
  /* x,y轴偏移量  模糊值  阴影扩张半径*/
  /* box-shadow: 10px 10px 50px 10px #f00,
                    0 0 0 20px rgb(104, 76, 230); */
  /* 添加边框和  与border偏移量 */
  outline: 10px dashed #999;
  outline-offset: 10px;
  /*border-image:url() 10px 10px 10px 10px;  
        上边距 右边距 下边距 左边距
        */
}
span {
  font-size: 30px;
  font-weight: bold;
  color: transparent;
  /*x，y轴阴影偏移  模糊半径 */
  text-shadow: 0 0 6px #ccc, -1px -1px #fb3;
}
```

## 背景 background

```css
.bg {
  padding: 30px;
  width: 400px;
  height: 400px;
  border: 1px solid #999;
  box-sizing: border-box;
  /* background: background-color || background-image || background-repeat || background-position || background-attachment  */
  /* 背景颜色 背景图片 背景是否重复  背景位置  背景图片随对象滚动而滚动还是固定*/
  /* background: url(1.gif) no-repeat right bottom fixed; */
  background: rgb(240, 200, 200) url(1.gif) no-repeat right bottom scroll;
  /* 图片放置区域限制 padding border content */
  /* background-origin: padding-box; */
  /* background-clip 背景显示范围 border-box padding-box content-box text */
  /* background-clip: text;
    -webkit-background-clip: text;
    color: transparent; */
  /* cover:缩放背景图片以完全覆盖背景区，可能背景图片部分看不见
    contain:缩放背景图片以完全装入背景区，可能背景区部分空白
    background-size: 100% 100%
      */
  /* background-size: contain; */
  /* 设置图片位置 css3支持4个值 前两个是x轴 后两值是y轴 */
  /* background-position 图片位置 支持calc */
  /* background-position: left 10px top 20px; */
  background-position: calc(100% - 10px) calc(100% - 10px);
}
```

## 图片自适应容器

```css
img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
```

## 渐变

```css
/* 线性渐变 */
.lg {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  /* background:linear-gradient(#fb3,#58a); */
  /* background:linear-gradient(to left,#fb3,#58a); */
  /* background:linear-gradient(45deg,#fb3,#58a); */
  /* background:linear-gradient(45deg,#fb3 0%,#fb3 33.3%,#58a 33.3%,#58a 66.6%,#0f0 66.6%,#0f0 100%); */
  /* background: linear-gradient(#fb3,#58a 180px,#0f0); */
  /* background: linear-gradient(#fb3,#58a 80%,#0f0); */
  background: repeating-linear-gradient(#fb3 10px, #58a 20px, #0f0 30px);
}
```

## 滤镜

```css
.filter {
  width: 100%;
  object-fit: cover;
  /* 灰度   值为0-1之间的小数  */
  /* -webkit-filter:grayscale(1) ; */
  /* 褐色 怀旧 */
  /* -webkit-filter:sepia(1) ; */
  /* 亮度 */
  /* -webkit-filter:brightness(0.6) ; */
  /* 毛玻璃 */
  /* -webkit-filter:blur(1px) ; */
  /* 阴影 比shadow更均匀 有迷糊值*/
  /* -webkit-filter:drop-shadow(10px 10px 10px #000); */
  box-shadow: 10px 10px 10px #000;
}
```

## 底部黏贴

```css
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: padding-box;
}
header,
footer {
  background: wheat;
}
main {
  flex: 1;
}
```

## 动画 变形等

```css
div {
  /* transform  rotate(旋转) scale(缩放) skew(倾斜) translate(移动) */
  transform: scale(0.7);
  /* 变形中心点 */
  transform-origin: left bottom;
}
div {
  transition: width 3s ease 0s;
  /* animation: name duration timing-function delay iteration-count direction fill-mode;  */
}
```

## HTML5

# 文件 API

file 对象 fileList fileReader

# 拖拽 API

# canvas

# webSocket

# HTML（超文本标记语言）

结构层 表现层 行为层

https://www.freesion.com/article/9810416087/
