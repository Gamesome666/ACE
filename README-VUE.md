# ACE Electrical Limited - Vue 3 Website

这是ACE Electrical Limited的官方网站，使用Vue 3 + Vite构建的现代化单页应用。

## 功能特点

- ✅ Vue 3 Composition API
- ✅ 响应式设计，支持PC端和移动端
- ✅ 组件化开发
- ✅ 轮播图展示
- ✅ 产品展示模块（带详情弹窗）
- ✅ 应用案例展示（带图片灯箱）
- ✅ 关于我们模块
- ✅ 新闻资讯模块
- ✅ 企业文化展示
- ✅ 联系我们模块
- ✅ 社交媒体链接（Instagram、Facebook、YouTube）
- ✅ 底部留言表单
- ✅ 返回顶部功能
- ✅ 平滑滚动导航

## 项目结构

```
├── public/                    # 静态资源
├── src/
│   ├── assets/
│   │   └── style.css         # 全局样式
│   ├── components/           # Vue组件
│   │   ├── Header.vue        # 头部导航
│   │   ├── Banner.vue        # 轮播图
│   │   ├── Advantage.vue     # 优势展示
│   │   ├── Products.vue      # 产品展示
│   │   ├── ApplicationCase.vue # 应用案例
│   │   ├── AboutUs.vue       # 关于我们
│   │   ├── News.vue          # 新闻资讯
│   │   ├── MessageUs.vue     # 留言板块（企业文化+联系方式）
│   │   ├── Footer.vue        # 页脚
│   │   ├── MobileFooter.vue  # 移动端底部导航
│   │   ├── MessageForm.vue   # 留言表单
│   │   ├── SocialMedia.vue   # 社交媒体悬浮框
│   │   └── ScrollTop.vue     # 返回顶部
│   ├── App.vue               # 根组件
│   └── main.js               # 入口文件
├── index-vue.html            # HTML模板
├── vite.config.js            # Vite配置
├── package.json              # 项目依赖
└── README-VUE.md            # 项目说明

```

## 安装依赖

```bash
npm install
```

注意：项目使用了Vue Router 4，会自动安装。

## 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

## 生产构建

```bash
npm run build
```

构建后的文件在 `dist` 目录

## 预览生产构建

```bash
npm run preview
```

## 需要准备的资源文件

请确保以下文件存在于项目根目录或public文件夹：

### 图片文件

1. **Logo和二维码**
   - `/logo.png` - 公司Logo
   - `/youtubeQr.png` - YouTube二维码
   - `/CorporateCulture.png` - 企业文化图片

2. **轮播图**
   - `/images/banner1.jpg`
   - `/images/banner2.jpg`

3. **优势图标**
   - `/images/icon1.png`
   - `/images/icon2.png`
   - `/images/icon3.png`

4. **产品图片**
   - `/第一类产品images/product1.png` - ACE-Q21
   - `/第一类产品images/product2.png` - ACE-Q50
   - `/第一类产品images/product3.png` - ACE-Q39K
   - `/第一类产品images/product4.png` - ACE040
   - `/第一类产品images/product5.png` - ACE5
   - `/第一类产品images/product6.png` - ACE10

5. **应用案例图片**
   - `/applicationCaseImages/image.png`
   - `/applicationCaseImages/image copy.png`
   - `/applicationCaseImages/image copy 2.png`
   - `/applicationCaseImages/image copy 3.png`
   - `/applicationCaseImages/image copy 4.png`
   - `/applicationCaseImages/image copy 5.png`
   - `/applicationCaseImages/image copy 6.png`

6. **新闻图片**
   - `/images/news1.jpg`
   - `/images/news2.jpg`
   - `/images/news3.jpg`

7. **关于我们背景**
   - `/images/about-bg.jpg`

## 主要功能说明

### 1. 导航菜单
- 响应式导航栏
- 平滑滚动到对应区块
- 移动端汉堡菜单

### 2. 产品展示
- 产品卡片展示
- 点击查看详细信息（弹窗）
- 产品特性列表展示

### 3. 应用案例
- 图片网格展示
- 点击放大查看（灯箱效果）
- 左右切换浏览

### 4. 留言板块（Message Us）
包含两个子模块：
- **企业文化**：展示公司愿景、价值观、使命
- **联系我们**：完整的联系信息和社交媒体链接

### 5. 社交媒体
- Instagram: https://www.instagram.com/cjhronald
- Facebook: https://www.facebook.com/share/1BXR4LC6Zy/
- YouTube: https://youtube.com/@aceelectricallimited

### 6. 联系方式
- Email: info@ace-hkltd.com
- Tel: +852 6711 3894
- WhatsApp: +852 6711 3894
- Website: www.ace-hkltd.com
- Address: Room 304C, Join-in Hang Sang Centre, 2-16 Kwai Fung Crescent, Kwai Chung, Hong Kong

## 技术栈

- Vue 3 - 渐进式JavaScript框架
- Vue Router 4 - 官方路由管理器
- Vite - 下一代前端构建工具
- Bootstrap 3 - CSS框架（通过CDN）
- Font Awesome 4 - 图标库（通过CDN）

## 页面路由

- `/` - 首页（Home）
- `/about` - 关于我们详细页面
- `/application-cases` - 应用案例页面

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 现代移动浏览器

## 自定义修改

### 修改颜色主题

在 `src/assets/style.css` 中修改以下颜色：
- 主色调：#3498db
- 深色背景：#2c3e50
- 浅色背景：#f8f9fa

### 修改产品信息

编辑 `src/components/Products.vue` 中的 `products` 数组

### 修改应用案例

编辑 `src/components/ApplicationCase.vue` 中的 `cases` 数组

### 修改新闻内容

编辑 `src/components/News.vue` 中的 `newsList` 数组

## 部署

### 部署到静态服务器

1. 运行构建命令：`npm run build`
2. 将 `dist` 目录上传到服务器
3. 配置服务器指向 `index.html`

### 部署到Netlify/Vercel

1. 连接GitHub仓库
2. 设置构建命令：`npm run build`
3. 设置发布目录：`dist`
4. 自动部署

## 许可说明

Copyright © 2008-2025 ACE Electrical Limited. All Rights Reserved.
