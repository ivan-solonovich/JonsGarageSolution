<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },
  methods: {
    closePopUp(){
      this.$emit('closePopUp')
    },
    onToggle() {
      this.isOpen = !this.isOpen;

    }
  }
}
</script>

<template>

    <transition name="fade">
      <div >
        <div

            class="absolute pt-20  inset-0 z-50"
        >
          <div
              class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
          >
            <div>
              <h2 class="text-2xl text-center font-bold py-4">Call Us </h2>
              <div  class="w-full flex justify-center  p-2">
                <a class="phone" href="tel:+18183177803">
                  <button  class="bg-green-800 hover:bg-gray-400 rounded-[.5rem] text-white  py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span> +1 818 317 78 03</span>
                  </button>
                </a>
              </div>

              <h2 class="text-2xl text-center font-bold py-4">Or</h2>

              <div class="text-center p-3 flex-auto justify-center leading-6">
                <a class="messenger-icon-button" href="https://wa.me/%2B18183177803">
                <div class="w-full flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                       fill="#40c351"
                       width="64" height="64"
                       viewBox="0 0 48 48">
                    <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold py-4">Send us WhatsApp message </h2>
                <p class="text-md text-gray-500 px-8">




                </p>
                </a>
              </div>

              <div class="p-3 mr-2 mt-2  text-center space-x-4 md:block">
                <RouterLink :to="{name:'contact'}" active-class="none" class="navigate">
                <button
                    @click="closePopUp"
                    class="mb-2 pr-2 md:mb-0 bg-orange-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-gray-100"
                >
                  Appoint calling
                </button>
                <button
                    @click="closePopUp"
                    class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                >
                  Close
                </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>

</template>

<style scoped>

</style>