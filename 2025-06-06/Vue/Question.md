# vue3.0 了解多少?

1、 响应式原理的改变 Vue3.x 使用 Proxy 取代 Vue2.x 版本的 Object.defineProperty  
2、 组件选项声明方式 Vue3.x 使用 Composition API setup 是 Vue3.x 新增的一个选项，他是组件内使用 Composition API 的入口
3、 模板语法变化 slot 具名插槽语法 自定义指令 v-model 升级  
4、 其它方面的更改 Suspense 支持 Fragment(多个根节点) 和 Protal (在 dom 其他部分渲染组建内容)组件
针对一些特殊的场景做了处理。基于 treeshaking 优化，提供了更多的内置功能。

# 组件之间的传值有几种方式

1、父传子
2、子传父
3、eventbus
4、ref/$refs
5、$parent/$children
6、$attrs/$listeners
7、依赖注入(provide/inject)
