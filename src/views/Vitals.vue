<template>
  <div class="vitals">
    <div class="goals">
      <div class="mhp-page-title-row mb-6 mt-8 px-4 d-flex align-center justify-space-between">
        <div>
          <h2 class="mhp-page-title">Vitals</h2>
        </div>

        <!-- <v-btn color="info" class="schedule-btn">
          <v-icon icon="mdi-plus" />
          New goal
        </v-btn> -->
      </div>

      <v-container class="mb-4">
        <v-row>
          <v-col cols="12" class="d-flex align-center justify-space-between">
            <RecordedVitals />
          </v-col>
        </v-row>

        <!-- <v-row>
          <v-col cols="12" md="1">
            <v-card class="text-center pt-4">
              <v-progress-circular :rotate="360" :size="100" :width="6" :model-value="75" color="teal">
                <v-icon icon="mdi-walk" size="x-large"></v-icon>
              </v-progress-circular>
              <v-card-text> Walking </v-card-text>
            </v-card>
          </v-col>
        </v-row> -->
      </v-container>
    </div>
  </div>
</template>

<script setup>
import RecordedVitals from '@/components/RecordedVitals.vue';
</script>

<style lang="scss"></style>
