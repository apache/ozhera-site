<script setup lang="ts">
import { useData } from "vitepress";

const { theme, frontmatter } = useData();
</script>

<template>
  <footer v-if="theme.footer && frontmatter.footer !== false" class="VPFooter">
    <div class="container">
      <div
        v-if="theme.footer.message"
        class="message"
        v-html="theme.footer.message"
      ></div>
      <div
        v-if="theme.footer.copyright"
        class="copyright"
        v-html="theme.footer.copyright"
      ></div>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-text-3);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
