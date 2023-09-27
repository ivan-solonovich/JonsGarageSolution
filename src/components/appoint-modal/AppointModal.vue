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
              <div class="text-center p-3 flex-auto justify-center leading-6">
                <div class="w-full flex justify-center">
                  <svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9be391"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#1a56db" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04254 8.48441 11.0315 12.4724Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <h2 class="text-2xl font-bold py-4">Contact Us</h2>
                <p class="text-md text-gray-500 px-8">

                  <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                      </div>

                      <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                      </div>

                    </div>
                    <div class="mb-6">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
                    </div>

                  </form>

                </p>
              </div>
              <div class="p-3 mt-2 text-center space-x-4 md:block">
                <button
                    class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                >
                  Appoint calling
                </button>
                <button
                    @click="closePopUp"
                    class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>

</template>

<style scoped>

</style>