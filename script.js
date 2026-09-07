// 通用交互：文案请编辑 site-content.js，照片请编辑 gallery-data.js。
const translations = window.translations;
const buttons = [...document.querySelectorAll("[data-lang]")];
const metaDescription = document.querySelector('meta[name="description"]');
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

function setMobileMenu(open) {
  mobileMenuToggle.setAttribute("aria-expanded", String(open));
  primaryNav.classList.toggle("is-open", open);
}

function setLanguage(language) {
  language = translations[language] ? language : "en";
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.body.classList.toggle("is-zh", language === "zh-CN");
  document.title = dictionary.profileName + " — " + dictionary[({home: "navProfile", experience: "navExperience", projects: "navProject", photography: "navGallery"})[document.body.dataset.page]];
  metaDescription.content = dictionary.pageDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  renderPortfolio(language);
  renderGallery(language);

  buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  try { localStorage.setItem("preferred-language", language); } catch {}
  document.querySelectorAll("[data-page]").forEach((link) => { if (link.tagName === "A") { const url = new URL(link.href); url.searchParams.set("lang", language); link.href = url.href; } });
}

function renderTags(tags) {
  return `<ul class="tech-list">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;
}

function renderPortfolio(language) {
  const container = document.getElementById("portfolio-list");
  const content = window.portfolioContent?.[language] || window.portfolioContent?.en;
  if (!container || !content) return;
  const project = content.project;
  const deliverables = project.deliverables.map((item) => `<li>${item}</li>`).join("");
  container.innerHTML = `
    <article class="project-case-card">
      <div class="project-heading">
        <h3>${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-meta">${project.meta}</p>
      </div>
      <div class="project-case-summary">
        <p>${project.summary}</p>
        ${renderTags(project.tags)}
      </div>
      <div class="project-deliverables">
        <h4>${content.deliverablesLabel}</h4>
        <ul>${deliverables}</ul>
      </div>
      <p class="project-status">${language === "zh-CN" ? "项目由客户在两个月后暂停，未开展谷歌广告投放。原网站截图未留存，因此这里以文字记录工作过程。" : "The client paused the project after two months. Google Ads were not run. Original site screenshots were not retained, so this case documents the work in text."}</p>
    </article>`;
}

const lightbox = document.getElementById("gallery-lightbox");
const lightboxVisual = document.getElementById("lightbox-visual");
const lightboxBadge = document.getElementById("lightbox-badge");
const lightboxTitle = document.getElementById("lightbox-title");

function galleryVisual(item, index, className) {
  if (item.src) return `<img class="${className}" src="${item.src}" alt="${item.alt}" loading="lazy" />`;
  return `<div class="${className} gallery-placeholder" role="img" aria-label="${item.alt}"><span>${String(index + 1).padStart(2, "0")}</span></div>`;
}

function openGalleryItem(item, index) {
  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt;
  image.className = "lightbox-media";
  lightboxVisual.replaceChildren(image);
  lightboxBadge.textContent = item.category;
  lightboxTitle.textContent = item.caption;
  if (typeof lightbox.showModal === "function") lightbox.showModal();
  else lightbox.setAttribute("open", "");
}

// 切换语言后，忽略上一次尚未完成的图片加载，避免中英文混杂。
let galleryRenderVersion = 0;

// 按当前语言读取专题或照片文案。
function galleryText(value, language) {
  return value?.[language] || value?.en || "";
}

// 摄影区：先创建专题，再把成功加载的照片加入各自专题。
function renderGallery(language) {
  const container = document.getElementById("gallery-grid");
  if (!container) return;
  if (lightbox?.open) lightbox.close();

  const version = ++galleryRenderVersion;
  container.replaceChildren();

  (window.galleryAlbums || []).forEach((album, albumIndex) => {
    const section = document.createElement("section");
    section.className = "gallery-album";

    const title = document.createElement("h3");
    title.id = `gallery-album-${albumIndex}`;
    title.textContent = galleryText(album.title, language);
    section.setAttribute("aria-labelledby", title.id);

    const description = document.createElement("p");
    description.className = "gallery-album-description";
    description.textContent = galleryText(album.description, language);

    const grid = document.createElement("div");
    grid.className = "gallery-grid";

    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = language === "zh-CN"
      ? "照片待更新。"
      : "Photographs will be added soon.";

    grid.append(empty);
    section.append(title, description, grid);
    container.append(section);

    (album.photos || []).forEach((photo, index) => {
      if (!photo.src) return;

      const item = {
        src: photo.src,
        category: title.textContent,
        caption: galleryText(photo.caption, language),
        alt: galleryText(photo.alt, language),
      };

      const image = new Image();
      image.className = "gallery-media";
      image.alt = item.alt;
      image.decoding = "async";

      image.onload = () => {
        if (version !== galleryRenderVersion) return;
        empty.hidden = true;

        const card = document.createElement("article");
        card.className = "gallery-card";
        card.style.order = index;

        const button = document.createElement("button");
        button.className = "gallery-preview";
        button.type = "button";
        button.setAttribute("aria-label",
          `${language === "zh-CN" ? "放大查看：" : "Enlarge: "}${item.alt}`);
        button.append(image);
        button.addEventListener("click", () => openGalleryItem(item, index));

        const caption = document.createElement("p");
        caption.className = "gallery-caption gallery-card-copy";
        caption.textContent = item.caption;

        card.append(button, caption);
        grid.append(card);
      };

      // 文件还没放进目录时，保留专题介绍，隐藏这一张照片的位置。
      image.onerror = () => {};
      image.src = item.src;
    });
  });
}

document.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
mobileMenuToggle.addEventListener("click", () => setMobileMenu(mobileMenuToggle.getAttribute("aria-expanded") !== "true"));
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileMenu(false);
});

let preferred = new URLSearchParams(location.search).get("lang");
try { preferred ||= localStorage.getItem("preferred-language"); } catch {}
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
setLanguage(preferred || browserLanguage);

document.getElementById("year").textContent = new Date().getFullYear();

// 独立页面导航：原生链接支持刷新、后退及直接分享。
primaryNav.querySelectorAll("[data-page]").forEach((link) => {
  if (link.dataset.page === document.body.dataset.page) link.setAttribute("aria-current", "page");
});
