<template>
  <div class="login mhp-wrap">
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" sm="12" md="4">
        <v-card class="px-10 pt-7 pb-10">
          <v-card-title class="d-flex mb-8">
            <v-icon icon="mdi-hospital-box-outline" />
            <div class="vertical-divider mx-2"></div>
            <span class="xx-toolbar-title"> My Health Portal </span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              autocomplete="off"
              v-model="formData.email"
              label="Email"
              placeholder="Provide your email"
              type="email"
              variant="underlined"
              :error-messages="emailError"
              @input="v$.email.$touch()"
            ></v-text-field>
            <v-text-field
              autocomplete="off"
              v-model="formData.password"
              label="Password"
              type="password"
              variant="underlined"
            ></v-text-field>
          </v-card-text>
          <v-card-text class="d-flex flex-wrap justify-center">
            <v-btn
              :loading="loading"
              :disabled="v$.$invalid"
              @click="setClient"
              variant="flat"
              class="btn sign-in mb-12"
              color="primary"
              size="large"
            >
              Sign In
            </v-btn>
            <span class="text-primary">
              Don’t have an account?
              <router-link to="/registration" class="font-weight-medium text-decoration-none text-primary">
                Sign Up
              </router-link>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-alert
      v-model="showAlertPopup"
      icon="mdi-alert-circle-outline"
      type="error"
      title="Opps!"
      closable
      text="It looks like the email address or password is incorrect"
      class="login-alert"
    ></v-alert>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
const router = useRouter();
let loading = ref(false);
let showAlertPopup = ref(false);
//state
const formData = reactive({
  email: '',
  password: ''
});

const rules = computed(() => {
  return {
    email: { required, email }
  };
});

const v$ = useVuelidate(rules, formData);
const emailError = computed(() => {
  if (!v$.value.email.$dirty) {
    return;
  }
  return v$.value.email.$errors.map((e) => e.$message);
});

function setClient() {
  loading.value = true;
  // const storedData = localStorage.getItem('userData');
  // if (!storedData) {
  //   loading.value = false;
  //   showAlert();
  //   return;
  // }

  // const { email, password } = JSON.parse(storedData);
  const mockedEmail = 'johndoe@email.com';
  const mockedPassword = '12345';

  setTimeout(() => {
    loading.value = false;
    if (formData.email == mockedEmail && mockedPassword == formData.password) {
      localStorage.setItem('isLoggedIn', true);
      router.push({ name: 'dashboard' });
    } else {
      showAlert();
    }
  }, 1500);
}

function showAlert() {
  showAlertPopup.value = true;
  setTimeout(() => {
    showAlertPopup.value = false;
  }, 3000);
}
</script>

<style lang="scss">
.login {
  .sign-in {
    width: 100%;
  }
  .vertical-divider {
    height: 24px;
    border-width: 2px;
  }

  &-action-btn {
    width: 100%;
  }

  &-alert {
    max-width: 500px;
    position: fixed !important;
    bottom: 2%;
    right: 1%;
    z-index: 99;
  }
}
</style>
