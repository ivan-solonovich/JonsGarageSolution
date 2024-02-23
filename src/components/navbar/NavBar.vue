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
  <div class="w-100 overflow-x-hidden flex justify-center bg-gray-50">
  <nav class="w-100 bg-gray-50 grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
    <div class="w-100 grid md:grid-cols-1">
      <RouterLink :to="{name:'home'}" active-class="none" class="navigate">
      <a href="#" class="h-14 flex items-center bg-gray-50 m-2 p-2">
        <div class="logo-main bg-gray-50">

          <img class="m-1.5 w-24" src="../../assets/ljgo/logo.avif" alt="Jon's Garage Door  Logo">
        </div>
<!--        <img src="../../../public/johns-line.png" class="h-24 mr-8" alt="JonsGarageSolution Logo" />-->
<!--        <span class="self-center lg:text-2xl sm:text-sm font-semibold whitespace-nowrap text-black dark:text-white">John’s garage door repair</span>-->
        <div class="w-100 bg-gray-50 grid grid-cols-1 h-12 p-1 m-8 ml-2.5">
          <div style="font-family: Buda, serif" class="text-primary uppercase font-extrabold buda-light">John’s garage </div>
          <div style="font-family: Quicksand, sans-serif" class="text-primary uppercase font-extrabold quicksand">door repair</div>
        </div>

      </a>
      </RouterLink>

    </div>

    <div class=" p-4 w-100   lg:ml-96 text-center">

      <div  class="text-secondary ">
        <ul   class="flex justify-between font-medium quicksand p-2   bg-gray-50 text-primary ">
          <li class="mr-2 pr-2 border-r-secondary">
            <RouterLink :to="{name:'home'}" active-class="none" class="navigate">
              <a href="#" class="block py-2 pl-3 pr-4 " aria-current="page">Home</a>
            </RouterLink>
          </li>
          <li class="mr-2 pr-2 border-r-secondary">
            <RouterLink :to="{name:'about'}" active-class="none" class="navigate">
              <a href="#" class="block py-2 pl-3 pr-4 ">About</a>
            </RouterLink>
          </li>

          <li class="mr-2 pr-2 border-r-secondary">
            <RouterLink :to="{name:'contact'}" active-class="none" class="navigate">
              <a href="#" class="block py-2 pl-3 pr-4">Contact</a>
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