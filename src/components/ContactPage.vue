<script>




import CallUsNow from "./CallUsNow.vue";

export default {
  components: {CallUsNow},
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: ""
    }
  }
}
</script>

<template>
  <div class="w-full ">
    <div class="max-w-screen-lg mx-auto p-5">
      <div class="grid grid-cols-1  border">
        <div class="bg-primary md:col-span-4 p-10 text-white">
          <p class="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span class="text-orange-600">Touch</span>
          </h3>
          <p class="mt-4 leading-7 text-gray-200">
            Got a technical issue with a garage door? Want to fix it? Need details about our work? Let us know. Call us to speak to a member of our team. We are always happy to help.
          </p>

          <div class="flex items-center mt-5">
            <svg class="w-9 h-9 p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>

            <span class="text-sm">John's Garage Door LLC</span>
          </div>
          <div class="flex items-center mt-5">
            <svg class="w-12 h-12 p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>

            <span class="text-sm">Los Angeles, 15135 Victory Blvd un12 zip 91411 </span>
          </div>
          <div class="flex items-center mt-5">
            <svg class="w-9 h-9 p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>

            <span class="text-sm"> +1 818 317 78 03</span>
          </div>

          <div class="callUs" >
            <h1 class="w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-orange-600" >Free estimate. <span class="text-white">Call us Now.</span></h1>
            <div  class="w-full text-center mt-4 p-2">
              <a class="phone" href="tel:+18183177803">
                <button  class="bg-orange-600 hover:bg-gray-400  text-white pr-2  py-2 px-4 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span class="text-white"> +1 818 317 78 03</span>
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>

</div>
</template>

<style scoped>

</style>