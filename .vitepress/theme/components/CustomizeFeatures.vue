<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";

export interface Feature {
  icon?: DefaultTheme.FeatureIcon;
  title: string;
  details: string;
  link?: string;
  linkText?: string;
  rel?: string;
  target?: string;
}

const props = defineProps<{
  features: {
    title: string;
    items: Feature[];
  };
}>();
</script>

<template>
  <div class="customizeFeatures">
    <div class="container">
      <div class="title">{{ features.title }}</div>
      <div class="items">
        <div
          v-for="feature in features.items"
          :key="feature.title"
          class="item"
        >
          <div class="item-img">
            <img :src="feature.icon.src" :alt="feature.icon.alt" />
          </div>
          <div class="item-content">
            <div class="item-content-title">{{ feature.title }}</div>
            <div class="item-content-detail">{{ feature.details }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customizeFeatures {
  margin: 80px 0 0 0;
  background-color: var(--vp-c-bg-soft);
}

@media (max-width: 640px) {
  .customizeFeatures {
    padding: 0 24px;
  }
}
@media (min-width: 640px) {
  .customizeFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .customizeFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  padding-bottom: 40px;
  max-width: 1152px;
}
.title {
  padding: 80px 0 60px 0;
  line-height: 1;
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-align: center;
}
.items {
  display: flex;
  flex-wrap: wrap;
}

.item {
  min-height: 140px;
  box-sizing: border-box;
  padding: 8px 8px 40px 8px;
  display: flex;
  justify-content: flex-start;
}

@media (max-width: 640px) {
  .item {
    width: 100%;
  }
}

@media (min-width: 640px) {
  .item {
    width: 50%;
  }
}
.item-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-top: 20px;
  margin-right: 30px;
  background-color: #f6f6f7;
}
.item-content {
  width: 100%;
  padding-right: 20px;
}
.item-content-title {
  color: var(--vp-c-text-1);
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
}
.item-content-detail {
  color: var(--vp-c-text-3);
  font-size: 14px;
}
</style>
