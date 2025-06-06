# Document 类型
document.documentElement  document.body  
document.title

# HTML
1. 获取特性 getAttribute setAttribute removeAttribute
2. 创建新节点 createElement
3. 添加 appendChild insertBefore 

# 动态加载脚本
```js
// (1)
    <script type="text/javascript" src="../js/common.js"></script>
// (2)
    <script type="text/javascript">
        document.write('<script src="../js/common.js?version='+new Date().getTime()+'"><\/script>');
    </script> 
```
```js
// (3)
function loadScript(url){
    let script=document.createElement('script');
    script.type='text/javascript';
    script.src=url;
    document.body.appendChild(script);
}
```
# 拓展
# querySelector querySelectorAll 
# 获取节点data-id 属性  div.dataset.id
# innerHTML
# scrollIntoView 元素完全滚动到视口可见处
# contains 某个节点是否包含在父节点中
# getComputedStyle (除IE都支持) currentStyle(IE支持) 获取当前节点所有可读样式属性值
# style属性上基本可以访问节点所包含样式值
# 元素大小
1. 偏移量  offsetLeft offsetTop (元素本身与父元素的left top距离)
offsetWidth offsetHeight(含元素本身padding border)
2. 客户区大小 clientWidth clientHeight (含元素本身与padding)
3. 滚动区域大小 scrollWidth scrollHeight(文档内容总宽高)
scrollTop scrollLeft (文档内容已滚动区域 可用来设置内容滚动位置)



 
