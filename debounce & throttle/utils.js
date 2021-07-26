
  //防抖（debounce）
  // 定义： 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时；(类似于 王者荣耀回城效果~~）
  // 典型的案例 输入搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，就重新计时。
  // 实现原理： 函数防抖的基本思想是设置一个定时器，在指定时间间隔内运行代码时清楚上一次的定时器，并设置另一个定时器，知道函数请求停止并超过时间间隔才会执行。
  // 使用场景：
  // 1.搜索框搜索输入，最后一次输入完成后，再发送请求；
  // 2.手机号、邮箱的输入验证；
  // 3.window 触发 resize 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次；
  const debouncePromise = (fn, ms = 0) => {
    let timeoutId;
    const pending = [];
    return (...args) =>
      new Promise((res, rej) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const currentPending = [...pending];
          pending.length = 0;
          Promise.resolve(fn.apply(this, args)).then(
            data => {
              currentPending.forEach(({ resolve }) => resolve(data));
            },
            error => {
              currentPending.forEach(({ reject }) => reject(error));
            }
          );
        }, ms);
        pending.push({ resolve: res, reject: rej });
      });
  };
  const fn = arg => new Promise(resolve => {
    setTimeout(resolve, 1000, ['resolved', arg]);
  });
  const debounced = debouncePromise(fn, 200);
  debounced('foo').then(console.log);
  debounced('bar').then(console.log);

  //节流(throttle)
  // 定义： 规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效；
  // 典型的案例 鼠标不断点击触发，规定在n秒内多次点击只有一次生效。
  // 实现原理： 原理是用时间戳来判断是否已到回调该执行时间，记录上次执行的时间戳，然后每次触发 scroll 事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经到达 规定时间段，如果是，则执行，并更新上次执行的时间戳。
  // 使用场景：
  // 1.DOM 元素的拖拽功能实现（mousemove）；
  // 2.表单的多次点击提交；
  // 3.计算鼠标移动的距离（mousemove）；
  // 4.Canvas 模拟画板功能（mousemove）；
  // 5.射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）；
  // 6.滚动加载，加载更多的操作； 
  // 防抖
  function _debounce(fn, delay = 500) {
    var timer = null;
    return function () {
      var _this = this;
      var args = arguments;
      if (timer) clearTimeout(timer); 
      timer = setTimeout(function () {
        fn.apply(_this, args);
      }, delay);
    };
  } 
  // 节流
  function _throttle(fn,delay = 1000){
    var lastTime, timer, delay;
    return function(){
      var _this = this;
      var args = arguments;
      var nowTime = Date.now(); 
      if(lastTime && nowTime - lastTime < delay){
        if (timer) clearTimeout(timer); 
        timer = setTimeout(function(){
          lastTime = nowTime;
          fn.apply(_this,args);
        },delay)
      }else{
        lastTime = nowTime;
        fn.apply(_this,args);
      } 
    }
  }   
  export {
    _debounce,
    _throttle,
  } 