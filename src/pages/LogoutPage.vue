<script setup lang="ts">
const logout = () => {
  fetch('/api/logout', {
    method: 'POST'
  })
}
</script>

<template>
  <div class="logout">
    <h1>This is a logout page</h1>
    <div>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>
