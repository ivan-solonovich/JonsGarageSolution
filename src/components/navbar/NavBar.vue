<script >



export default {
  data(){
    return{

      isDesktop: false,
      showPopUp: false
    }
  },
  components:{

  },
  created() {


    window.addEventListener('load', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;
        console.log(this.isDesktop)
      }
    } )

    window.addEventListener('resize', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;

      }
    } )
    window.addEventListener('load', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;

      }

    } )
    window.addEventListener('resize', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;

      }
    } )
  },
  methods: {
    isPopUpVisible(){
      this.showPopUp = true

    },
    closePopUpCart(){
      this.showPopUp = false
      console.log(this.showPopUp)
    },
    checkMenu(){
      if (window.innerWidth < 768){
        this.isDesktop = false
      }
    },
    changeMenu(){
      this.isDesktop = !this.isDesktop
      console.log(this.isDesktop)
      console.log("changeMenu")
    },
    closeMenu(){

        if(this.isDesktop)
        this.servicesOpen = false;
        this.mobileMenu = false;
    }
  },
  computed(){
    window.addEventListener('load', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;
        console.log(this.isDesktop)
      }
    } )

    window.addEventListener('resize', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;

      }
    } )
    window.addEventListener('load', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;

      }

    } )
    window.addEventListener('resize', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;

      }
    } )
  }
}

</script>

<template>

  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink :to="{name:'home'}" active-class="none" class="navigate">
      <a href="#" class="flex items-center">

        <img src="../../../public/garage.svg" class="h-8 mr-3" alt="JonsGarageSolution Logo" />
        <span class="self-center lg:text-2xl sm:text-sm font-semibold whitespace-nowrap text-black dark:text-white">John’s garage door repair</span>

      </a>
      </RouterLink>
      <div class="flex md:order-2">
        <div class="flex md:order-2">

        <button @click="changeMenu"  data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
          <a  class="phone pl-2" href="tel:+18183177803">
            <button  class="bg-green-800 hover:bg-gray-400 rounded-[.5rem] text-white pr-2  py-2 px-4 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span class="text-white"> +1 818 317 78 03</span>
            </button>
          </a>
        </div>
      </div>
    </div>
    <hr id="menu-divider" >
    <!--        Desktop menu-->
    <div v-if="isDesktop"  @click="changeMenu" class="w-full flex items-center justify-center md:w-auto p-3 z-30">

        <ul  class="flex  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink :to="{name:'home'}" active-class="none" class="navigate">
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'about'}" active-class="none" class="navigate">
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{name:'contact'}" active-class="none" class="navigate">
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </RouterLink>
          </li>
        </ul>

    </div>
    <hr>
    <div v-if="isDesktop" class="">

     <ul class="flex flex-wrap justify-center">
       <li class=" p-5">
         <RouterLink :to="{name:'broken-springs'}" active-class="none">
           Broken springs
         </RouterLink>
       </li>



       <li class=" p-5">
         <RouterLink :to="{name:'off-track'}" active-class="none">
           Off track
         </RouterLink>
       </li>


       <li class=" p-5">
         <RouterLink :to="{name:'broken-motor'}" active-class="none">
           Broken motor
         </RouterLink>
       </li>

       <li class="p-5">
         <RouterLink :to="{name:'cable-snapped-off'}" active-class="none">
           Cable snapped off
         </RouterLink>
       </li>
       <li class="p-5">
         <RouterLink :to="{name:'roller-replacement'}" active-class="none">
           Roller replacement
         </RouterLink>
       </li>
       <li class="p-5">
         <RouterLink :to="{name:'banded-garage-door-panels'}" active-class="none">
           Banded garage door panels
         </RouterLink>
       </li>
       <li class="p-5">
         <RouterLink :to="{name:'remote-controls-and-key-pads'}" active-class="none">
           Remote controls and key pads
         </RouterLink>
       </li>
     </ul>


          </div>
  </nav>
  <!--  Pop Up component    -->

</template>

<style scoped>

</style>