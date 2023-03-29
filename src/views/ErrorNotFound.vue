<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2 mb-8" style="opacity: 0.4">Oops. Nothing here...</div>

      <v-btn size="x-large" color="white" class="text-primary" to="/"> Go Home</v-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound'
});
</script>

<style lang="scss">
.fullscreen {
  width: 100vw;
  height: 100vh;
}
</style>
