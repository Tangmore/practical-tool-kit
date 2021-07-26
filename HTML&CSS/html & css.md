# 关于css单位？

## CSS（层叠样式表）布局基础
语义化标记
良好标记
1. DOCTYPE 声明文档类型，让浏览器或者其他用户代理知道使用的语言类型
2. 指定语言和字符集 
3. 指定标题  利于搜索引擎优化

## 盒子模型 
每个元素都会在页面上生成一个盒子
margin 外边距 盒子与相邻元素的距离
border 边框粗细、颜色、样式
padding 内边距 盒子边框与内容的距离
content
1. [W3C标准盒模型]：宽高只包括content
    设置：box-sizing:content-box;

2. [IE盒模型]：宽高包括content padding border  
    设置：box-sizing:border-box;

3. 获取盒子宽高
dom.offsetWidth/offsetHeight  包含width/height padding border

4. 盒子常见定位方案
普通文档流
浮动流
绝对定位流

5. 盒子内部渲染排列方式 
* BFC(块级格式化上下文)： 一个独立的渲染区域，它规定了内部块级别box的渲染方式，并且与区域外部无关
  BFC的特性 
    内部的Box会在垂直方向上一个接一个的放置;
    垂直方向上的距离由margin决定;
    BFC的区域不会与float的元素区域重叠;
    计算BFC的高度时，浮动元素也参与计算;
    BFC就是页面上的一个独立容器，容器里面的子元素不会影响外面元素;

  如何创建BFC？
    float的值不是none;(让父盒子浮动起来)
    position的值不是static或者relative
    display:inline-block
    overflow:hidden;

  应用？
  自适应两栏布局
  高度坍塌(清除内部浮动)
  垂直margin重叠  


* IFC
* GFC
* FFC 

## 问题？
1. display：none
    隐藏元素，元素原先占据的空间移除，绑定事件无法触发
2. visibility：hidden
    隐藏元素，但仍然占据空间，绑定事件无法触发
2. opacity:0
    改变元素透明度

## 媒体查询



# HTML（超文本标记语言）
结构层 表现层 行为层