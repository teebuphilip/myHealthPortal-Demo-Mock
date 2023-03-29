<template>
  <div class="recorded-vitals">
    <v-card class="vitals-card">
      <v-card-title>Recorded Vitals</v-card-title>
      <v-card-subtitle>09/14/23</v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-center flex-wrap">
        <v-card class="vital-item text-h5 pa-2 mr-3">
          <span class="text-uppercase font-weight-medium text-subtitle-1">Height</span>
          <v-icon icon="mdi-human-male-height" size="x-large" class="my-4"></v-icon>
          <span>182 cm</span>
        </v-card>
        <v-card class="vital-item text-h5 pa-2 mr-3" color="#8BBB6F">
          <span class="text-uppercase font-weight-medium text-subtitle-1">Weight</span>
          <v-icon icon="mdi-weight" size="x-large" class="my-4"></v-icon>
          <span>85 kg</span>
        </v-card>
        <v-card class="vital-item text-h5 pa-2 mr-3">
          <span class="text-uppercase font-weight-medium text-subtitle-1">Age</span>
          <v-icon icon="mdi-chart-donut" size="x-large" class="my-4"></v-icon>
          <span>55 years</span>
        </v-card>
        <v-card class="vital-item text-h5 pa-2 mr-3" color="#E88063">
          <span class="text-uppercase font-weight-medium text-subtitle-1">Blood pressure</span>
          <v-icon icon="mdi-blood-bag" size="x-large" class="my-4"></v-icon>
          <span>140 / 90</span>
        </v-card>
        <v-card class="vital-item text-h5 pa-2" color="warning">
          <span class="text-uppercase font-weight-medium text-subtitle-1">BMI</span>
          <v-icon icon="mdi-chart-arc" size="x-large" class="my-4"></v-icon>
          <span>19.5</span>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup></script>

<style lang="scss">
.recorded-vitals {
  .vital-item {
    display: flex;
    width: 160px;
    height: 160px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #8bbb6f;
    &-title {
      font-size: 18px;
    }
  }
}
</style>
