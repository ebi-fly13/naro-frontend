<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ countryCode: string }>()

interface City {
  name: string
}

const cityList = ref<City[]>()

onMounted(async () => {
  const res = await fetch(`/api/countries/${props.countryCode}`)
  if (res.ok) {
    cityList.value = await res.json()
  }
})
</script>

<template>
  <div>
    <h1>都市リスト</h1>
    <div v-if="cityList">
      <div v-for="city in cityList" :key="city.name">
        <router-link :to="`/city/${city.name}`"> {{ city.name }}</router-link>
      </div>
    </div>
    <div v-else>ネットワークエラー</div>
  </div>
</template>
