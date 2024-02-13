<script setup>

import CallUsNow from "../CallUsNow.vue";
</script>

<template>
  <section class="bg-green-800 py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-white font-bold text-5xl leading-tight mb-6">Roller replacement</h1>
          <p class="text-white text-xl mr-2 mb-8">When rollers begin to wear, loosen, or bend, they can cause your garage door to open and close more slowly
            or in a jerky manner. This puts more strain on the garage door opener system, which ultimately decreases its lifespan.</p>

        </div>

        <div class="md:w-1/2">
          <img src="../../assets/roller_replasment/r_collage.png" alt="Roller replacement"
               class="w-full rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  </section>
  <section class="py-10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Works - Roller replacement</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/roller_replasment/rr_after.jpg" alt="Roller replacement"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Before</h3>


          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/roller_replasment/rr_before.jpg" alt="Roller replacement"
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