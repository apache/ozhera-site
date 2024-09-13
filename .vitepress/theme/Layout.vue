<script setup>
import { Layout } from 'vitepress/theme'
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout === 'home'">
    Custom home page!
  </div>
  <Layout v-else />
</template>
