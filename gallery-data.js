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
      en: "Photographs I took at a community cultural event — live music, conversations, and a shared moment together.",
      "zh-CN": "我拍摄的一组社区文化活动照片：现场演奏、交流与相聚的瞬间。",
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
        src: "assets/gallery/DSC07964.JPG",
        caption: { en: "Conversations between moments.", "zh-CN": "活动间隙的交流。" },
        alt: {
          en: "Guests talking around tables beneath a wall sign reading Communicate with the world.",
          "zh-CN": "来宾围桌交流，身后墙上写着让成都和世界沟通。",
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
