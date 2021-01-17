## 初始化项目

```bash
npm init next-app movie-demo-next

# 安装chakra
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

# 安装主题
npm i @chakra-ui/theme

# 安装字体图标
npm install react-icons --save

# 安装 babel
npm install @babel/core

# emotion 预警
npm install @emotion/babel-preset-css-prop

# 运行
npm run dev
```
- [chakra-ui](https://chakra-ui.com/docs/getting-started)
- [chakra 使用说明](https://www.yuque.com/mangguotuanzi/aybubb/dtf773#pQXhF)
- [react-icons](http://react-icons.github.io/react-icons/)

## 导出静态网站
配置脚本： "export": "next build && next export"
```bash
npm run export
```
将输出的out文件夹内容，放置到服务器下

## 自定义Next应用服务器
创建 server 文件夹
安装express： npm i express nodemon
创建服务器入口index.js
```javascript
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handler = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()
	server.get('/hello', (req, res) => {
		res.send('Hello Next.js')
	})
	server.get('*', (req, res) => {
		handler(req, res)
	})
	server.listen(3000, () => console.log('服务器启动成功'))
})
```

修改启动脚本：
"dev": "nodemon server/index.js"

## 部署到 vercel 平台