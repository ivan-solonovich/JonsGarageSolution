<script >

import AppointModal from "../appoint-modal/AppointModal.vue";

export default {
  data(){
    return{
      servicesOpen: false,
      mobileMenu: true,
      isDesktop: true,
      showPopUp: false
    }
  },
  components:{
    AppointModal
  },
  created() {
    let deskTop = this.isDesktop
    window.addEventListener('load', function (){
      if (window.innerWidth > 768){
        deskTop = true;
        console.log("Desktop", deskTop)
      }
    } )

    window.addEventListener('resize', function (){
      if (window.innerWidth > 768){
        deskTop = true;
        console.log("Desktop", deskTop)
      }
    } )
  },
  methods: {
    isPopUpVisible(){
      this.showPopUp = true
      console.log(this.showPopUp)
    },
    closePopUpCart(){
      this.showPopUp = false
      console.log(this.showPopUp)
    },
    isServicesOpen(){
      this.servicesOpen = !this.servicesOpen
    }
  }
}

</script>

<template>

  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink :to="{name:'home'}" active-class="none">
      <a href="https://flowbite.com/" class="flex items-center">

        <img src="../../../public/garage.svg" class="h-8 mr-3" alt="JonsGarageSolution Logo" />
        <span class="self-center text-2xl sm:text-xl font-semibold whitespace-nowrap dark:text-white">Jhon's Garage Solution</span>

      </a>
      </RouterLink>
      <div class="flex md:order-2">
        <button type="button" @click="isPopUpVisible" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white
         rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200
         dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Fix It</button>
        <button @click="mobileMenu=!mobileMenu" id="mobile-menu" data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
    </div>
    <hr id="menu-divider" class="pb-2">
    <div class="w-full flex items-center justify-center md:w-auto p-3 z-30">
        <div v-if="mobileMenu"  class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul  class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <RouterLink :to="{name:'home'}" active-class="none">
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{name:'about'}" active-class="none">
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </RouterLink>
        </li>
        <li>

          <button  @click="isServicesOpen"  class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg></button>
          <!-- Dropdown menu -->
          <div  v-if="servicesOpen"   class="flex flex-row items-center justify-between  w-full  md:flex md:w-auto md:order-1 absolute z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" >
              <li class="block">
                <RouterLink :to="{name:'broken-springs'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Broken springs</a>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{name:'off-track'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Off track</a>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{name:'broken-motor'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Broken motor</a>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{name:'cable-snapped-off'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cable snapped off</a>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{name:'roller-replacement'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roller replacement</a>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{name:'banded-garage-door-panels'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Banded garage door panels</a>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{name:'remote-controls-and-key-pads'}" active-class="none">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remote controls and key pads</a>
                </RouterLink>
              </li>

            </ul>

          </div>

        </li>
        <li>
          <RouterLink :to="{name:'contact'}" active-class="none">
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </RouterLink>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  <!--  Pop Up component    -->
  <AppointModal
      v-if="showPopUp"
      @closePopUp="closePopUpCart"

  />
</template>

<style scoped>

</style>