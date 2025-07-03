---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Lazyeat"
  text: "无接触手势控制"
  tagline: 吃饭时看剧/刷网页不想沾油手？对着摄像头比划手势就能暂停视频/全屏/切换视频！
  image:
    src: /lazyeat.png
    alt: Lazyeat
  actions:
    - theme: brand
      text: 下载
      link: /pages/download
    - theme: alt
      text: GitHub
      link: https://github.com/lanxiuyun/lazyeat

features:
  - icon: 🖐️
    title: 手势控制
    details: 单指滑动控制光标，双指/Rock 执行鼠标单击，ok 手势控制页面滚动，四指并拢发送按键
  - icon: 🎤
    title: 语音输入
    details: 支持语音识别，让您在不方便使用手势时也能轻松控制
  - icon: 💻
    title: 跨平台支持
    details: 支持 Windows 和 Mac 系统，Linux、Android 和 iOS 版本正在开发中
  - icon: 🔒
    title: 隐私保护
    details: 所有数据处理都在本地完成，无需联网，保护您的隐私安全
---

<div class="section-title">
  <h1>功能展示</h1>
</div>
<div class="rw-features">
  <div class="rw-card">
    <h2>Demo演示</h2>
    <div class="rw-desc">
      通过AI识别手势，控制页面滚动、视频播放、鼠标点击等操作。
    </div>
    <img src="/demo.gif" alt="demo演示" />
  </div>
  <div class="rw-card">
    <h2>快捷操作</h2>
    <div class="rw-desc">
四指并拢发送按键，双指/Rock
        执行鼠标单击，OK手势控制页面滚动。    
        </div>
    <img src="/shortcut.png" alt="快捷操作" />
  </div>
</div>

<style>
.section-title {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.section-title h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.rw-features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.rw-card {
  background: linear-gradient(135deg, #f6f6f7 60%, #e9f0ff 100%);
  border-radius: 18px;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 480px;
}
.rw-card:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.rw-card h2 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  padding: 0;
  text-decoration: none !important;
  border: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
}
.rw-desc {
  color: #555;
  margin-bottom: 1.5rem;
  min-height: 48px;
}
.rw-card img {
  max-width: 100%;
  max-height: 350px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  object-fit: contain;
}
@media (max-width: 900px) {
  .rw-features {
    flex-direction: column;
    align-items: center;
  }
  .rw-card {
    width: 90%;
    margin-bottom: 2rem;
  }
}
</style>
