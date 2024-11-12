## 窗口位置
screenTop  screenLeft
screenX screenY
# 调整窗口位置
window.moveTo()
window.moveBy()
# 窗口大小
```js
// 获取当前可视范围的高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    }
    else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}
```
# 调整窗口大小
window.resizeTo()
window.resizeBy()

# 定时器
setInterval clearInterval
setTimeout clearTimeout

# 系统确认框
alert confirm prompt 

## location 对象
提供了当前窗口加载文档的相关信息
hash: 返回url中的hash部分（#后面字符）
port host href search等
修改上述任一属性值都会在当前页面历史记录中新增一条记录， 除hash属性以外页面都会以新的url进行重新加载页面
onhashchange事件可监听hash值的改变 详见[vue-router/路由模式.md]

location.replace()：会改变浏览器位置，但是不会生成新的记录
# 获取url search参数对象
```js
// 获取url参数
function GetRequest() {  
    var url = location.search.replace(/\s+/g, "");  //取得？查询字符串
    var theRequest = {}; 
    if (url.indexOf("?") != -1) { 
       var str = url.substr(1); 
       strs = str.split("&");  
       for(var i = 0; i < strs.length; i ++) {
          theRequest[decodeURI(strs[i].split("=")[0])] = decodeURI(strs[i].split("=")[1]);
       }
    }
    return theRequest;  
 } 
```

# navigator 对象
可用于检测客户端浏览器类型版本等
# screen 对象
# history 对象







