<script setup>

import CallUsNow from "../CallUsNow.vue";
</script>

<template>
  <h3 class="pt-10  mt-10 text-2xl text-center bg-gray-50">Our Partners</h3>
  <div class="max-h-60 sm:h-100 w-100 flex flex-direction-column columns-1 justify-center bg-gray-50">

    <div class="w-100 p-10 m-10 flex flex-wrap justify-center align-center gap-8">
      <img class="partner_img" src="../../assets/partners/p_1.jpg" alt="">
      <img class="partner_img" src="../../assets/partners/p_2.jpg" alt="">
      <img class="partner_img" src="../../assets/partners/p_3.jpg" alt="">

    </div>
  </div>





<!--  <div class="w-full flex col-auto justify-center">-->
<!--  <ul class="m-2 p-10 list-disc">-->
<!--    <li>Broken or bent rollers</li>-->
<!--    <li>Bent track, misalignment or rusted track</li>-->
<!--    <li>Preventative Maintenance</li>-->
<!--    <li>Others services</li>-->
<!--  </ul>-->
<!--  <ul class="m-2 p-10 list-disc">-->
<!--    <li>Replace garage door opener chain</li>-->
<!--    <li>Replace garage door spring</li>-->
<!--    <li>Replace garage door section</li>-->
<!--    <li>Replace garage door opener motor</li>-->
<!--  </ul>-->
<!--  </div>-->
 <CallUsNow/>
</template>

<style scoped>
.partner_img{
  width: auto ;
  max-height: 80px;
  height: auto;
  padding: 1rem;
  margin: 1rem;
}
</style>