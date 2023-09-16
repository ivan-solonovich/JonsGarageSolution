<script setup>

import NavBar from "./components/navbar/NavBar.vue";
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <NavBar/>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style scoped>

</style>
