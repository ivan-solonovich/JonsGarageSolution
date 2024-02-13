<script setup>

import CallUsNow from "../CallUsNow.vue";
</script>

<template>
  <section class="bg-green-800 py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-white font-bold text-5xl leading-tight mb-6">Broken motor</h1>
          <p class="text-white text-xl mr-2 mb-8">There is a few garage door opener Brands on the market now.
            The customers can choose any different types of the motors. All of the modern motors comes with sensors,
            wall button, backup batteries and app (myQ). All garage door motors should be certificated in USA and
            California as well.</p>

        </div>

        <div class="md:w-1/2">
          <img src="../../assets/broken_motor/bm_collage.png" alt="Broken motor"
               class="w-full rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  </section>


  <section class="py-10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Works - Broken motor</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/broken_motor/bm_before.jpg" alt="Banded garage door panels"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Before</h3>


          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/broken_motor/bm_after.jpg" alt="Banded garage door panels"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">After</h3>


          </div>
        </div>

      </div>
    </div>
  </section>
  <CallUsNow/>

</template>

<style scoped>
.image-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>