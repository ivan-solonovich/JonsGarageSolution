<script setup>

</script>

<template>
  <div class="w-full flex justify-center">
    <div class="formkit-outer" data-family="text" data-type="tel" data-empty="true" data-complete="true">
      <FormKit
          type="tel"
          label="Phone number"
          placeholder="xxx-xxx-xxxx"
          validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          :validation-messages="{
    matches: 'Phone number must be in the format xxx-xxx-xxxx',
  }"
          validation-visibility="dirty"
      />
      <div class="formkit-wrapper">
        <label class="formkit-label" for="input_0">Phone number</label>
        <div class="formkit-inner">
          <input placeholder="xxx-xxx-xxxx" class="formkit-input" type="tel" name="tel_1" id="input_0">
        </div>
      </div>
    </div>



</div>
</template>

<style scoped>

</style>