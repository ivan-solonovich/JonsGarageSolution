<script setup>

import NavBar from "./components/navbar/NavBar.vue";
import MainPage from "./components/MainPage.vue";
import FooterMain from "./components/FooterMain.vue";
</script>

<template>
  <NavBar id="navbar"/>

    <router-view></router-view>
  <FooterMain/>
</template>

<style>
#navbar{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
footer-main{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
