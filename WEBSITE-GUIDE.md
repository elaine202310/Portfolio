# 个人网站维护

网站仍是静态 HTML、CSS、JavaScript，不需要 Next.js 或付费 AI 服务才能运行。

## 页面

- index.html：个人首页。
- experience.html：工作经历、技能、教育。
- projects.html：独立项目。
- photography.html：摄影与专题。

每页都可以单独打开、刷新和分享。四页导航是普通链接，没有滚动吸附。

中文页面使用同名的 `.zh.html` 文件，例如 `index.zh.html`。
中文导航直接打开中文 HTML，避免慢网下先闪英文。旧的 `?lang=zh-CN` 链接仍可使用。
修改正文时，请同步英文 HTML 和对应中文 HTML 的首屏文字，以及 site-content.js 中的文案，避免首屏和脚本内容不一致。

## 修改文字

- site-content.js：首页、导航、经历、教育等中英文文案。
- portfolio-data.js：Shopify 案例。
- gallery-data.js：摄影专题、图片路径、照片说明。
- site.css：当前四页共用样式；styles.css 是旧版本遗留，不再加载。
- script.js：切换语言、照片预览等交互，通常不需要修改。

每个字段分行并配有注释。修改双语文案时同时修改 en 和 zh-CN。
HTML 也保留英文正文，供脚本未加载时阅读；重大文案修改时建议同步对应 HTML。

## 添加照片

第一组照片放入 assets/gallery/，命名为：

- new-year-01.jpg
- new-year-02.jpg
- new-year-03.jpg
- new-year-04.jpg
- new-year-05.jpg

文件名和扩展名大小写必须一致。相同文件名替换照片无需修改代码。
没有放入的图片不会显示破损占位框。照片点击可放大，Esc 关闭。
新增专题的完整步骤见 assets/gallery/README.md。
发布活动照片前请确认肖像授权，避免上传包含私密信息的原图。

## 预览与发布

直接打开 index.html 可预览。部署到 Vercel 时使用 Other / 静态站点，
仓库根目录为网站目录，不需要 next build。当前 vercel.json 已设 framework: null。
修改后提交并推送到 GitHub 的 main 分支；如果 Vercel 项目已连接该分支，会按项目设置触发部署。

## 动效

页面进入仅轻微淡入和位移，支持的浏览器使用原生页面过渡。
浏览器不支持时仍正常打开链接；系统“减少动态效果”开启后禁用动画。
