1. [网页抽象成三部分（HTML、CSS和JavaScript）后的优点有哪些？] 
各司其职，协同工作
HTML：结构与内容
CSS：表现与形式
JavaScript：行为与交互（JavaScript 是一种编程语言，用于实现网页的动态行为和交互功能。通过 JavaScript，开发者可以操控网页内容、响应用户输入、与服务器通信、动画效果等，使网页不仅仅是静态展示，而是具有互动性。JavaScript 决定了网页“怎么动”。）
2. [请谈谈你对网页的理解。]
‌网页是构成网站的基本元素，通常由HTML（超文本标记语言）编写，并通过网页浏览器进行阅读。‌ 网页是万维网中的一“页”，通常包含文本、图片、视频、超链接等多种媒体内容。每个网页都有一个唯一的URL（统一资源定位符），通过这个地址可以在互联网上访问到具体的网页‌
3. [什么是Web存储？]
web存储指的是在web通信过程中，由客户端（如浏览器）对少量数据进行的本地存储。web存储类型主要包括古老的cookie，以及HTML5推出的sessionStorage、localStorage和indexedDB等。
web存储的宿主环境通常是浏览器，借助浏览器提供的JavaScript接口，我们可以实现对这些数据的增删改查。 

4. [cookie作用]
cookie的诞生源于这样一个矛盾：http协议是无状态的，而服务端却有区分不同客户端的实际需要。

先来理解http协议的无状态性。无状态性指的是，http协议对任意两次数据传输是没有记忆能力的。举个例子，假如某个客户端先向服务端发送了一条消息，随后又向服务端发送了另一条消息，那么服务器无法知道这两条消息来自同一个客户端。 
但在很多情况下，服务端必须区分不同的客户端。拿淘宝来说，在收到下单请求时，服务器必须知道是哪个用户在下单，这就要求它必须知道当前的下单请求和之前的哪个登录请求来自同一个客户端（否则该客户端每次发请求都必须把自己的账号信息和所有参数带上）。
为此，服务端设计了session（会话）机制。 用户登录时，服务端会为该用户创建一个会话（session）对象，然后服务端把会话对象的id写入响应参数中发送给客户端。客户端收到响应后，取出该参数，保存在浏览器内。随后每次发送请求时都携带上这个id，服务端根据这个id，就可以确定该请求来自于哪个用户。这个用于存储id的特殊字段，就称为cookie（当然，cookie不仅仅可以存储session的id，还可以存储其他参数）。  
cookie的基本作用就是携带用户标识，帮助服务端区分不同的客户端。

5. [Cookie的缺陷有哪些？]
1) 安全问题，cookie中存储了客户端的身份认证信息，如果被窃取，就可能产生不可预估的损失。
2) 容量问题，它不适合存储大量的数据，因为浏览器限制了每个cookie的大小不能超过4KB。此外，浏览器对单个域下cookie的数量也是有限制的，该数量因浏览器而异，对开发者来说，这个数量一般不要超过20个。这使得cookie不能广泛用于web存储。此外，cookie对通信带来的性能损耗也是不可忽视的。因为cookie中的所有参数会在每次向后端发送请求时被携带，如果cookie很大，就会导致每次的http请求体积变大，影响网站的响应速度。

6. [用什么方法可以防止Cookie被盗取？]
1) 使用安全Cookie标志
使用安全选项(如Secure和HttpOnly)配置Cookie。Secure选项确保Cookie只通过HTTPS传输，而HttpOnly标志禁止客户端脚本访问Cookie。这降低了通过未加密连接或跨站点脚本(XSS)攻击获取Cookie的可能性。
1.1 使用 HttpOnly 属性(Set-Cookie: id=value; HttpOnly)
设置 HttpOnly 属性可以防止JavaScript Document.cookie API 无法访问带有 HttpOnly 属性的 cookie；此类 Cookie 仅作用于服务器。例如，持久化服务器端会话的 Cookie 不需要对 JavaScript 可用，而应具有 HttpOnly 属性。此预防措施有助于缓解跨站点脚本（XSS） (en-US)攻击。 
1.2 使用 Secure 属性(Set-Cookie: id=value; Secure)
设置 Secure 属性可以保证 Cookie 只在 HTTPS 连接中传输，防止在数据传输过程中被窃取。
1.3 设置 SameSite 属性(Set-Cookie: id=value; SameSite=Strict)
SameSite 属性可以防止跨站请求伪造（CSRF）攻击。它有三个值：Strict、Lax 和 None，默认值为Lax。如果设置为 Strict，Cookie 将只在同一站点请求中发送；如果设置为 Lax，Cookie 在导航到目标站点的 GET 请求中，或者在同一站点的请求中，Cookie 会被发送；如果设置为 None，Cookie 会在所有请求中发送，仅支持设置了 Secure 属性的HTTPS站点。注意：各浏览器处理策略可能不同 
1.4 设置正确的过期时间
默认的cookie生命周期为临时，仅会话期间存在，不应该设置过长的 Cookie 过期时间，以减少 Cookie 信息被盗用的风险。
1.5 使用 Cookie 加密
对敏感信息，如 session ID，进行加密后再存储到 Cookie 中，即使 Cookie 信息被窃取，攻击者也无法获得真正的内容。
2) 利用SSL / TLS
通过使用SSL/TLS证书来加密用户和服务器之间发送的数据，从而保护你的网站与HTTPS。加密使攻击者几乎不可能拦截和窃取会话Cookie，在传输过程中保持关键信息的安全，并提高整体数据安全性。

7. [IE独有的数据存储技术是什么？]
‌userData‌：这是IE浏览器特有的存储技术，容量可以达到640k，方法可靠且不需要安装额外的插件，但仅在IE浏览器下有效‌
8. [你怎么看待Web App 、Hybrid App和Native App？]

## HTML
1. [请阐述你对W3C的理解与认识。]
W3C（World Wide Web Consortium，万维网联盟）是一个国际性组织，致力于推动Web的标准化和发展。它成立于1994年，W3C的使命主要包括： 
制定Web标准：W3C负责制定和维护各种Web标准，确保Web技术的互操作性和可扩展性。例如，HTML、CSS和XML等都是W3C制定的标准。
促进Web的可访问性：W3C倡导为所有用户提供平等的Web访问体验，包括残障人士。通过制定Web内容可访问性指南（WCAG），W3C帮助开发者创建更具包容性的Web内容。
推动Web技术的发展：W3C通过研究和开发新技术，推动Web的发展，如HTML5、SVG、WebRTC等新标准。
提供技术指导与培训：W3C为开发者和企业提供技术文档、培训和支持，帮助他们理解和实施Web标准。
2. [HTML的含义是什么？]
HTML（Hypertext Markup Language）是网页的骨架和内容载体。它定义了网页的基本结构和内容，如文本、图像、表格、链接等元素。简单来说，HTML 决定了网页“有什么”。
3. [什么是HTML实体？]
HTML 实体是一种用于在 HTML 文档中表示某些特殊字符的方法，因为这些字符在 HTML 中有特定的用途或可能会与 HTML 标签语法冲突。
通常以 & 开始，以 ; 结束，中间是特定字符的名称或编号
&quot; : 双引号字符（"）
&amp; 表示 &
&lt; 表示 <
&gt; 表示 >
&apos; 表示单引号（'）
&nbsp; 表示不间断空格
&copy; 表示版权符号（©）
&reg; 表示注册商标符号（®）
&euro; 表示欧元符号（€）
4. [HTML文档中的DOCTYPE有什么作用？]
DOCTYPE是document type（文档类型）的缩写，它位于HTML文档的最前面，处于<html>标签之前。DOCTYPE声明的主要作用是告诉浏览器的解析器使用哪种HTML规范或者XHTML规范来解析页面。
在W3C标准出来之前，不同的浏览器对页面渲染有不同的标准，导致了一定的差异。而DOCTYPE的存在，使得浏览器能够按照统一的标准来渲染页面，提高了浏览器之间的兼容性。
DOCTYPE是HTML文档中非常重要的一个部分，它决定了浏览器如何解析和渲染页面，确保了不同浏览器之间的兼容性，并允许开发者选择严格模式或混杂模式来呈现页面
5. [请简单介绍一下浏览器的2种渲染模式：怪异模式和接近标准模式。]
是否进行了有效的DOCTYPE声明，决定了浏览器如何解析、渲染页面
标准模式：提供了有效的DOCTYPE声明，浏览器引入w3c的标准，按照w3c的标准进行界面渲染。
怪异模式：浏览器采用自身标准（各个浏览器不同）进行界面渲染。
6. [怪异模式中的怪癖行为是指什么？]
在怪癖模式中 ：给元素设置的 宽度 = content+padding+border
可以设置行内元素的高宽 
可直接设置高度为百分比 
用margin:0 auto设置水平居中在IE下会失效  
quirk模式下设置图片的padding会失效
quirk模式下Table中的字体属性不能继承上层的设置
quirk模式下white-space:pre会失效
5. [标准的HTML文档必须包含哪几个元素？] 
1、DOCTYPE声明，用于告诉浏览器编写页面所用的标记的版本；
2、html根元素，包含文档的元数据，向浏览器提供有关文档内容和标记的信息；
3、head头部，主要包含编码声明、标题、样式表嵌入等；
4、title部分，用于定义文档的标题；
5、body内容部分，包含文档的所有内容。 
8. [什么是微格式？]
9. [为meta元素的name属性定义为viewport后，在content属性中定义的内容可以是哪些关键字？]
 <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
1、name属性值viewport表示视口，不仅匹配PC端，也可匹配移动端。
2、content属性值：
（1）width：可视区域的宽度，值可为数字或关键词 ：device-width，设备屏幕的物理宽度
（2）initial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放
（3）maximum-scale=1.0或minimum-scale=1.0表示可视区域的缩放级别，
    ① maximum-scale用户可将页面放大的程序
    ② minimum-scale用户可将页面缩小的程序
    ③ 1.0表示将禁止用户放大到实际尺寸之上。
（4）user-scalable:是否可对页面进行缩放，no 表示禁止缩放

10. [meta元素的http-equiv属性所拥有的功能有哪些？]
https://blog.csdn.net/Code_King006/article/details/135438789
11. [meta元素中的name属性可以取哪些值？]
1、viewport
定义浏览器窗口的视窗为自适应大小 
<meta name="viewport" content="width: device-width,initial-scale=1.0"> 
2、 keywords
指定当前页面对于搜索引擎的关键字 
<meta name="keywords" content="js,html"> 
3、description
告诉搜索引擎当前页面的主要内容，firefox中被用作标签的描述。
<meta name="description" content="this is a websit">

12. [meta元素可以定义文档的哪些元数据？]
charset: 定义文档的字符编码。
<meta charset="UTF-8">
https://blog.csdn.net/ASHIYI66/article/details/140939122

11. [用meta元素的两种声明方式，把当前HTML文档中的内容用UTF-8进行编码。]
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

13. [全局属性有哪些？]
html全局属性有class、id、style、title、lang、accesskey、tabindex、hidden、draggable和editable等等。这些属性可以应用于任何html元素，全局属性是指可以被所有html元素使用的属性，无论是内联属性还是作为标签属性。
14. [全局属性title有什么作用？]
提供元素的附加信息。当鼠标悬停在元素上时会显示title属性的值。常见应用包括解释图标含义、段落名词解释等
17. [img元素中的title和alt属性有何区别？] 
1）alt：给搜索引擎识别的，在图像无法显示时代替文本
<img src="logo.png" alt="公司徽标">
如果图像无法加载，用户将看到 "公司徽标" 作为替代文本
2）title：为图片提供额外的信息提示，用户可以通过鼠标悬停来查看

16. [外部样式可用link元素引用，其中rel属性的作用是什么？]
<link rel="stylesheet" type="text/css" href="style.css" />
1.href:规定引入文件的路径。
2.type:规定被链接文件的格式类型。
3.rel:用来规定当前文档与被连接文档的关系。
如果rel的值是stylesheet，也就是说引入的文件可以作为当前文件的样式表。
rel是relationship的缩写。

19. [CSS有几种引入方式？它们有哪些区别？]
行内样式：使用 HTML 标签的 style 属性定义 CSS 样式；
内嵌样式：使用 <style> 标签在 HTML 文档头部（<head> 和 <head> 之间）定义 CSS 样式；
链接式：使用 <link> 标签引入外部 CSS 样式表文件。
导入式：使用 @import 命令导入外部 CSS 样式表文件。

20. [什么是内联样式？有哪些优缺点？]
21. [JavaScript有几种引入方式？它们有哪些区别？]
<script type="text/javascript" src="test.js"></script>
标签引用（或嵌入式)： 使用 < script > 标签将 JavaScript 代码嵌入到 HTML 页面中。可以放置在 < head > 或 < body > 中。
文件引用（外链式）： 将 JavaScript 代码编写在一个独立的 .js 文件中
行内式： 直接在 HTML 标签的属性中编写 JavaScript 代码
25. [通过元素的事件属性嵌入的脚本有哪些缺点？]
1）不可复用，如果有100个元素需要绑定点击事件，那么就需要写100遍元素。
2）由于属性值是字符串，所以内容应该是执行函数、对象方法或简单的逻辑，不能用于复杂的函数声明、创建对象等，局限性比较大。
3）虽然可以用分号分割多条语句，但是一旦代码量增长，可读性就会降低。

15. [defer（延迟）和async（异步）两个属性各有什么作用？]
在HTML的<script>标签中，async和defer两个属性都被用于控制脚本的加载和执行方式
async和defer都用于异步加载脚本，但它们的执行时机不同。
async脚本在加载完成后立即执行，可能会阻塞其他脚本的执行（如果它们依赖于该脚本），并且不保证执行顺序。
defer脚本会等待整个页面都加载完成后再执行，并且会按照在HTML中出现的顺序执行。这使得延迟脚本更适合包含依赖于DOM的代码。

18. [元素属性src和href有何区别？] 
23. [虚元素有哪些？]  br img input hr meta
24. [替换元素有哪些？] img iframe video embed 
27. [什么是Shadow DOM（影子中的DOM）？]

## HTML5
1. [请简单介绍一下HTML5。]
2. [HTML和HTML5的区别有哪些？]
3. [HTML5去除了img元素的一些过时属性，包括哪些？]
4. [HTML5不再支持哪些HTML元素？]
5. [HTML5的DTD是怎么样的？]
6. [在input元素的type属性值中，哪些是HTML5新增的？]
7. [HTML5为input元素新增了多个提交相关的属性，是哪几个？]
10. [请列举几个HTML5新增的input元素的type类型（即type属性的值）。]
11. [HTML5已废弃控制样式的属性，请列举几个这样的table元素的属性，并用合适的CSS属性替代。]
12. [请列举几个HTML5新增的多媒体元素，并说明它们的功能。]
13. [HTML5新增了几个多媒体元素，请列举使用这些元素的优势。]
14. [除了video和audio元素，HTML5还支持哪些其它的多媒体元素？]

## HTML5语义化
1. [简述一下你对HTML5语义化的理解？]
HTML语义化：就是页面去掉样式或者加载失败的时候能够让页面呈现出清晰的结构。HTML5新增了好多语义化的标签，例如：header、footer、nav、menu、section、article等等，单单从字面上理解，就知道标签的含义。在写页面的时候，我们可以直接引用这些标签，不需要再用没有任何含义的div标签了，对于机器可以识别，对于开发人员很容易明白。这就是HTML语义化。
语义化的好处：
1）为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构
2）用户体验：例如title、alt用于解释名词
3）有利于SEO：利于被搜索引擎收录，更便于搜索引擎的爬虫程序来识别
4）方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
5）便于项目的开发及维护，使HTML代码更具有可读性 
2. [语义化有哪些优势？]
3. [请列举几个HTML5新增的图像相关的语义化元素。]
4. [哪个语义化的元素最适合定义标题？]
5. [哪个语义化的元素比较适合表示侧边栏？]

## 图
1. [哪种图像格式支持alpha透明？]
2. [什么是位图图像？]
3. [什么是矢量图形？]
4. [什么是分区响应图？] 
5. [嵌入在HTML文档中的图像格式有哪些，都有些什么特点？]
6. [什么是SVG？]

## iframe
1. [iframe的用途有哪些？]
3. [某个页面被嵌在iframe元素中，并且页面中有个a元素。将a元素的target属性设为哪个关键字后，可在新窗口中显示链接的资源？]
3. [iframe元素的哪个属性表示设置嵌入文档的安全规则？]
4. [iframe元素有哪些缺点？]
5. [如何用iframe元素实现无刷新文件上传。]

## 多媒体
1. [专门用于播放音频的元素是哪个？]
2. [多媒体元素video专门用于播放视频，它有哪些属性？]

## 表格
1. [表格中的哪个单元格属性用来关联表头的？]
2. [请列举表格布局的弊端。]
3. [每张表格都需要包含3个元素，是哪3个？]
4. [table元素的colspan属性和rowspan属性各有什么作用？]

## a
1. [a元素的属性有哪些？]
2. [什么是锚点？]
3. [a元素除了可以用于导航外，还有什么其它的功能？]

## 元素的布尔属性
1. [HTML元素的布尔属性有哪些？]   input->disabled hidden
2. [元素的布尔属性disabled和readonly有何区别？]

## canvas
1. [请简单描述一下canvas元素。]
2. [用canvas元素画一个蓝底白字的矩形按钮。]

## form
1. [input元素中的form属性有什么作用？]

## 思维导图
![HTML](https://github.com/pwstrick/daily/blob/master/assets/img/mind/HTML.png)