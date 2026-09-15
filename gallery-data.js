/**
 * 摄影专题：src 为图片路径，注意大小写。
 * en / zh-CN 分别编辑中英文；替换同名照片无需改代码。
 * 新增照片请复制 photos 中的一项；新增专题请复制完整对象。
 */
window.galleryAlbums = [
  {
    id: "community-culture",
    title: { en: "Community & Culture", "zh-CN": "社区文化活动" },
    description: {
      en: "Chengdu · December 2025\nPhotography by Jiao Hu",
      "zh-CN": "成都 · 2025 年 12 月\n摄影：胡娇",
    },
    photos: [
      {
        // 演奏场景作为首图。
        src: "assets/gallery/DSC08027.JPG",
        caption: { en: "Live music, shared rhythms.", "zh-CN": "现场演奏，共同的节奏。" },
        alt: {
          en: "Four performers playing percussion, violin, and a wind instrument at a cultural event.",
          "zh-CN": "四位表演者在文化活动中演奏打击乐、小提琴和管乐器。",
        },
      },
      {
        src: "assets/gallery/DSC07995.JPG",
        caption: { en: "Faces in the crowd.", "zh-CN": "观众席上的瞬间。" },
        alt: {
          en: "Seated guests reacting to the event, with one attendee raising a phone to capture the moment.",
          "zh-CN": "观众席上的来宾观看活动，一位来宾举起手机记录现场。",
        },
      },
      {
        src: "assets/gallery/DSC08051.JPG",
        caption: { en: "A moment together.", "zh-CN": "为相聚留影。" },
        alt: {
          en: "Participants gathered for a group photograph at the Tongzilin Lingo Legends Cultural Hub event.",
          "zh-CN": "参与者在桐梓林国际文化汇活动背景板前合影。",
        },
      },
    ],
  },
];
