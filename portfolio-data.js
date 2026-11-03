/**
 * 项目经历内容：英文和中文分别编辑。
 * 摄影专题已独立放到 gallery-data.js，不需要在这里添加照片。
 */
window.portfolioContent = {
  en: {
    deliverablesLabel: "Key deliverables",
    projects: [
      {
        title: "BroadView Daily",
        type: "Web project",
        workType: "Personal project",
        date: "Oct 2026",
        url: "https://broadview-daily.vercel.app/",
        linkLabel: "Visit website",
        linkDescription: "Visit BroadView Daily (opens in a new tab)",
        summary: "A personal web project exploring how daily content can be presented through a clear, readable interface.",
        tags: ["Web development", "Content presentation", "Vercel"],
        deliverables: [
          "Designed and built the website interface.",
          "Organised the site structure and content presentation.",
          "Deployed the project online for public access."
        ]
      },
      {
        title: "Collectibles Authentication Mini Program & Admin Portal",
        type: "Front-end application",
        workType: "Team project",
        date: "May 2025 — Aug 2025",
        summary: "A team-built mini program and administration portal for a collectibles authentication workflow.",
        tags: ["Vue", "JavaScript", "API integration", "Zion"],
        deliverables: [
          "Implemented front-end screens and workflow-status interactions for the mini program and admin portal.",
          "Integrated the interface with backend APIs supplied by the team.",
          "Used Vue, JavaScript, HBuilderX, and Zion visual tools in an iterative delivery workflow.",
          "Participated in code checks, demonstrations, and feedback-driven revisions."
        ]
      },
      {
        title: "Smart Job — Recruitment Data Analysis & Job Matching Platform",
        type: "Data application",
        workType: "University project",
        date: "2025",
        summary: "A data-driven recruitment platform combining job collection, structured storage, visual analysis, and rule-based matching.",
        tags: ["Python", "Flask", "MySQL", "ECharts"],
        deliverables: [
          "Collected and processed recruitment data with Selenium and BeautifulSoup.",
          "Built Flask routes and MySQL-backed data workflows for the platform.",
          "Presented recruitment trends through ECharts visualisations.",
          "Implemented rule-based matching to connect job requirements with candidate profiles."
        ]
      }
    ]
  },
  "zh-CN": {
    deliverablesLabel: "主要工作",
    projects: [
      {
        title: "BroadView Daily",
        type: "网站项目",
        workType: "个人项目",
        date: "2026 年 10 月",
        url: "https://broadview-daily.vercel.app/",
        linkLabel: "访问网站",
        linkDescription: "访问 BroadView Daily（在新标签页打开）",
        summary: "一个个人网站项目，探索如何用清晰、易读的界面呈现日常内容。",
        tags: ["网站开发", "内容呈现", "Vercel"],
        deliverables: [
          "设计并搭建网站界面。",
          "整理网站结构与内容呈现方式。",
          "将项目部署到线上，供公众访问。"
        ]
      },
      {
        title: "收藏品鉴定小程序与管理后台",
        type: "前端应用",
        workType: "团队项目",
        date: "2025 年 5 月 — 8 月",
        summary: "一个围绕收藏品鉴定流程搭建的小程序与管理后台团队项目。",
        tags: ["Vue", "JavaScript", "API 对接", "Zion"],
        deliverables: [
          "为小程序和管理后台实现前端页面及鉴定流程状态交互。",
          "对接团队提供的后端 API，完成前后端数据联动。",
          "使用 Vue、JavaScript、HBuilderX 和 Zion 可视化工具参与迭代开发。",
          "参与代码检查、产品演示和基于反馈的修改。"
        ]
      },
      {
        title: "Smart Job — 招聘数据分析与岗位匹配平台",
        type: "数据应用",
        workType: "课程项目",
        date: "2025 年",
        summary: "一个结合招聘数据采集、结构化存储、可视化分析与规则匹配的平台。",
        tags: ["Python", "Flask", "MySQL", "ECharts"],
        deliverables: [
          "使用 Selenium 和 BeautifulSoup 采集并处理招聘数据。",
          "使用 Flask 和 MySQL 搭建平台路由与数据流程。",
          "通过 ECharts 可视化呈现招聘趋势。",
          "实现基于规则的岗位要求与候选人画像匹配。"
        ]
      }
    ]
  }
};
