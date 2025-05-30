<template>
  <div class="demo-showcase">
    <div class="demo-image">
      <img src="/demo.gif" alt="演示动画" />
    </div>
    <div class="demo-content">
      <h3>无接触手势控制</h3>
      <p>通过AI识别手势，控制页面滚动、视频播放、鼠标点击等操作。</p>
      <!-- 可根据需要添加更多内容，如按钮、链接等 -->
    </div>
  </div>
</template>

<script setup>
// 无需逻辑，仅展示用
</script>

<style scoped>
.demo-showcase {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;
}
.demo-image img {
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  background: #fff;
}
.demo-content {
  max-width: 420px;
}
.demo-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.demo-content p {
  font-size: 1.1rem;
  color: #444;
}
@media (max-width: 900px) {
  .demo-showcase {
    flex-direction: column;
    gap: 2rem;
  }
  .demo-content,
  .demo-image img {
    max-width: 100%;
  }
}
</style>
