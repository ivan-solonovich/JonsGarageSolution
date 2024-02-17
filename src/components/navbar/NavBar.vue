<script >



export default {
  data(){
    return{
      isMobile: false,
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
        this.isMobile = false;
        console.log(this.isDesktop)
      }
    } )

    window.addEventListener('resize', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;
        this.isMobile = false;
      }
    } )
    window.addEventListener('load', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;
        this.isMobile = true;
      }

    } )
    window.addEventListener('resize', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;
        this.isMobile = true;
      }
    } )
  },

  computed(){
    window.addEventListener('load', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;
        this.isMobile = false;
        console.log(this.isDesktop)
      }
    } )

    window.addEventListener('resize', function (){
      if (window.innerWidth > 768){
        this.isDesktop = true;
        this.isMobile = false;
      }
    } )
    window.addEventListener('load', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;
        this.isMobile = true;
      }

    } )
    window.addEventListener('resize', function (){
      if (window.innerWidth < 768){
        this.isDesktop = false;
        this.isMobile = true;
      }
    } )
  }
}

</script>

<template>
  <div class="w-100 overflow-x-hidden flex justify-center">
  <nav class="w-100 bg-gray-50 grid grid-cols-1 lg:grid-cols-3 justify-items-center">
    <div class="w-100 flex flex-wrap items-center justify-center mx-auto p-4">
      <RouterLink :to="{name:'home'}" active-class="none" class="navigate">
      <a href="#" class="flex items-center">

        <img src="../../../public/johns-line.png" class="h-24 mr-8" alt="JonsGarageSolution Logo" />
<!--        <span class="self-center lg:text-2xl sm:text-sm font-semibold whitespace-nowrap text-black dark:text-white">John’s garage door repair</span>-->

      </a>
      </RouterLink>

    </div>

    <div class="callMe p-4 w-100   lg:ml-96 text-center">
      <div>
      <a  class="phone pl-2" href="tel:+18183177803">
        <button  class="bg-primary hover:bg-gray-400 rounded-[.5rem] text-secondary pr-2  py-2 px-4  inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <span class="text-white"> +1 818 317 78 03</span>
        </button>
      </a>
    </div>
      <div  class="mainMenu lg:block sm:hidden">
        <ul   class="flex justify-between font-medium quicksand p-2 md:p-0 mt-4 border border-gray-100  bg-gray-50 ">
          <li>
            <RouterLink :to="{name:'home'}" active-class="none" class="navigate">
              <a href="#" class="block quicksand py-2 pl-3 pr-4 text-primary  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
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
    </div>


  </nav>
  </div>


</template>

<style>

</style>