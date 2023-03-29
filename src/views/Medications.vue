<template>
  <div class="medications">
    <div class="mhp-subheader-section">
      <v-container class="px-0">
        <span class="mhp-subheader-section-description">
          Please review your medications and verified that list is up to date.
        </span>
        <span class="mhp-subheader-section-description text-error"> Call 911 if you have an emergency </span>
      </v-container>
    </div>

    <div class="mhp-page-title-row d-flex justify-space-between align-center mb-6 mt-8 px-4">
      <h2 class="mhp-page-title">Medications that are prescribed</h2>
    </div>

    <v-container v-if="medicationsList.length">
      <div>
        <!-- <v-row class="d-none d-md-flex">
          <v-col cols="12" md="4"> Name </v-col>
          <v-col cols="12" md="4"> Frequency </v-col>
        </v-row> -->
        <v-row>
          <v-expansion-panels multiple>
            <v-expansion-panel v-for="medication in medicationsList" :key="medication.id">
              <v-expansion-panel-title>
                <v-row>
                  <v-col cols="12" md="4">
                    <h4 class="font-weight-thin mb-2">Name</h4>
                    <span class="text-base font-weight-medium">{{ medication.name }} {{ medication.dosage }}</span>
                  </v-col>
                  <v-col cols="12" md="3" class="font-weight-medium">
                    <h4 class="font-weight-thin mb-2">Type</h4>
                    <span class="text-base font-weight-medium">
                      {{ medication.type }}
                    </span>
                  </v-col>
                  <v-col cols="12" md="5" class="font-weight-medium">
                    <h4 class="font-weight-thin mb-2">Frequency</h4>
                    <span class="text-base font-weight-medium">
                      {{ medication.frequency }}
                    </span>
                  </v-col>
                </v-row>

                <template v-slot:actions="{ expanded }">
                  <div class="d-none d-md-block">
                    <v-btn v-if="expanded" color="secondary" class="btn">
                      <v-icon size="large" color="info" icon="mdi-minus"></v-icon>
                      Hide details
                    </v-btn>
                    <v-btn v-else color="info" class="btn">
                      <v-icon size="large" color="primary" icon="mdi-plus"></v-icon>
                      Open details
                    </v-btn>
                  </div>

                  <div class="d-block d-md-none">
                    <v-icon :color="expanded ? 'info' : 'primary'" :icon="expanded ? 'mdi-minus' : 'mdi-plus'"></v-icon>
                  </div>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <h4 class="font-weight-thin mb-2">Prescription details</h4>
                    <p class="mb-0">
                      <span class="text-grey-lighten-1">Prescribed:</span>
                      <span class="text-primary">1 Jun 2023</span>
                    </p>
                    <p class="mb-0">
                      <span class="text-grey-lighten-1">Approved by:</span>
                      <span class="text-primary">Steven Hodak</span>
                    </p>
                  </v-col>
                  <v-col cols="12" md="4">
                    <h4 class="font-weight-thin mb-2">Refill details</h4>
                    <p class="mb-0">
                      <span class="text-grey-lighten-1">Quantity:</span>
                      <span class="text-primary">90 tablets</span>
                    </p>
                    <p class="mb-0">
                      <span class="text-grey-lighten-1">Day supply:</span>
                      <span class="text-primary">90</span>
                    </p>
                  </v-col>
                  <v-col cols="12" md="4">
                    <h4 class="font-weight-thin mb-2">Pharmacy details</h4>
                    <span class="text-grey-lighten-1"
                      >CVS/pharmacy #3719 Forest St, Satamford, CT 06901-1877 203-363-0627 203-425-9924 11 Firest St,
                      Stamford CT 06901-1877 203-363-0627</span
                    >
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
    </v-container>
    <div v-else class="no-data">
      <span class="message">No medications list received yet. </span>
    </div>
  </div>
</template>
<script setup>
import { medicationsList } from '@/utils/mocks/medicationsList.js';
</script>
<style lang="scss">
.medications {
  .notes {
    overflow: hidden;
    white-space: nowrap;
    max-width: 800px;
    text-overflow: ellipsis;
  }
}
</style>
