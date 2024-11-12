1. [请简单介绍一下图像的预加载和懒加载。](https://github.com/pwstrick/daily/issues/488)
2. [平时会用到哪些方法来优化页面的性能？](https://github.com/pwstrick/daily/issues/489)
网络加载类：

页面渲染类：
CSS优化类：
JavaScript执行类：
缓存类：
图片类：
架构协议类

3. [页面性能分析一般会关注哪些参数？](https://github.com/pwstrick/daily/issues/490)
4. [请谈谈你用过的性能分析工具。](https://github.com/pwstrick/daily/issues/491)
5. [性能测试的原理是什么？](https://github.com/pwstrick/daily/issues/766)
6. [什么是负载均衡？](https://github.com/pwstrick/daily/issues/767)
7. [怎么优化页面的加载速度？如果有很多个小图标，怎么优化？iconfont有什么缺点？](https://github.com/pwstrick/daily/issues/807)
优点：
高清保真，因为是SVG图形
灵活性，可以设置大小，颜色等
兼容性好，支持IE6
开源的字体库很多
减少HTTP请求
缺点：
维护自己的字体库麻烦一些
图表字体只能被渲染为单色的
8. [将静态资源放在其他域名的目的是什么？](https://github.com/pwstrick/daily/issues/830)
浏览器在同一时刻向同一域名请求文件的并行下载数是有限的，因此可以利用多个域名的主机来存放不同的静态资源，增大页面加载时资源的并行下载数，缩短页面资源加载的时间，通常根据多个域名来分别存储JavaScript、CSS和图片文件；
9. [Canvas性能优化的方法有哪些？](https://github.com/pwstrick/daily/issues/834)
10. [重绘和回流（重排）是什么，如何避免？](https://github.com/pwstrick/daily/issues/842)
回流必定会发生重绘，重绘不一定发生回流

重绘：当页面元素样式改变不影响元素在文档流中的位置时（如background-color，border-color，visibility），浏览器只会将新样式赋予元素并进行重新绘制操作。


回流：当渲染树render tree中的一部分或全部因为元素的规模尺寸、布局、隐藏等改变时，浏览器重新渲染部分DOM或全部DOM的过程

一、 CSS中避免回流、重绘

尽可能在DOM树的最末端改变class
避免设置多层内联样式
动画效果应用到position属性为absolute或fixed的元素上
避免使用table布局
使用css3硬件加速，可以让transform、opacity、filters等动画效果不会引起回流重绘
二、 JS操作避免回流、重绘

避免使用JS一个样式修改完接着改下一个样式，最好一次性更改CSS样式，或者将样式列表定义为class的名称
避免频繁操作DOM，使用文档片段创建一个子树，然后再拷贝到文档中
先隐藏元素，进行修改后再显示该元素，因为display:none上的DOM操作不会引发回流和重绘
避免循环读取offsetLeft等属性，在循环之前把它们存起来
对于复杂动画效果,使用绝对定位让其脱离文档流，否则会引起父元素及后续元素大量的回流

11. [如何优化网页的动画？](https://github.com/pwstrick/daily/issues/858)
12. [大量数据滚动加载如何保证性能。](https://github.com/pwstrick/daily/issues/860)
13. [可以通过哪些方式改善网站的滚动性能？](https://github.com/pwstrick/daily/issues/864)
14. [如何解决白屏？](https://github.com/pwstrick/daily/issues/953)
15. [白屏时间怎么计算？如何确定页面出现了白屏，内容无法展示？](https://github.com/pwstrick/daily/issues/978)
16. [FP和FCP是指什么？如何计算？](https://github.com/pwstrick/daily/issues/979)