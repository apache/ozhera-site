<script setup>
import { useData } from "vitepress";
import HomeHero from "./HomeHero.vue";
import VPFeatures from "./Features.vue";
import CustomizeOzHera from "./CustomizeOzHera.vue";
import CustomizeFeatures from "./CustomizeFeatures.vue";

const { frontmatter: fm } = useData();
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
  <CustomizeOzHera
    v-if="fm.ozHera"
    class="CustomizeOzHera"
    :ozHeraData="fm.ozHera"
  />
  <CustomizeFeatures
    v-if="fm.features"
    class="CustomizeFeatures"
    :features="fm.features"
  />
</template>
