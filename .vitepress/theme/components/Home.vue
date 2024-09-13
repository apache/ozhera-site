<script setup>
import { useData } from 'vitepress'
import HomeHero from './HomeHero.vue'
import VPFeatures from './Features.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <HomeHero
    v-if="fm.hero"
    class="VPHomeHero"
    :name="fm.hero.name"
    :text="fm.hero.text"
    :tagline="fm.hero.tagline"
    :image="fm.hero.image"
    :actions="fm.hero.actions"
  />
  <VPFeatures
    v-if="fm.features"
    class="VPHomeFeatures"
    :features="fm.features"
  />
</template>
