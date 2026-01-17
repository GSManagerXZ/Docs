<template>
  <div class="ai-assistant">
    <!-- AI助手按钮 -->
    <div 
      class="ai-assistant-button" 
      @click="toggleChat"
      :class="{ 'active': isOpen }"
    >
      <svg
        v-if="!isOpen"
        class="ai-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- 现代化AI聊天机器人图标 -->
        <path
          d="M17.5 12C17.5 7.31 13.69 3.5 9 3.5S0.5 7.31 0.5 12C0.5 14.11 1.32 16.04 2.65 17.5L1 22L5.5 20.35C6.96 20.68 8.47 20.5 9 20.5C13.69 20.5 17.5 16.69 17.5 12Z"
          transform="translate(3, 1)"
          fill="currentColor"
        />
        <!-- 眼睛 -->
        <circle cx="8.5" cy="9.5" r="1.5" fill="white"/>
        <circle cx="15.5" cy="9.5" r="1.5" fill="white"/>
        <!-- 嘴巴 -->
        <path
          d="M8 13C8 13 10 15 12 15S16 13 16 13"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
        />
        <!-- AI装饰点 -->
        <circle cx="6" cy="6" r="1" fill="rgba(255,255,255,0.6)"/>
        <circle cx="18" cy="6" r="1" fill="rgba(255,255,255,0.6)"/>
        <circle cx="6" cy="18" r="1" fill="rgba(255,255,255,0.6)"/>
      </svg>
      <svg 
        v-else
        class="close-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
          fill="currentColor"
        />
      </svg>
    </div>

    <!-- 聊天窗口 -->
    <transition name="chat-slide">
      <div v-if="isOpen" class="ai-chat-window">
        <div class="chat-header">
          <h3>AI助手</h3>
          <button @click="toggleChat" class="close-btn">×</button>
        </div>
        <div class="chat-content">
          <iframe 
            :src="chatUrl" 
            frameborder="0" 
            class="chat-iframe"
            title="AI助手对话"
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const chatUrl = 'https://aikb.xiaozhuhouses.asia/chat/1318308284877580'

const toggleChat = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.ai-assistant {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.ai-assistant-button {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  color: white;
}

.ai-assistant-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
}

.ai-assistant-button.active {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
}

.ai-icon,
.close-icon {
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
}

.ai-assistant-button:hover .ai-icon,
.ai-assistant-button:hover .close-icon {
  transform: scale(1.1);
}

.ai-chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid #e1e5e9;
}

.chat-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.chat-content {
  height: calc(100% - 60px);
  position: relative;
}

.chat-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* 动画效果 */
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: all 0.3s ease;
}

.chat-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .ai-chat-window {
    width: 320px;
    height: 450px;
    bottom: 80px;
    right: -10px;
  }
  
  .ai-assistant-button {
    width: 50px;
    height: 50px;
  }
  
  .ai-icon,
  .close-icon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .ai-chat-window {
    width: calc(100vw - 40px);
    height: 400px;
    right: 20px;
    left: 20px;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .ai-chat-window {
    background: #1a1a1a;
    border-color: #333;
  }
}
</style>
