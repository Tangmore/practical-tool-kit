### 1. async 函数

- 在函数声明前加上`async`关键字，该函数就成为一个 async 函数。
- async 函数总是返回一个 Promise 对象。
- 如果函数内返回一个值，该值会被`Promise.resolve()`包装成一个 Promise。
- 如果函数内抛出错误，则返回的 Promise 状态为 rejected，错误为抛出的值。

示例：

```javascript
async function foo() {
  return 123;
}
// 相当于
function foo() {
  return Promise.resolve(123);
}
```

### 2. await 表达式

- `await`只能在 async 函数内部使用。
- `await`后面可以跟一个 Promise 对象（最常见），也可以跟任何其他类型的值。
- 当`await`后面是一个 Promise 时，它会暂停 async 函数的执行，等待 Promise 的状态变为 resolved，然后返回该 Promise 的解决值（resolved value）。
- 如果等待的 Promise 变为 rejected，`await`会抛出拒绝原因（rejected reason），可以通过 try...catch 捕获。

示例：

```javascript
async function bar() {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  console.log(result); // 一秒后输出 'done!'
}
```

### 3. 错误处理

- 由于`await`会抛出 rejected 的 Promise，因此我们通常使用`try...catch`来捕获错误。
- 如果不捕获错误，async 函数返回的 Promise 将会是 rejected 状态，错误会传递到外层。

示例：

```javascript
async function errorTest() {
  try {
    await Promise.reject("出错了");
  } catch (e) {
    console.log(e); // 输出 '出错了'
  }
}
```

### 4. async/await 与 Promise 的关系

- async/await 是 Promise 的语法糖，它并没有脱离 Promise，而是让 Promise 的使用更加方便。
- 每个 async 函数都可以看作是返回 Promise 的普通函数，而 await 则是暂停函数执行并等待 Promise 解决。

### 5. 执行顺序

- async 函数在执行时，一旦遇到`await`就会暂停，将控制权交还给调用者，直到等待的 Promise 解决后，后续的代码才会继续执行（在微任务队列中）。

示例分析：

```javascript
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); // 注意：这里是微任务
  // 等价于
  // const promise = Promise.resolve(async2());
  // promise.then(() => {
  //   console.log("async1 end");
  // });
}
async function async2() {
  console.log("async2");
}

console.log("script start");
async1();
console.log("script end");

// 输出顺序：
// script start
// async1 start
// async2
// script end
// async1 end
```

await 暂停的是函数内后续执行：
await 会暂停当前 async 函数的执行，但不会阻塞函数外部的同步代码
微任务队列机制：
await 之后的代码被放入微任务队列

为什么`async1 end`在`script end`之后？

- 当执行到`await async2()`时，先执行`async2()`（同步输出），然后`await`会暂停`async1`，将后面的代码`console.log('async1 end')`放入微任务队列，然后跳出 async1 函数，继续执行同步代码（输出'script end'）。同步代码执行完后，执行微任务队列，输出'async1 end'。

### 6. 使用注意点

- **避免不必要的 await**：如果不需要等待，就不要用 await，否则会降低代码执行效率。
- **避免在循环中顺序等待**：如果多个异步操作没有依赖关系，应该使用`Promise.all`来并行执行，而不是在循环中顺序等待。

错误示例（顺序执行）：

```javascript
async function fetchAll() {
  const res1 = await fetch(url1);
  const res2 = await fetch(url2); // 等待res1完成才开始
  // ...
}
```

正确做法（并行）：

```javascript
async function fetchAll() {
  const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
  // ...
}
```

### 7. 顶层 await

- 在 ES2022 中，允许在模块的顶层使用 await，这样模块会等待异步操作完成后再执行导入该模块的代码。
- 注意：只能在模块（ESM）中使用，不能在普通脚本中使用。

示例（模块）：

```javascript
// module.mjs
const response = await fetch("https://example.com");
export const data = await response.json();
```

### 8. async 函数中的 return

- 在 async 函数中，return 的值会被自动包装成 Promise.resolve()，但是如果 return 的是一个 Promise，则不会再次包装。
- 在 async 函数中，如果 return await 一个 Promise，其实没有额外的好处，因为 async 函数已经自动包装了。不过，如果在 try...catch 中，使用 return await 可以捕获到该 Promise 的 reject。

### 9. 与 Promise 的对比

使用 Promise：

```javascript
function fetchData() {
  return fetch("url")
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then((data) => data);
}
```

使用 async/await：

```javascript
async function fetchData() {
  const response = await fetch("url");
  if (!response.ok) throw new Error("Network error");
  return response.json();
}
```

### 10. 实现原理

async/await 的实现原理是利用生成器（Generator）和自动执行器（如 co 库）。实际上，我们可以将 async/await 看作是 Generator 函数的语法糖。

以下是一个简化的转换示例（实际原理）：

```javascript
// async函数
async function example() {
  await a();
  await b();
}

// 转换为生成器函数
function* exampleGenerator() {
  yield a();
  yield b();
}

// 然后使用自动执行器来管理生成器的执行
```

### 总结

async/await 是异步编程的重大改进，它使得异步代码的编写和阅读更接近于同步代码，同时保持了非阻塞的特性。

```
