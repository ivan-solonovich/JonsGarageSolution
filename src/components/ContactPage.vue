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
        <div class="bg-green-800 md:col-span-4 p-10 text-white">
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

            <span class="text-sm">Los Angeles, Late Avenue
Zip Code/Postal code:03875</span>
          </div>
          <div class="flex items-center mt-5">
            <svg class="w-9 h-9 p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>

            <span class="text-sm"> +1 818 317 78 03</span>
          </div>

          <div class="callUs" >
            <h1 class="w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-orange-600" >Free estimate. <span class="text-white">Call us Now.</span></h1>
            <div  class="w-full text-center  p-2">
              <a class="phone" href="tel:+18183177803">
                <button  class="bg-orange-600 hover:bg-gray-400 rounded-[.5rem] text-white pr-2  py-2 px-4 rounded inline-flex items-center">
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





<!--   Old section-->
<!--    <div class="bg-white dark:bg-gray-900">-->
<!--      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">-->
<!--        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>-->
<!--        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue with a garage door? Want to fix it? Need details about our work? Let us know. </p>-->
<!--        <form action="#" class="space-y-8">-->
<!--          <div>-->
<!--            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>-->
<!--            <input type="text" v-model="name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required="">-->
<!--          </div>-->
<!--          <div>-->
<!--            <label for="phone-input"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>-->
<!--            <div class="relative">-->
<!--              <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">-->
<!--                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">-->
<!--                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>-->
<!--                </svg>-->
<!--              </div>-->
<!--              <input type="text" v-model="phone" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="mb-6">-->
<!--            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>-->
<!--            <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>-->
<!--          </div>-->
<!--          <div class="mb-6">-->
<!--            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe an issue</label>-->
<!--            <input type="text" v-model="message" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">-->
<!--          </div>-->

<!--          <button type="submit" @click="Email().send()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>-->
<!--        </form>-->
<!--      </div>-->

<!--    </div>-->
<!--    <div class="w-full text-center py-8 lg:py-16 px-4 ">-->
<!--      <div>-->
<!--        <div class="block text-center flex justify-center p-10 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">-->
<!--          <svg class="w-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>-->
<!--        </div>-->
<!--        <div class="text-center">-->
<!--          <p class="rD4HtsUG_hahmbh2Kj09 uyo8h_4Kh1IoUwm8bwJI _WfIfkoGCi0vvUrnNs4M g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Company information:</p>-->
<!--          <p class="K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">John's Garage Door LLC <br>Tax id: USXXXXXX</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="block text-center flex justify-center p-10 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">-->
<!--          <svg class="w-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>-->
<!--        </div>-->
<!--        <div class=" text-center">-->
<!--          <p class="rD4HtsUG_hahmbh2Kj09 uyo8h_4Kh1IoUwm8bwJI _WfIfkoGCi0vvUrnNs4M g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Address:</p>-->
<!--          <p class="K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">Los Angeles,  Late Avenue <br> Zip Code/Postal code:03875</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="block text-center flex justify-center p-10 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">-->
<!--          <svg class="w-12 text-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>-->
<!--        </div>-->
<!--        <div class="text-center">-->
<!--          <p class="rD4HtsUG_hahmbh2Kj09 uyo8h_4Kh1IoUwm8bwJI _WfIfkoGCi0vvUrnNs4M g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Call us:</p>-->
<!--          <p class="cq1ij1EsUw0V2rrqeYEc K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">Call us to speak to a member of our team. We are always happy to help.</p>-->
<!--          <p class="LYMps1kO2vF8HBymW3az text-primary-600 dark:text-primary-500">+1 (646) 786-5060</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


</div>
</template>

<style scoped>

</style>