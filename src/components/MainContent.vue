<script>

import OurPartners from "./our-partners/OurPartners.vue";
import Features from "./features/features.vue";
import CallUsNow from "./CallUsNow.vue";
import ReplaceParts from "./ReplaceParts.vue";
import Supports from "./supports/Supports.vue";
import BrokensBloks from "./brokens/BrokensBloks.vue";
import SomeProblems from "./problems/SomeProblems.vue";
export default {
  data() {
    return {

    }
  },
  components:{
    SomeProblems,
    BrokensBloks,
    Supports,
    ReplaceParts,
    CallUsNow,
    Features,
    OurPartners,

  },


}

</script>

<template>
  <header class="w-100  relative flex items-center justify-center h-screen mb-12 box-border overflow-hidden">
    <div class="container w-100 h-[calc(100vh-17rem)]">

        <div class="relative z-30 p-5 lg:text-2xl text-white stroke-black-500 box-border  rounded-xl">
          <div class=" lg:columns-3 columns-3xs gap-8 h-[calc(100vh-17rem)] box-border flex justify-between">
                  <div class="w-100 flex flex-col justify-around items-center">
                    <div class="w-100  flex flex-col flex-direction-column  justify-center pl-2">
                      <div class="w-100   flex flex-col align-center justify-around rounded-[2.5rem] flex-direction-column p-2 ">
                        <div class="m-2 p-2 text-black-800">
                          <p class="text-4xl text-orange-600 pb-4">Is your garage door in need of repair?</p>
                          <p>We take great pride in providing a high-quality, low-cost, fast garage door repair service in Los Angeles. Contact us today for a free consult with our technicians.</p>
                        </div>

                        <h3 class="w-100 flex flex-wrap m-2 p-2 text-orange-600" >Call us now</h3>
                        <div  class="w-100  p-2">
                          <a class="phone" href="tel:+18183177803">
                            <button  class="bg-primary hover:bg-gray-400 rounded-[.5rem] text-secondary  py-2 px-4 inline-flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                              </svg>
                              <span class="text-secondary"> +1 818 317 78 03</span>
                            </button>
                          </a>
                        </div>

                      </div>

                    </div>

                  </div>

          </div>
          <slot></slot>
        </div>
    </div>

    <video  autoplay playsinline loop muted class="absolute box-border z-10 w-auto min-w-full min-h-full max-w-none bg-opacity-50" poster="../../matireal/poster.jpg">
      <source src="../../matireal/frame1compresed.mp4" type="video/mp4">Your browser does not support the video tag.
      <source src="../../matireal/frame1compresed.webm" type="video/webm">Your browser does not support the video tag.
    </video>
<!--  Pop Up component    -->

  </header>

  <features/>
  <BrokensBloks/>
  <ReplaceParts/>
  <CallUsNow/>
  <SomeProblems/>
  <CallUsNow/>
  <OurPartners/>
  <Supports/>

</template>

<style >
header{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
features{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>