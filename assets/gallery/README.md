# 添加摄影照片

把真正的 JPEG 照片放到本文件所在的 assets/gallery 文件夹，使用以下名称：

- new-year-01.jpg
- new-year-02.jpg
- new-year-03.jpg
- new-year-04.jpg
- new-year-05.jpg

可以只放 1–3 张，不必放满。没有对应文件的照片位置不会显示。
刷新网页后即可看到照片；中英文共用这些文件，不需要改两遍代码。
照片支持点击放大。网格按 4:3 裁切，放大预览显示完整照片。

建议导出为 JPEG，长边约 1600–2000 像素，每张尽量小于 500KB。
请从照片软件“导出为 JPEG”，不要直接把 HEIC/PNG 的扩展名改为 jpg。
用新照片覆盖同名文件即可替换。若浏览器还显示旧图，强制刷新。

## 新增摄影小专题

摄影区支持任意数量的小专题。只编辑根目录的 gallery-data.js。
每个专题包含 id、title、description、photos，文件中已有逐行中文注释。

1. 复制跨年专题的完整对象（从 id 外侧的左大括号到 photos 后的右大括号）。
2. 粘贴到下一个专题位置，在两个专题对象之间保留逗号。
3. 把 id 改成独一无二的英文名称，例如 portraits。
4. 修改 title 和 description 中的中英文文字。
5. 建立 assets/gallery/portraits 文件夹，把照片放进去。
6. photos 中每条 src 写成 assets/gallery/portraits/01.jpg 等实际路径。
7. 修改每张照片的 caption（显示说明）和 alt（图片描述）。

专题和照片会按文件中排列的顺序显示。每个专题可以有任意数量照片。
未放照片的专题只显示标题、介绍和“照片待更新”，不会显示空白卡片。
两种语言共用同一个 src，不需要复制两份照片。

### 可复制的新专题模板

把下面对象复制到 gallery-data.js 的 galleryAlbums 数组内，
放在现有专题对象后面。先在前一个对象结尾加逗号。

```js
{
  // 专题名称可自行更改，不要与其他专题重复。
  id: "portraits",

  title: {
    en: "Portraits",
    "zh-CN": "人像",
  },

  description: {
    en: "Write your introduction here.",
    "zh-CN": "在这里写这个专题的介绍。",
  },

  photos: [
    {
      src: "assets/gallery/portraits/01.jpg",

      caption: {
        en: "Write a caption here.",
        "zh-CN": "在这里写照片说明。",
      },

      alt: {
        en: "Describe what is visible in the photograph.",
        "zh-CN": "简短描述照片里的实际画面。",
      },
    },
  ],
},
```

本地放入文件不会自动更新线上网站。需要把照片提交并推送到实际部署分支，
等托管平台部署完成后，线上访客才能看到更新。
