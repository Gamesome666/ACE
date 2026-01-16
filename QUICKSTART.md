# 快速启动指南

## 第一步：安装Node.js

如果还没有安装Node.js，请访问 https://nodejs.org/ 下载并安装（推荐LTS版本）

## 第二步：安装项目依赖

在项目根目录打开命令行，运行：

```bash
npm install
```

## 第三步：启动开发服务器

```bash
npm run dev
```

看到类似以下输出表示启动成功：

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
➜  Network: http://192.168.x.x:3000/
```

## 第四步：在浏览器中访问

打开浏览器，访问 http://localhost:3000

## 项目结构说明

```
ACE2/
├── src/                      # 源代码目录
│   ├── components/          # Vue组件
│   ├── assets/              # 样式文件
│   ├── App.vue              # 根组件
│   └── main.js              # 入口文件
├── public/                   # 静态资源（可选）
├── images/                   # 图片资源
├── applicationCaseImages/    # 应用案例图片
├── 第一类产品images/         # 产品图片
├── logo.png                  # Logo
├── youtubeQr.png            # YouTube二维码
├── CorporateCulture.png     # 企业文化图片
├── index-vue.html           # HTML模板
├── vite.config.js           # Vite配置
├── package.json             # 项目配置
└── README-VUE.md            # 详细文档
```

## 常见问题

### Q: 运行npm install时报错？
A: 尝试清除缓存：`npm cache clean --force`，然后重新运行 `npm install`

### Q: 图片不显示？
A: 确保所有图片文件都在正确的位置，路径与代码中的引用一致

### Q: 端口3000被占用？
A: 修改 `vite.config.js` 中的端口号，或者关闭占用3000端口的程序

### Q: 如何修改内容？
A: 编辑 `src/components/` 目录下的对应Vue组件文件

## 下一步

- 查看 `README-VUE.md` 了解详细功能说明
- 修改组件内容以适应您的需求
- 准备好所有图片资源
- 运行 `npm run build` 构建生产版本

## 联系方式

如有问题，请联系：
- Email: info@ace-hkltd.com
- Tel: +852 6711 3894
