<script setup>

</script>

<template>
  <h3 class="mb-4 mt-4 text-2xl lg:text-4xl text-green-800 text-center">Professional Garage Door Repair</h3>
  <div class="w-full flex flex-wrap justify-center text-center m-2 p-2 ">
    <h4>Trouble Opening or Closing, Blocked Sensors, Dying Opener, Unusual Noises, Uneven Door, Slow Opening, Transmitter Problems, Keypad Not Synced and other problems</h4>
  </div>
    <div class=" rounded overflow-hidden shadow-lg flex justify-center">

    <div class="p-8  grid lg:grid-cols-3 grid-cols-1  gap-10 justify-items-center">


        <RouterLink  :to="{name:'banded-garage-door-panels'}" active-class="none">
        <a class="p-8 max-w-md border border-gray-500 rounded-2xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img src="../../assets/banded_door/collage.png" class="shadow rounded-lg overflow-hidden border" >
          <div class="mt-8">
            <h4 class="font-bold text-xl">Banded garage door panels</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
        </RouterLink>


        <RouterLink :to="{name:'broken-springs'}" active-class="none">
          <a class="p-8 max-w-md border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
             href="#">
            <img src="../../assets/broken_springs/bs_collage.png" class="shadow rounded-lg overflow-hidden border" >
            <div class="mt-8">
              <h4 class="font-bold text-xl"> Broken springs</h4>
              <div class="mt-5">
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
              </div>
            </div>
          </a>
        </RouterLink>

      <RouterLink :to="{name:'off-track'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img   src="../../assets/off-track/of_trak_transform.png" class="shadow rounded-lg overflow-hidden border " >
          <div class="mt-8">
            <h4 class="font-bold text-xl">  Off track</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>

      <RouterLink :to="{name:'broken-motor'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img   src="../../assets/broken_motor/bm_collage.png" class="shadow rounded-lg overflow-hidden border " >
          <div class="mt-8">
            <h4 class="font-bold text-xl">  Broken motor</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>

      <RouterLink :to="{name:'cable-snapped-off'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img   src="../../assets/cabel/cabel.png" class="shadow rounded-lg overflow-hidden border " >
          <div class="mt-8">
            <h4 class="font-bold text-xl">Cable snapped off</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>
      <RouterLink :to="{name:'roller-replacement'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img   src="../../assets/roller_replasment/r_collage.png" class="shadow rounded-lg overflow-hidden border " >
          <div class="mt-8">
            <h4 class="font-bold text-xl">Roller replacement</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>
      <RouterLink :to="{name:'remote-controls-and-key-pads'}" active-class="none">
        <a class="p-8 max-w-md  border border-gray-500 rounded-xl hover:shadow-xl hover:shadow-indigo-300 flex flex-col items-start"
           href="#">
          <img   src="../../assets/remote-controll/rc_collage.png" class="shadow rounded-lg overflow-hidden border " >
          <div class="mt-8">
            <h4 class="font-bold text-xl"> Remote controls and key pads</h4>
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Learn more</button>
            </div>
          </div>
        </a>
      </RouterLink>
    </div>
    </div>

</template>

<style scoped>

</style>