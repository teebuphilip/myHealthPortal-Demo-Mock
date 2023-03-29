<template>
  <div class="registration mhp-wrap">
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
              v-model="formData.name"
              label="Name"
              placeholder="Provide your name"
              variant="underlined"
              :error-messages="nameError"
              @input="v$.name.$touch()"
            ></v-text-field>
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
              placeholder="At least 8 characters"
              type="password"
              variant="underlined"
              :error-messages="passwordError"
              @input="v$.password.$touch()"
            ></v-text-field>
            <v-text-field
              autocomplete="off"
              v-model="formData.repeatPassword"
              label="Repeat password"
              placeholder="At least 8 characters"
              type="password"
              variant="underlined"
              :error-messages="repeatPasswordError"
              @input="v$.repeatPassword.$touch()"
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
              Sign Up
            </v-btn>
            <span class="text-primary">
              Already have an account?
              <router-link to="/login" class="font-weight-medium text-decoration-none text-primary">
                Sign In
              </router-link>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
const router = useRouter();
let loading = ref(false);

//state
const formData = reactive({
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
});
const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeatPassword: { required, sameAs: sameAs(formData.password) }
  };
});

const v$ = useVuelidate(rules, formData);

const nameError = computed(() => {
  if (!v$.value.name.$dirty) {
    return;
  }
  return v$.value.name.$errors.map((e) => e.$message);
});

const emailError = computed(() => {
  if (!v$.value.email.$dirty) {
    return;
  }
  return v$.value.email.$errors.map((e) => e.$message);
});

const passwordError = computed(() => {
  if (!v$.value.password.$dirty) {
    return;
  }
  return v$.value.password.$errors.map((e) => e.$message);
});

const repeatPasswordError = computed(() => {
  if (!v$.value.repeatPassword.$dirty) {
    return;
  }
  return v$.value.repeatPassword.$errors.map((e) => e.$message);
});

function setClient() {
  loading.value = true;
  localStorage.setItem('userData', JSON.stringify(formData));
  setTimeout(() => {
    loading.value = false;
    router.push({ name: 'login' });
  }, 2000);
}
</script>

<style lang="scss">
.registration {
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
    position: fixed;
    bottom: 12%;
    right: 1%;
    z-index: 99;
  }
}
</style>
