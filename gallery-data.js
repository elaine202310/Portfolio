/**
 * 摄影内容编辑区：以后新增专题、照片，只需要修改这个文件。
 *
 * 每个 { ... } 是一个专题，专题之间用逗号分隔。
 * title：专题标题；description：专题介绍；photos：照片列表。
 * en 是英文，zh-CN 是中文。照片路径只写一次，两种语言共用。
 * 没放照片的专题会显示“照片待更新”，不会出现空白图片框。
 *
 * 新增专题：
 * 1. 复制下面完整的专题对象，放在数组最后一个对象之后，记得加逗号。
 * 2. 修改 id（不能重复）、标题、介绍。
 * 3. 在 assets/gallery 下建立自己的专题文件夹，如 portraits。
 * 4. 照片路径写成 assets/gallery/portraits/01.jpg。
 *
 * 新增照片：复制 photos 里面的一条照片对象，修改 src 和说明即可。
 * caption 是照片下方的文字；alt 是图片无法显示或屏幕阅读器使用的描述。
 */
window.galleryAlbums = [
  {
    // 专题 1：跨年活动。保留之前约定的照片文件名。
    id: "new-year",

    title: {
      en: "New Year’s Eve Event",
      "zh-CN": "跨年活动",
    },

    description: {
      en: "A record of a New Year’s Eve event I helped photograph.",
      "zh-CN": "一次跨年活动的现场记录，我参与了当天的摄影。",
    },

    photos: [
      {
        // 第 1 张照片：把 JPEG 文件放到下面这个路径。
        src: "assets/gallery/new-year-01.jpg",
        caption: {
          en: "New Year’s Eve event · 1",
          "zh-CN": "跨年活动记录 · 1",
        },
        alt: {
          en: "Photograph 1 from the New Year’s Eve event",
          "zh-CN": "跨年活动现场照片 1",
        },
      },
      {
        src: "assets/gallery/new-year-02.jpg",
        caption: {
          en: "New Year’s Eve event · 2",
          "zh-CN": "跨年活动记录 · 2",
        },
        alt: {
          en: "Photograph 2 from the New Year’s Eve event",
          "zh-CN": "跨年活动现场照片 2",
        },
      },
      {
        src: "assets/gallery/new-year-03.jpg",
        caption: {
          en: "New Year’s Eve event · 3",
          "zh-CN": "跨年活动记录 · 3",
        },
        alt: {
          en: "Photograph 3 from the New Year’s Eve event",
          "zh-CN": "跨年活动现场照片 3",
        },
      },
      {
        src: "assets/gallery/new-year-04.jpg",
        caption: {
          en: "New Year’s Eve event · 4",
          "zh-CN": "跨年活动记录 · 4",
        },
        alt: {
          en: "Photograph 4 from the New Year’s Eve event",
          "zh-CN": "跨年活动现场照片 4",
        },
      },
      {
        src: "assets/gallery/new-year-05.jpg",
        caption: {
          en: "New Year’s Eve event · 5",
          "zh-CN": "跨年活动记录 · 5",
        },
        alt: {
          en: "Photograph 5 from the New Year’s Eve event",
          "zh-CN": "跨年活动现场照片 5",
        },
      },
    ],
  },
  // 新专题从这里继续添加，不需要修改网页布局或交互代码。
];
