<template>
  <v-app-bar flat>
    <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">
      <v-icon icon="mdi-hospital-box-outline" />
      <div class="vertical-divider mx-2"></div>
      My Health Portal
    </v-app-bar-title>

    <v-spacer class="d-none d-sm-flex"></v-spacer>

    <v-btn flat :to="{ name: 'appointments' }" color="#777777" class="d-none d-md-flex">
      <v-icon class="mr-2">mdi-calendar-multiselect</v-icon>
      Appointments
    </v-btn>

    <v-btn flat :to="{ name: 'medications' }" color="#777777" class="d-none d-md-flex">
      <v-icon class="mr-2">mdi-pill-multiple</v-icon>
      Medications
    </v-btn>

    <v-btn flat :to="{ name: 'testResults' }" color="#777777" class="d-none d-md-flex">
      <v-icon class="mr-2">mdi-test-tube</v-icon>
      Test results
    </v-btn>

    <div class="d-flex align-center px-4">
      <!-- <p class="d-flex flex-column text-end mb-0 mr-3">
        <span class="user-name font-weight-medium">John</span>
        <small class="user-position primary--text">Doe</small>
      </p> -->
      <v-menu left bottom offset-y rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="teal-lighten-3" size="large">
              <!-- <span class="text-h6">JD</span> -->
              <v-img cover src="../../assets/avatar.png" alt="John"></v-img>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item :to="{ name: 'profile' }">
            <v-list-item-title>
              <v-icon>mdi-badge-account</v-icon>
              My profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'appointments' }">
            <v-list-item-title>
              <v-icon>mdi-calendar-multiselect</v-icon>
              Appointments
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'medications' }">
            <v-list-item-title>
              <v-icon>mdi-pill-multiple</v-icon>
              Medications
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'testResults' }">
            <v-list-item-title>
              <v-icon>mdi-test-tube</v-icon>
              Test results
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="signOut">
            <v-list-item-title>
              <v-icon>mdi-exit-to-app</v-icon>
              Sig Out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// const pages = [{ name: 'My profile', link: 'profile' }, { name: 'Sign out' }];
function signOut() {
  localStorage.setItem('isLoggedIn', false);
  router.push({ name: 'login' });
}
</script>

<style lang="scss">
.v-toolbar-title__placeholder {
  display: flex;
  align-items: center;
  font-weight: medium;
  font-size: 24px;
  color: #c4c7d1;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
}

.vertical-divider {
  height: 50px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border-left: 1px solid lightgrey;
}

.user-name,
.user-position {
  letter-spacing: 0;
  color: #53959f;
}

.user-name {
  font-size: 14px;
}

.user-position {
  font-size: 12px;
}
</style>
