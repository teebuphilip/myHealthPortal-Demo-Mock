<template>
  <div class="dashboard d-flex justify-center align-center">
    <div class="dashboard-bg"></div>
    <v-container>
      <!-- <h3 class="mhp-page-title text-primary mb-6">Dashboard</h3> -->
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="8" lg="6">
          <v-card-text class="text-center">
            <div class="d-flex justify-space-around flex-wrap mb-4">
              <!-- Appointments -->
              <v-card :to="{ name: 'appointments' }" class="flex-grow-1 dashboard-card mb-4 elevation-16">
                <v-btn size="x-large" color="info" icon="mdi-calendar" class="mb-3"></v-btn>
                <h6 class="text-base font-weight-medium">Appointments</h6>
              </v-card>
              <!-- Medications -->
              <v-card :to="{ name: 'medications' }" class="flex-grow-1 dashboard-card mb-4 elevation-16">
                <v-btn size="x-large" color="info" icon="mdi-pill-multiple" class="mb-3"></v-btn>
                <h6 class="text-base font-weight-medium">Medications</h6>
              </v-card>
              <!-- Test results -->
              <v-card :to="{ name: 'testResults' }" class="flex-grow-1 dashboard-card mb-4 elevation-16">
                <v-btn size="x-large" color="info" icon="mdi-test-tube" class="mb-3"></v-btn>
                <h6 class="text-base font-weight-medium">Test Result</h6>
              </v-card>
            </div>
            <h1 class="entry-title text-white d-none d-md-block">Welcome <br />to the "My Health" portal</h1>
            <div class="d-flex justify-space-around flex-wrap">
              <!-- Vitals -->
              <v-card :to="{ name: 'vitals' }" class="flex-grow-1 dashboard-card mb-4 elevation-16">
                <v-btn size="x-large" color="info" icon="mdi-heart-pulse" class="mb-3"></v-btn>
                <h6 class="text-base font-weight-medium">Health Vitals</h6>
              </v-card>
              <!-- Goals -->
              <v-card :to="{ name: 'goals' }" class="flex-grow-1 dashboard-card mb-4 elevation-16">
                <v-btn size="x-large" color="info" icon="mdi-chart-bar" class="mb-3"></v-btn>
                <h6 class="text-base font-weight-medium">Health Goals</h6>
              </v-card>
              <!-- Profile -->
              <v-card :to="{ name: 'profile' }" class="flex-grow-1 dashboard-card mb-4 elevation-16">
                <v-btn size="x-large" color="info" icon="mdi-card-account-details-outline" class="mb-3"></v-btn>
                <h6 class="text-base font-weight-medium">My profile</h6>
              </v-card>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// name: 'string',
// dosage: 'string',
// type: 'string',
// notes:'string'
import { medicationsList } from '@/utils/mocks/medicationsList.js';
import { appointmentsList } from '@/utils/mocks/appointmentsList.js';
import { results } from '@/utils/mocks/results.js';
import { monthNames } from '@/utils/monthNames.js';

function getTestDate(testDate) {
  const [month, day, year] = testDate.split('.');
  const properDate = new Date(`${year}-${month}-${day}`);
  return `${getMonthName(properDate).slice(0, 3)} ${day}, ${year}`;
}

function getMonthName(date) {
  return monthNames[date.getMonth()];
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.dashboard {
  height: calc(100vh - 64px);
  background: url('../assets/dashboard.jpg') no-repeat center center;
  background-size: cover;
  .type-title,
  .type-subtitle {
    letter-spacing: 0px;
    color: #2b2b2b;
    opacity: 1;
    background-color: $secondary;
  }
  .type-subtitle {
    box-shadow: 0px 1px 2px rgb(0 0 0 / 8%);
  }

  .entry-title {
    font-size: 48px;
  }

  .dashboard-card-wrap {
    border-radius: 50%;
  }

  .dashboard-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 165px;
    width: 100%;
    height: 165px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;

    &-title {
      font-size: 16px;
      letter-spacing: 0px;
      color: #2b2b2b;
      opacity: 1;
    }

    &-subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      letter-spacing: 0px;
      color: #2b2b2b;
      opacity: 1;
    }
  }

  .empty-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    &-info {
      color: #c4c7d1;
      font-size: 18px;
    }
  }
}
</style>
