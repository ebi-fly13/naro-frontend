<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cityname = ref('')
const select = () => router.push(`/city/${cityname.value}`)
</script>

<template>
  <div class="city">
    <div>
      <input type="text" v-model="cityname" />
    </div>
    <div>
      <button @click="select">表示する</button>
    </div>
  </div>
</template>
