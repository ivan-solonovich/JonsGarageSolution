<script setup>

</script>

<template>
  <h3 class="mt-8 font-bold text-3xl sm:text-3xl md:text-6xl text-primary text-center">Professional Garage Door Repair</h3>
  <div class="w-full flex flex-wrap justify-center text-center m-2 p-2 ">
    <h4>Trouble Opening or Closing, Blocked Sensors, Dying Opener, Unusual Noises, Uneven Door, Slow Opening, Transmitter Problems, Keypad Not Synced and other problems</h4>
  </div>
    <div class=" rounded overflow-hidden shadow-lg flex justify-center">

    <div class="p-8  grid lg:grid-cols-3 grid-cols-1  gap-10 justify-items-center">


        <RouterLink  :to="{name:'banded-garage-door-panels'}" active-class="none">
        <a class="p-8 max-w-md border border-gray-500 rounded-2xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img loading="lazy" src="../../assets/banded_door/collage.avif" class="shadow rounded-lg overflow-hidden border" alt="Banded garage door panels collage">
          <div class="mt-8">
            <h4 class="font-bold text-xl">Banded garage door panels</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
        </RouterLink>


        <RouterLink :to="{name:'broken-springs'}" active-class="none">
          <a class="p-8 max-w-md border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
             href="#">
            <img loading="lazy" src="../../assets/broken_springs/bs_collage.avif" class="shadow rounded-lg overflow-hidden border" alt="Broken springs collage">
            <div class="mt-8">
              <h4 class="font-bold text-xl"> Broken springs</h4>
              <div class="mt-5">
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
              </div>
            </div>
          </a>
        </RouterLink>

      <RouterLink :to="{name:'off-track'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img loading="lazy"  src="../../assets/off-track/of_trak_transform.avif" class="shadow rounded-lg overflow-hidden border " alt="Off track collage">
          <div class="mt-8">
            <h4 class="font-bold text-xl">  Off track</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>

      <RouterLink :to="{name:'broken-motor'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img loading="lazy"  src="../../assets/broken_motor/bm_collage.avif" class="shadow rounded-lg overflow-hidden border " alt="Broken motor collage">
          <div class="mt-8">
            <h4 class="font-bold text-xl">  Broken motor</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>

      <RouterLink :to="{name:'cable-snapped-off'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img loading="lazy"  src="../../assets/cabel/cabel.avif" class="shadow rounded-lg overflow-hidden border " alt="Cable snapped off">
          <div class="mt-8">
            <h4 class="font-bold text-xl">Cable snapped off</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>
      <RouterLink :to="{name:'roller-replacement'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img  loading="lazy" src="../../assets/roller_replasment/r_collage.avif" class="shadow rounded-lg overflow-hidden border " alt="Roller replacement collage">
          <div class="mt-8">
            <h4 class="font-bold text-xl">Roller replacement</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>
      <RouterLink :to="{name:'remote-controls-and-key-pads'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img loading="lazy"  src="../../assets/remote-controll/rc_collage.avif" class="shadow rounded-lg overflow-hidden border " alt=" Remote controls and key pads">
          <div class="mt-8">
            <h4 class="font-bold text-xl"> Remote controls and key pads</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>
    </div>
    </div>

</template>

<style scoped>

</style>