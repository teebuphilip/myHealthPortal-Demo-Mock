<template>
  <v-app>
    <DefaultBar />

    <DefaultView />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue';
import DefaultView from './View.vue';
</script>

<style>
.v-application {
  background-color: #f8f8f8 !important;
}
</style>
