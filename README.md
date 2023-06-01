## 项目初始化

yarn create react-app one_second --template typescript

## 配置 craco

Install the latest version of the package from npm as a dev dependency:
安装最新版本的 craco 为项目的开发依赖

```bash
npm i @craco/craco -D
# or
yarn add @craco/craco -D
```

Create a CRACO configuration file in your project's root directory and configure:

```bash
my-app
├── node_modules

- ├── craco.config.js
  └── package.json
```

Update the existing calls to react-scripts in the scripts section of your package.json to use the craco CLI:
在 package.json 中修改已经存在的 script 脚本配置以使用 craco CLI 如下

```json
package.json
"scripts": {

- "start": "react-scripts start"

* "start": "craco start"

- "build": "react-scripts build"

* "build": "craco build"

- "test": "react-scripts test"

* "test": "craco test"
  }
```

You can now start or build your app like normal:
现在你可以正常使用 start、build 命令如下

```bash
npm start

npm run build
```

常见的 craco 的配置项

```bash
module.exports = {
  devServer:{
    /* ... */
  }
  // ...
  webpack: {
    alias: { /* ... */ },
    plugins: {
      add: [ /* ... */ ],
      remove: [ /* ... */ ],
    },
    configure: { /* ... */},
    configure: (webpackConfig, { env, paths }) => {
      /* ... */
      return webpackConfig;
    },
  },
};
```

### 配置环境变量

安装最新版本的
yarn add cross-env

```bash
npm i cross-env -D
# or
yarn add cross-env -D
```

在 package.json 中修改已经存在的 script 脚本配置以使用 craco CLI,如下

```json
//package.json
"scripts": {
- "start": "react-scripts start"
+ "start": "cross-env NODE_ENV=development craco start"
+ "build": "cross-env NODE_ENV=production craco build",
- "build": "craco build"
  }
```

## 配置 tailwindcss

安装 tailwindcss CSS
通过 npm/yarn 安装然后执行 init 命令来生成 tailwindcss。config.js 文件

```bash
yarn add -D tailwindcss
npx tailwindcss init
```

配置你的模板路径
在 tailwindcss.config.js 文件配置中添加你所有的模板文件路径

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

在项目的全局`./src/index.css`文件中添加`Tailwindcss`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 安装

使用 npm 或 yarn 安装

```bash
$ npm install antd --save
$ yarn add antd
```

示例

```js
import React from "react";
import { DatePicker } from "antd";
//默认支持按需加载样式
const App = () => {
  return <DatePicker />;
};
```

export default App;

按需加载
antd 默认支持基于 ES modules 的 tree shaking。

TypeScript
antd 使用 TypeScript 进行书写并提供了完整的定义文件。（不要引用 @types/antd）。

# 安装

样式冲突

```bash
npm install --save @ant-design/icons
yarn add @ant-design/cssinjs

```
