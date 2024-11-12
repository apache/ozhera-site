<script setup lang="ts">
import CustomizeOzHera from "./CustomizeOzHera.vue";
import CustomizeFeatures from "./CustomizeFeatures.vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <div class="VPHome">
    <CustomizeOzHera
      v-if="frontmatter.ozHera"
      :ozHeraData="frontmatter.ozHera"
    />

    <CustomizeFeatures
      v-if="frontmatter.features"
      :features="frontmatter.features"
    />
  </div>
</template>

<style scoped></style>
