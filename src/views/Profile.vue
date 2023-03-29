<template>
  <div class="profile">
    <div class="mhp-page-title-row d-flex justify-space-between align-center mb-6 mt-8 px-4">
      <h2 class="mhp-page-title">My profile</h2>

      <v-btn color="teal-accent-4">Edit <v-icon class="ml-2">mdi-pencil</v-icon></v-btn>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="3" class="d-flex flex-column">
          <v-card class="profile-card flex-grow-1">
            <v-avatar color="grey" size="150" class="profile-avatar elevation-5">
              <!-- https://www.comicbookraw.com/wp-content/uploads/2021/01/Marvel-rasskazali-pochemu-Yenota-zovut-Raketa.jpg -->
              <v-img cover src="../assets/avatar.png"></v-img>
            </v-avatar>

            <v-card-title class="text-center pt-0">{{ client.name }}</v-card-title>
            <v-card-subtitle class="text-center font-weight-medium">{{ client.number }}</v-card-subtitle>
            <v-card-subtitle class="text-center font-weight-medium">{{ client.email }}</v-card-subtitle>

            <v-card-text>
              <h6 class="text-h6">Details</h6>
              <v-divider class="mt-4"></v-divider>
              <v-list density="compact">
                <v-list-item class="pl-0">
                  <v-list-item-title>
                    <h6 class="font-weight-medium text-subtitle-2">
                      Username: <span class="text-body-2"> @johndoe</span>
                    </h6>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-title>
                    <h6 class="font-weight-medium text-subtitle-2">Sex: <span class="text-body-2"> Male</span></h6>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-title>
                    <h6 class="font-weight-medium text-subtitle-2">
                      Tax ID: <span class="text-body-2"> Tax-8894</span>
                    </h6>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-title>
                    <h6 class="font-weight-medium text-subtitle-2">
                      Contact: <span class="text-body-2"> (829) 537-0057</span>
                    </h6>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-title>
                    <h6 class="font-weight-medium text-subtitle-2">
                      Language: <span class="text-body-2"> English</span>
                    </h6>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-title>
                    <h6 class="font-weight-medium text-subtitle-2">Country: <span class="text-body-2"> USA</span></h6>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="7" class="d-flex flex-column">
          <RecordedVitals class="mb-4 profile-vitals" @click="$router.push({ name: 'vitals' })" />

          <v-card @click="$router.push({ name: 'goals' })">
            <v-card-title>Daily activity</v-card-title>
            <v-card-subtitle>09/14/23</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text class="d-flex justify-center flex-wrap">
              <v-card class="text-center pt-4 goal-item mr-3" v-for="daily in dailyActivityList" :key="daily.id">
                <v-progress-circular :rotate="360" :size="100" :width="6" :model-value="75" :color="daily.color">
                  <v-icon :icon="daily.icon" size="x-large"></v-icon>
                </v-progress-circular>
                <v-card-text> {{ daily.name }} </v-card-text>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="3">
          <v-card class="allergies-card">
            <v-card-title>Allergies</v-card-title>
            <v-divider></v-divider>
            <v-list :items="allergies"></v-list>

            <v-card-actions class="justify-center">
              <v-btn block variant="flat" color="teal-accent-4" class="btn">Update allergies</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" class="d-flex flex-column">
          <v-card class="notifications-card">
            <v-card-title>Notifications</v-card-title>
            <v-divider></v-divider>
            <v-list>
              <!-- <v-list-subheader>REPORTS</v-list-subheader> -->

              <v-list-item v-for="notification in notifications" :key="notification.value" active-color="primary">
                <template v-slot:append>
                  <v-switch
                    v-model="enabledNotifications"
                    :value="notification.value"
                    color="primary"
                    inset
                    hide-details
                  ></v-switch>
                </template>

                <v-list-item-title v-text="notification.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import Dashboard from './Dashboard.vue';
import RecordedVitals from '@/components/RecordedVitals.vue';
import { dailyActivity } from '@/utils/mocks/goals.js';

import { ref } from 'vue';
const client = {
  name: 'John Doe',
  age: 60,
  height: 180,
  number: '919-255-3466',
  email: 'john@gmail.com'
};

const allergies = [
  {
    title: 'Peaches',
    value: 1
  },
  {
    title: 'Insulin',
    value: 2
  },
  {
    title: 'Aspirin',
    value: 3
  }
];

const notifications = [
  { text: 'New appointments', value: 'appointments' },
  { text: 'New medications', value: 'medications' },
  { text: 'New lab results', value: 'testResults' }
];

const dailyActivityList = ref([...dailyActivity]);

const enabledNotifications = ref([]);
</script>
<style lang="scss">
.profile {
  .profile-card {
    position: relative;
    overflow: visible !important;
    min-height: 250px;
  }
  .profile-avatar {
    position: relative !important;
    z-index: 5;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
  }

  .profile-vitals {
    &:hover {
      cursor: pointer;
    }
  }

  .goal-item {
    width: 160px;
    height: 170px;
  }
}
</style>
