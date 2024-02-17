<script setup>

import CallUsNow from "../CallUsNow.vue";
</script>

<template>

      <section class="bg-primary py-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-white font-bold text-5xl leading-tight mb-6">Banded garage door panels</h1>
              <p class="text-white text-xl mr-2 mb-8">When garage doors become bent near their bottom panels,
                some garage door experts simply replace these panels. However, the fix could be as simple as hammering
                the dent out, depending on the extent of the damage.

                Garage door struts are long steel bars that are installed horizontally on the interior of your garage door.
                Screwed into the exposed interior of your garage door, they provide support and reinforcement.
                Without struts, the weight of your garage door can cause it to bend or bow over time.</p>

            </div>

            <div class="md:w-1/2">
              <img src="../../assets/banded_door/collage.png" alt="banded door"
                   class="w-full rounded-lg shadow-lg">
            </div>
          </div>
        </div>
      </section>

  <!-- Featured section -->
  <section class="py-10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Works - Banded garage door panels</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/banded_door/before_1.jpg" alt="Banded garage door panels"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Before</h3>


          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/banded_door/after.jpg" alt="Banded garage door panels"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">After</h3>


          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../../assets/banded_door/after_1.jpg" alt="Coffee"
               class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Banded garage door panels</h3>
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