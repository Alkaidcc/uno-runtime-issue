<script setup>
import { ref,onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const dynamicClasses = ref([])
const fetchIcons = async () => {
  try {
    const res = await fetch('http://localhost:3000').then(res => res.json())
    dynamicClasses.value = res.data.map(item => item.icon)
  }catch(e) {
    console.log(e)
  } 
}
onMounted(async () => {
  await fetchIcons()
})
</script>

<template>
  <div>
    <div v-for="dynamicClass in dynamicClasses" :class="dynamicClass" :key="dynamicClass"></div>
    <div class="i-lucide-umbrella"></div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
