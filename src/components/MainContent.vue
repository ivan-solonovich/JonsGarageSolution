<script>
import AppointModal from "./appoint-modal/AppointModal.vue";
export default {
  data() {
    return {
      showPopUp: false
    }
  },
  components:{
    AppointModal
  },
  computed: {

  },
  methods: {
    isPopUpVisible(){
      this.showPopUp = true
      console.log(this.showPopUp)
    },
    closePopUpCart(){
      this.showPopUp = false
      console.log(this.showPopUp)
    }
  }
}

</script>

<template>
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <div class="container w-[calc(100%-2rem)] h-[calc(100vh-17rem)]">
        <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          <div class=" lg:columns-3 columns-3xs gap-8 h-[calc(100vh-17rem)]  flex justify-between">
                  <div class="w-full flex flex-col justify-between items-center">


                      <h4 class="w-full lg:p-10">
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

                  </div>
                  <div class=" w-full flex flex-col justify-center items-center">
                    <button @click="isPopUpVisible" class="p-5 md:p-30  lg:p-20 border-2 border-black rounded-full text-black   lg:text-7xl md:font-bold">Fix now</button>
                  </div>
                  <div class="w-full flex flex-col justify-between pl-2">

                    <h3 class="w-full lg:p-20">
                      <RouterLink :to="{name:'roller-replacement'}" active-class="none">
                       Roller replacement
                      </RouterLink>
                    </h3>
                    <h3 class="w-full lg:p-20">
                      <RouterLink :to="{name:'banded-garage-door-panels'}" active-class="none">
                        Banded garage door panels
                      </RouterLink>
                    </h3>
                    <h3 class="w-full lg:p-20">
                      <RouterLink :to="{name:'remote-controls-and-key-pads'}" active-class="none">
                      Remote controls and key pads
                      </RouterLink>
                    </h3>
                  </div>
          </div>
          <slot></slot>
        </div>
    </div>
    <video  autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-opacity-50">
      <source src="../../matireal/video_2023-09-16_11-40-25.mp4" type="video/mp4" />Your browser does not support the video tag.
      <source src="../../matireal/video_2023-09-16_11-40-25.webm" type="video/webm" />
    </video>
<!--  Pop Up component    -->
    <AppointModal
        v-if="showPopUp"
        @closePopUp="closePopUpCart"

    />
  </header>
  <div class="max-w-lg m-auto">
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
      magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
      sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
      nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
      odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
      laoreet sem, semper molestie libero.
    </p>
    <p class="mb-4">
      Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
      fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
      non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
      Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
      varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
      semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
      ipsum, id consequat nulla nunc in ligula.
    </p>
    <p class="mb-12">
      Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
      dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
      dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
      fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
      fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
      vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
      neque.
    </p>
  </div>
</template>

<style scoped>

</style>