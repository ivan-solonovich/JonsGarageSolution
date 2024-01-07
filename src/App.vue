<script setup>

import NavBar from "./components/navbar/NavBar.vue";
import MainPage from "./components/MainPage.vue";
import FooterMain from "./components/FooterMain.vue";
</script>

<template>
  <NavBar/>

    <router-view></router-view>
  <FooterMain/>
</template>

<style scoped>

</style>
