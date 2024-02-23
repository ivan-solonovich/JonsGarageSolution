<script setup>

import CallUsNow from "../CallUsNow.vue";
</script>

<template>
  <section class="bg-primary py-10">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-white font-bold text-5xl leading-tight mb-6">Broken springs</h1>
          <p class="text-white text-xl mr-2 mb-8">A garage door spring balances the weight of a garage door and enables easy movement - opening and closing manually or
            automatically. It is made of high-tension steel, which has a limited lifespan and loses its effectiveness with time.
            Garage door springs have different quantity levels such as ‘10,000-use’ or ‘75,000-use’. Many buyers feel that this
            is quite a large number but when you evaluate and analyze, you will realize that a garage door is probably opened four
            to five times a day, every day, every year justifying the high quantity levels.</p>
          <p class="text-white text-xl mr-2 mb-8">How do you know that you need a garage door spring repair?</p>
          <p class="text-white text-xl mr-2 mb-8">As your garage door ages, it becomes less effective. The steel loses resiliency and the door begins to weigh more.
            When springs are brand new, you just need around 10 pounds of force to lift and open the door. But when springs move
            towards the end of their lifespan, owners need to apply more force to lift the door, almost as much as the door’s weight</p>
        </div>

        <div class="md:w-1/2">
          <img src="../../assets/broken_springs/bs_collage.avif" alt="banded door"
               class="w-full rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  </section>
  <section class="py-10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Works - Broken springs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/broken_springs/bs_before_1.avif" alt="Broken springs"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Before</h3>


          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/broken_springs/bs_after_1.avif" alt="Broken springs"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">After</h3>


          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/broken_springs/bs_before_2.avif" alt="Broken springs"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Before</h3>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/broken_springs/bf_after_2.avif" alt="Broken springs"
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