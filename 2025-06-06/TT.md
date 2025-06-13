https://www.cnblogs.com/hellocoder2029/p/16687494.html

前端基础复习要抓大放小：

- JS 重点攻克闭包/原型链/异步等高频高阶题
- CSS 专注布局原理和性能优化
- Vue3 深挖响应式原理和设计思想

1 基础知识点速查表（JS/CSS/Vue 浓缩版）
2 高频题应答话术模板
3 项目表述 STAR-E 范例

每天 1 小时：用 codepen 手写 JS 核心题（深拷贝/Promise.all）
碎片时间：听 Vue 原理播客（推荐「前端早读课」音频专栏）
睡前记忆：朗读「CSS 权重口诀」+「Event Loop 执行顺序图」

模拟一场 10 分钟超压面试（专练救场话术）

一、🔍 JS/CSS 高阶查漏（5 年经验专属重点）

✅ JavaScript 火力点（附速查表）
 
ES6 Modules 优势 1. 静态分析支持 Tree-shaking<br>2. 顶级作用域隔离<br>3. 显式依赖声明 对比 CommonJS：”动态加载导致无法摇树优化“

✅ CSS 核弹题（专攻刁钻场景）

1. **布局终极题**  
    → 实现：左侧宽度自适应，右侧固定 200px，等高布局（不用 flex/grid）  
    **答案：**
   ```css
   .left { float: left; width: calc(100% - 200px); }
   .right { float: right; width:200px; margin-left: -100%; }
   /* 伪等高：父容器 overflow:hidden + padding-bottom:9999px; margin-bottom:-9999px; */
   BFC 应用实战
   → 问：“如何触发BFC？解决过什么实际问题？”
   满分答：
   “用 overflow:hidden 触发BFC解决浮动父容器高度塌陷；用BFC阻止 margin 合并”
   ```

性能杀手
→ 问：“哪些 CSS 属性会触发重排/重绘？如何优化高频动画？”
技术控答：
“用 transform 替代 top/left 避免重排；用 will-change: transform 启用 GPU 加速”

Vue 守护区（3 个保命知识点）
响应式原理：
“Vue3 用 Proxy 拦截对象操作，在 get 时 track 依赖，在 set 时 trigger 更新”
→ 随手画这个流程图：

TEXT
[数据] → [Proxy] → [getter/setter]  
 ↓  
 [Dep] ← 收集依赖  
Composition API 设计思想：
“逻辑关注点分离！以前在 options 里散落的代码，现在能用函数聚合，比如：”

JAVASCRIPT
// 以前：data/methods/watch 分散
// 现在：
const { user, loading } = useUser() // 用户相关逻辑打包
const { list, fetch } = useList() // 列表逻辑打包
Diff 算法优化：
“通过 编译时标记动态节点（比如 {{msg}} 带 patchFlag），跳过静态树对比”

subgraph 高频考题
D[“为什么 Vue3 用 Proxy？”] --> D1(数组监听缺陷)
D --> D2(性能对比)
E[“Vue-Router 原理？”] --> E1(hash/history 实现差异)
E --> E2(导航守卫实现)
F[“Pinia 解决了什么？”] --> F1(对比 Vuex4/5)
F --> F2(如何持久化存储？)

🔥 背诵口诀：
响应式：Proxy 劫持 → track 依赖 → trigger 更新
更新机制：编译优化标记 → diff 跳过静态节点 → 靶向更新
三、⚡ 性能优化必杀清单（亮出专业高度）
分层优化策略（从网络到渲染）
阶段 实战技巧 量化效果
网络层 - HTTP2 多路复用 + 资源推送<br>- 预加载关键资源 (<link rel=prefetch>) 减少 RTT 50%+
构建层 - Vite 依赖预编译<br>- Tree-shaking 副作用分析（用 /_#**PURE**_/ 标记） 打包体积 ↓40%
运行时 - 虚拟列表实现（含滚动缓冲池）<br>- Web Worker 计算密集型任务 列表渲染提速 10x
缓存层 - Service Worker 离线缓存策略<br>- 接口数据 IndexedDB 二级缓存 二次打开秒开

四、💥 技术 Leader 压力模拟（高频死亡连环问）
第一波：原理深挖

Q1：“Vue 的响应式系统在数组删除元素时如何触发更新？”
🔑 答：
“Vue 重写了数组的 7 个方法（push/pop 等），执行时手动调用 ob.dep.notify()。但直接通过索引删除需用 Vue.delete”

Q2：“如果让你设计一个通用的错误监控 SDK，考虑哪些点？”
🔑 答：
“1. 错误分类（JS 异常/资源加载/Promise 未 catch）→ 2. 上下文信息（用户轨迹/设备信息）→ 3. 节流上报+本地缓存 → 4. SourceMap 映射”

第二波：场景刁难

Q3：“页面卡顿，你如何锁定是哪个函数导致的？”
🔑 答：
“1. Performance 录制 → 定位 Long Task → 2. 拆解调用栈找到耗时函数 → 3. 结合内存快照判断是否内存泄漏”

Q4：“SSR 应用如何处理登录态同步？”
🔑 答：
“1. 服务端通过 Cookie 注入用户信息 → 2. 初始渲染直出用户数据 → 3. 客户端接管后复用 store 状态”

第三波：软性施压

Q5：“你做了 5 年前端，相比 3 年经验的人优势在哪？”
🔑 反杀：
“我能从架构层面规避问题。比如在 XX 项目，早期选择 Monorepo + 通用组件抽离，支撑了 5 个子项目迭代，人力节省 30%”

五、 📦 项目细节弹药箱（最后冲刺用）
采用 「STAR-E」法则 强化细节：
Situation → Task → Action → Result
Extension（延伸挑战）：
“这个方案后续遇到什么新问题？如何迭代？”

案例：
“在管理后台项目中（S），需要实现动态路由权限（T）。我设计了一个路由编排中间件（A），支持后端返回路由配置并自动生成菜单，权限错误率降为 0（R）。
后续迭代（E）：为解决路由切换白屏，增加了路由预加载策略，用户点击菜单前静默加载模块”

⏰ 最后执行清单（立即行动）
今天完成：
手写 Promise.allSettled（带取消功能）
用 Performance 分析一个页面卡顿案例
明天攻克：
画出 Vue3 响应式原理流程图
准备一个性能优化量化案例
模拟面试：
用手机录屏自答压力题 → 回放检查卡顿点
