<script>
import AppointModal from "./appoint-modal/AppointModal.vue";
import OurPartners from "./our-partners/OurPartners.vue";
import Features from "./features/features.vue";
import CallUsNow from "./CallUsNow.vue";
import ReplaceParts from "./ReplaceParts.vue";
import Supports from "./supports/Supports.vue";
export default {
  data() {
    return {
      showPopUp: false,
      isNobile: true,
    }
  },
  components:{
    Supports,
    ReplaceParts,
    CallUsNow,
    Features,
    OurPartners,
    AppointModal
  },

  methods: {
    isPopUpVisible(){
      this.showPopUp = true

    },
    closePopUpCart(){
      this.showPopUp = false
      console.log(this.showPopUp)
    },

  }
}

</script>

<template>
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden h-full">
    <div class="container w-[calc(100%-2rem)] h-[calc(100vh-17rem)]">
        <div class="relative z-30 p-5 lg:text-2xl text-white stroke-black-500   rounded-xl">
          <div class=" lg:columns-3 columns-3xs gap-8 h-[calc(100vh-17rem)]  flex justify-between">
                  <div class="w-full flex flex-col justify-around items-center">

                      <h4 class="w-full  lg:p-10">
                        <RouterLink :to="{name:'broken-springs'}" active-class="none">
                          Broken springs
                        </RouterLink>
                      </h4>



                      <h4 class="w-full lg:p-10">
                        <RouterLink :to="{name:'off-track'}" active-class="none">
                           Off track
                        </RouterLink>
                      </h4>


                      <h4 class="w-full lg:p-10">
                        <RouterLink :to="{name:'broken-motor'}" active-class="none">
                          Broken motor
                        </RouterLink>
                      </h4>


                      <h4 class="w-full lg:p-10">
                        <RouterLink :to="{name:'cable-snapped-off'}" active-class="none">
                         Cable snapped off
                        </RouterLink>
                      </h4>
                    <h3 class="w-full lg:p-10">
                      <RouterLink :to="{name:'roller-replacement'}" active-class="none">
                        Roller replacement
                      </RouterLink>
                    </h3>
                    <h3 class="w-full lg:p-10">
                      <RouterLink :to="{name:'banded-garage-door-panels'}" active-class="none">
                        Banded garage door panels
                      </RouterLink>
                    </h3>
                    <h3 class="w-full lg:p-10">
                      <RouterLink :to="{name:'remote-controls-and-key-pads'}" active-class="none">
                        Remote controls and key pads
                      </RouterLink>
                    </h3>
                  </div>
<!--                  <div id="fix-it" class=" w-full flex flex-col justify-center items-center">-->
<!--                    <button @click="isPopUpVisible" class="p-5 md:p-30  lg:p-20 border-2 border-black rounded-full text-black   lg:text-7xl md:font-bold">Fix now</button>-->
<!--                  </div>-->
                  <div class="w-full hidden md:block flex flex-col flex-direction-column  justify-center pl-2">
                    <div class="w-100   flex flex-col align-center justify-around rounded-[2.5rem] flex-direction-column p-2 ">
                       <div class="m-2 p-2 text-black-800">
                         <p class="text-orange-600">Is your garage door in need of repair?</p>
                         <p>We take great pride in providing a high-quality, low-cost, fast garage door repair service in Los Angeles. Contact us today for a free consult with our technicians.</p>
                       </div>

                      <h3 class="w-full flex flex-wrap m-2 p-2 text-orange-600" >Call us now</h3>
                        <div  class="w-full  p-2">
                          <a class="phone" href="tel:+18183177803">
                          <button  class="bg-green-800 hover:bg-gray-400 rounded-[.5rem] text-black-800  py-2 px-4 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                          <span> +1 818 317 78 03</span>
                        </button>
                          </a>
                        </div>

                    </div>

                  </div>
          </div>
          <slot></slot>
        </div>
    </div>

    <video  autoplay playsinline loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-opacity-50" poster="../../matireal/poster.jpg">
      <source src="../../matireal/frame1compresed.mp4" type="video/mp4">Your browser does not support the video tag.
      <source src="../../matireal/frame1compresed.webm" type="video/webm">Your browser does not support the video tag.
    </video>
<!--  Pop Up component    -->
    <AppointModal
        v-if="showPopUp"
        @closePopUp="closePopUpCart"

    />
  </header>
  <div  class="w-100 sm:block md:hidden   flex flex-col align-center justify-around flex-direction-column p-2 ">
    <div class="m-2 p-2 text-black-800">
      <h2 class="text-orange-800 font-extrabold text-3xl text-center">Is your garage door in need of repair?</h2>
      <h3 class="text-center text-xl">We take great pride in providing a high-quality, low-cost, fast garage door repair service in Los Angeles. Contact us today for a free consult with our technicians.</h3>
    </div>

    <h3 class="w-full flex flex-wrap justify-center m-2 p-2 text-orange-600" >Call us now</h3>
    <div  class="w-full flex justify-center  p-2">
      <a class="phone" href="tel:+18183177803">
        <button  class="bg-green-800 hover:bg-gray-400 rounded-[.5rem] text-white   py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mp-2 pr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <span class="pl- m-2">  +1 818 317 78 03</span>
        </button>
      </a>
    </div>

  </div>
  <features/>

  <ReplaceParts/>
  <CallUsNow/>
  <OurPartners/>
  <Supports/>
</template>

<style scoped>

</style>