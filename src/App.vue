<script setup>

import NavBar from "./components/navbar/NavBar.vue";

import FooterMain from "./components/FooterMain.vue";
</script>

<template>
  <div class="w-100 flex justify-center">
    <div id="wrapper">
    <NavBar id="navbar"/>
      <router-view></router-view>
    <FooterMain/>
    </div>
  </div>
</template>

<style>
#wrapper{
  width: 98%;
}
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
