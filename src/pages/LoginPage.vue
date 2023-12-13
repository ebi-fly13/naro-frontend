<script setup lang="ts">
import { ref } from 'vue'

const LoginUserName = ref('')
const LoginUserPass = ref('')

const login = () => {
  if (LoginUserName.value === '') {
    alert('名前を入力してください')
    return
  }
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: LoginUserName.value, password: LoginUserPass.value })
  })
}
</script>

<template>
  <div class="login">
    <h1>This is a login page</h1>
    <div>
      <input type="text" v-model="LoginUserName" />
      <input type="text" v-model="LoginUserPass" />
    </div>
    <div>
      <button @click="login">login</button>
    </div>
  </div>
</template>
