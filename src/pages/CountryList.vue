<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Country {
  countrycode: string
  name: string
}

const countryList = ref<Country[]>()

onMounted(async () => {
  const res = await fetch(`/api/countries`)
  if (res.ok) {
    countryList.value = await res.json()
  }
})
</script>

<template>
  <div>
    <h1>国リスト</h1>
    <div v-if="countryList">
      <div v-for="country in countryList" :key="country.countrycode">
        <router-link :to="`/country/${country.countrycode}`"> {{ country.name }}</router-link>
      </div>
    </div>
    <div v-else>ネットワークエラー</div>
  </div>
</template>
