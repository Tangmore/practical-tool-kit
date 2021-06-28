## 这月末把vue、vueX 官方文档过一遍  --2021.06.30
# 查漏  vueDemo/vue-study.html
* vue事件修饰符 
    1. .stop：阻止冒泡(通俗讲就是阻止事件向上级DOM元素传递) 
    2. .prevent：阻止默认事件的发生 (如点击超链接的时候会进行页面的跳转，点击表单提交按钮时会重新加载页面等)  
    3. .capture：捕获冒泡，即有冒泡发生时，有该修饰符的dom元素会先执行，如果有多个，从外到内依次执行，然后再按自然顺序执行触发的事件
    4. .self：将事件绑定到自身，只有自身才能触发，通常用于避免冒泡事件的影响(根据event.target确定是否当前元素本身，来决定是否触发的事件/函数)
    5. .once：设置事件只能触发一次，比如按钮的点击等
    6. .passive：允许执行默认事件
    7. .native：为原型绑定，在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的HTML标签，不加'. native'事件是无法触发的(给普通标签加.native无效)
* 表单输入修饰符
    1. .lazy：v-model每次在“change”时而非“input”时将输入框的值与数据进行同步 
        ``` html
        <input type="text" v-model.lazy="keyword">
        ```
        #  oninput &  onchange  事件
        oninput事件，在输入用户输入时触发，它是在元素值发生变化时立即触发；
        ``` html
        <input type="text" id="onInput" oninput="myFunc()">
        ```
    　　    
    　　onchange事件，要在 input 失去焦点的时候才会触发；
        ``` html
        　　    <input type="text" id="fname" onchange="myFunction()">
        ```

    2. .number：自动将用户的输入值转为数值类型
    3. .trim：自动过滤用户输入的首尾空白字符

* 插槽分发内容
* 动态组件 is attribute
* 全局 & 局部 & 自动化全局注册(require.context)
    # require.context 接收三个参数 1.读取文件的路径2.是否遍历文件子目录3.匹配文件正则
    eg：let files=require('./test', false, /.test.js$/);
    返回一个函数，该函数含有三个属性
    1. resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
    2. keys {Function} -返回匹配成功模块的名字组成的数组
    3. id {String} -执行环境的id 
    [require.context](https://cn.vuejs.org/v2/guide/components-registration.html)
                     (https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/components/_globals.js)
                     (https://github.com/Tangmore/vue-require-context/blob/main/src/router.js)

* Prop +(https://www.jianshu.com/p/a388d38f8c69)
    1. $attrs:包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)
        在标签内添加v-bind="$attrs"可渲染上未注册的属性
        inheritAttrs:true 允许组件绑定的未注册属性渲染到组件根节点上的，为false时可手动决定这些attribute渲染到指定元素上
    2. $listeners:包含了作用于当前子组件的（不包含.native修饰器的）所有v-on事件监听器
        v-on="$listeners" 可将所有的事件监听器指向这个组件的某个特定的子元素
    3. .sync修饰符
* 动态 & 异步组件加载
* 边界情况
    1. $root
    2. $parent
    3. $refs
    4. 依赖注入 
        * provide
        * inject 
* 事件侦听器
    1. $emit
    2. $on 
    3. $once 
    4. $off
* 组件循环引用   $options
# 过渡 & 动画
    1. transition 
    2. transition-group 列表过渡
# 混入（mixins）
    自定义选项合并策略 Vue.config.optionMergeStrategies
# 自定义指令
* 全局指令 
``` javascript
    Vue.directive(指令名称，{
        钩子函数(el){
            处理
        }
    })  
``` 
* 局部指令 
``` javascript
    directives：{指令名称：{}}
```
* 钩子函数
1. bind  指令第一次绑定到dom上时调用
2. inserted  被绑定元素插入dom时调用
3. update 所在组件的 VNode 更新时调用
4. componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用 
5. unbind：只调用一次，指令与元素解绑时调用 
   el,binding,vnode等钩子函数参数
* 渲染函数 & JSX
1. 节点、树 & 虚拟DOM




## vueX源码阅读
# 2021.06.24

# 结构
├── src
    ├── module    // 与模块相关的操作
    │   ├── module-collection.js   // 用于收集并注册根模块以及嵌套模块
    │   └── module.js   // 定义Module类，存储模块内的一些信息，例如: state...
    │
    ├── plugins   // 一些插件
    │   ├── devtool.js   // 开发调试插件
    │   └── logger.js    // 
    │
    ├── helpers.js       // 辅助函数，例如：mapState、mapGetters、mapMutations...
    ├── index.cjs.js     // commonjs 打包入口
    ├── index.js         // 入口文件
    ├── index.mjs        // es6 module 打包入口
    ├── mixin.js         // 将vuex实例挂载到全局Vue的$store上
    ├── store.js         // 核心文件，定义了Store类
    └── util.js          // 提供一些工具函数，例如: deepCopy、isPromise、isObject...

 