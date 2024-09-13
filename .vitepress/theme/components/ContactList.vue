<script setup>
const props = defineProps({
  list: [],
});
</script>

<template>
  <div class="contact-list">
    <div v-for="item of props.list" class="contact-item">
      <div class="contact-item-header">
        <div class="contact-item-title">{{ item.title }}</div>
      </div>
      <div class="contact-item-body">
        <img class="contact-item-img" :src="item.imgSrc" />
      </div>
      <div class="contact-item-footer"></div>
    </div>
  </div>
</template>

<style scoped>
.contact-list {
  margin: 20px -10px;
  display: flex;
}

.contact-item {
  margin: 10px;
  width: 260px;
  min-height: 300px;

  border: 1px solid rgba(0,0,0,.125);
  border-radius: 10px;
}

.contact-item-title {
  padding: 20px;
  
  text-align: center;
}

.contact-item-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-item-img {
  width: 194px;
  height: 194px;
}

.dark .contact-item {
  border: 1px solid rgba(255, 255, 255, 0.125);;
}
</style>
