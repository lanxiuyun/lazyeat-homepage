<template>
  <div class="shortcut-showcase">
    <div class="shortcut-image">
      <img src="/shortcut.png" alt="快捷键说明" />
    </div>
    <div class="shortcut-content">
      <h3>快捷操作</h3>
      <p>
        支持一些常用的快捷操作，如：四指并拢发送按键，单指滑动控制光标，双指/Rock
        执行鼠标单击，ok 手势控制页面滚动。
      </p>
    </div>
  </div>
</template>

<script setup>
// 无需逻辑，仅展示用
</script>

<style scoped>
.shortcut-showcase {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;
}

.shortcut-image img {
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  background: #fff;
}

.shortcut-content {
  max-width: 420px;
}

.demo-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.shortcut-content p {
  font-size: 1.1rem;
  color: #444;
}

@media (max-width: 900px) {
  .shortcut-showcase {
    flex-direction: column;
    gap: 2rem;
  }
  .shortcut-content,
  .shortcut-image img {
    max-width: 100%;
  }
}
</style>
