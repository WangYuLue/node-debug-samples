## node 调试例子

### 1、调试原生 node

参考 `demo01`, 用 `debug01` 启动调试

```json
{
  "type": "node",
  "request": "launch",
  "name": "debug-01",
  "program": "${workspaceFolder}/demo01/index.js",
}
```

### 2、调试原生 node 服务

以 `express` 为例：

参考 `demo02`, 用 `debug02` 启动调试

```json
{
  "type": "node",
  "request": "launch",
  "name": "debug-02",
  "program": "${workspaceFolder}/demo02/index.js",
}
```

### 3、调试已启动的 node 服务

以 `express` 为例：

参考 `demo02`, 先用 `node index.js` 启动服务, 再用 `debug02.1` 开始调试

```json
{
  "type": "node",
  "request": "attach",
  "name": "debug-02.1",
  "processId": "${command:PickProcess}"
}
```

参考链接：

[VSCode 调试中 launch.json 配置不完全指南：调试已启动的 Node.js 程序](https://www.barretlee.com/blog/2019/03/18/debugging-in-vscode-tutorial/)

### 4、过滤不想调试的文件

参考 `demo03`, 用 `debug03` 启动调试

```json
{
  "type": "node",
  "request": "launch",
  "name": "debug-03",
  "program": "${workspaceFolder}/demo03/index.js",
  "skipFiles": [
    // 跳过 js 内部代码
    "<node_internals>/**",
    // 跳过指定文件代码
    "${workspaceFolder}/demo03/util.js"
  ],
}
```

参考链接：

[VS Code: Skipping uninteresting code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_skipping-uninteresting-code-node-chrome)

### 5、调试 typescript

参考 `demo04`, 用 `debug04` 启动调试

#### (1)、第一步：编写 tsconfig.json 文件

`tsc` 编译时会用到 `tsconfig.json` 配置文件

```json
{
  // 编译配置项
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    // 输出文件夹
    "outDir": "out",
    // 编译生成 map 文件，这个配置对调试至关重要
    "sourceMap": true
  },
  // 需要编译的文件
  "files": [
    "./index.ts"
  ]
}
```

#### (2)、第二步：编写 launch.json 文件

```json
{
  "type": "node",
  "request": "launch",
  "name": "debug-04",
  "preLaunchTask": "build-demo04",
  "program": "${workspaceFolder}/demo04/index.ts",
  "outFiles": [
    "${workspaceFolder}/demo04/out/**/*.js"
  ],
}
```

注意这里新的配置参数 `preLaunchTask`，他表示在调试之前需要执行的任务，这个需要在 `tasks.json` 中编写，下面会讲到；

#### (3)、第三步：编写 tasks.json 文件

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build-demo04",
      "type": "shell",
      "command": "cd demo04 && tsc"
    }
  ]
}
```

`task` 详细用法参考[官方文档](https://code.visualstudio.com/docs/editor/tasks)

> 注意 `demo04` 中的 `package.json`, 它虽然是个空文件，但是是比不可少的，因为项目根目录的 `package.json` 采用了 `"type": "module"` 模式，调试会受此影响，所以用一个空的 `package.json` 来隔绝这个影响

### 6、调试 typescript 服务

参考 `demo05`, 用 `debug05` 启动调试

### 7、typescript 动态更新

参考 `demo06`, 借助 `nodemon` 的能力；这里写了 `nodemon.json` 配置文件，直接在 demo 目录下运行 `nodemon` 命令即可运行；

参考链接：

[StackOverFlow: How to watch and reload ts-node when TypeScript files change](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)

### 8、调试远程前端项目

<!-- todo -->

### 9、调试 react + typescript 前端项目

<!-- todo -->