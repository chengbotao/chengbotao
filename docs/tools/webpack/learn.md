**Q: 优化打包速度**

1. dll 优化
   > webpack.dll.config.js  
   > 第三方包一般不会改变,但 webpack 每次打包都会处理第三方包, 所以我们先处理第三方包,然后再打包

```js
// webpack.dll.config.js
const webpack = require("webpack");
module.exports = {
  entry: {
    // vendor 为第三方库的集合
    vendor: ["jquery"],
  },
  output: {
    path: __dirname + "/dll",
    filename: "[name].dll.js",
    library: "[name]_library",
  },
  plugins: [
    new webpack.DllPlugin({
      path: __dirname + "/dll/[name]-manifest.json",
      name: "[name]_library",
    }),
  ],
};

// webpack.config.js
// ...
module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DllReferencePlugin({
      // require 的是 webpack.dll.config.js 输出的json文件
      mainfest: require("./dll/vendor-manifest.json"),
    }),
  ],
};
```

2. Happypack
   > js 单线程,node 是可以开 webWork
   > 利用 node 的 webWork 多线程处理文件

```js
// webpack.config.js
const Happypack = require("happypack");
// 开启多个线程池 根据cpu数量
const happyPackThreadPool = Happypack.ThreadPool({
  // 通过node的os模块获取cpu的数量
  szie: os.cpu().length,
});
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        // 使用单个loader
        // loader: "babel-loader",
        // 使用 Happypack 单独处理babel-loader
        loader: "Happypack?loader='babel-loader'",
        // 使用多个loader
        /*use: [
            {
              loader: "babel-loader"
            }
          ]*/
      },
    ],
  },
  plugins: [
    new Happupack({
      id: "babel-loader",
      threadPool: happyPackThreadPool,
    }),
  ],
};
```

**Q: webpack 中 plugin 跟 loader 应用场景**

1. 对模块内容进行处理
   > 优先使用 loader  
   > loader 对某一类型的文件进行处理,一个文件相等于一个模块

```js
// myloader.js
module.exports = function (content) {
  // 做处理
};
```

2. 增加特殊的功能
   > 自定义插件(plugin)

```js
function A() {}
A.prototype.apply = function (compiler) {
  // 在 apply 对打包的某个周期进行监听
  // done、emit,...
  compiler.hooks.done.tap("dist", function (compilation) {
    // dist 目录已经生成
    // 做处理
  });
};
```
