<template>
  <main>
    <div :class="$style.container">
      <header :class="$style.header">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/ping">Ping</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/select">Select</router-link>
        |
        <router-link to="/country">Country</router-link>
        |
        <router-link to="/logout">Logout</router-link>
      </header>

      <router-view />
    </div>
  </main>
</template>

<style module>
.container {
  max-width: fit-content;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
}
</style>
