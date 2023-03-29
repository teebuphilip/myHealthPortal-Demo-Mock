<template>
  <div class="goals">
    <div class="mhp-page-title-row mb-6 mt-8 px-4 d-flex align-center justify-space-between">
      <div>
        <span class="text-subtitle-1">Your</span>
        <h2 class="mhp-page-title">Goals</h2>
      </div>

      <v-btn color="info" class="schedule-btn" @click="newEvent = true">
        <v-icon icon="mdi-plus" />
        Add new
      </v-btn>
    </div>

    <v-container class="mb-4 elevation-3">
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-space-between">
          <h2 class="mhp-page-title">Daily activity</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="1" v-for="daily in dailyActivityList" :key="daily.id">
          <v-card class="text-center pt-4" @click="editActivity(daily)">
            <v-progress-circular :rotate="360" :size="100" :width="6" :model-value="75" :color="daily.color">
              <v-icon :icon="daily.icon" size="x-large"></v-icon>
            </v-progress-circular>
            <v-card-text> {{ daily.name }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mhp-container">
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-space-between">
          <h2 class="mhp-page-title">Weekly Goals</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3" v-for="weekly in weeklyActivityList" :key="weekly.id">
          <v-card>
            <p class="d-flex align-center justify-space-between px-4">
              <span class="text-subtitle-1 font-weight-medium"> {{ weekly.name }} </span>
              <v-chip size="x-small" :color="weekly.color" class="text-uppercase font-weight-bold">
                {{ weekly.type }}
              </v-chip>
            </p>
            <v-card-subtitle>{{ weekly.period }} weeks to achieve complete goal</v-card-subtitle>
            <v-card-text>
              <v-progress-linear rounded model-value="20" :height="6" :color="weekly.color"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="newEvent" width="550">
      <v-row>
        <v-col cols="10">
          <v-card class="mx-auto" max-width="500">
            <v-img class="align-end text-white" height="225" src="../assets/activity.jpg" cover>
              <v-card-title>Add new activity</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> {{ new Date().toLocaleDateString() }} </v-card-subtitle>

            <v-card-text>
              <v-text-field
                autocomplete="off"
                v-model="formData.name"
                label="Name"
                placeholder="Provide goal name"
                variant="underlined"
                :error-messages="nameError"
                @input="v$.name.$touch()"
              ></v-text-field>

              <v-select v-model="formData.period" :items="periodList" label="Period" variant="underlined"></v-select>

              <v-select
                v-model="formData.weeklyType"
                v-if="formData.period == periodList[1]"
                :items="weeklyType"
                label="Type"
                variant="underlined"
                @input="v$.weeklyType.$touch()"
                :error-messages="weeklyTypeError"
              ></v-select>

              <v-text-field
                type="number"
                v-if="formData.period == periodList[1]"
                v-model="formData.achievePeriod"
                label="Achieve period in weeks"
                placeholder="Provide weeks to achieve period"
                variant="underlined"
                hide-spin-buttons
                @input="v$.achievePeriod.$touch()"
                :error-messages="achievePeriodError"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn :disabled="v$.$invalid" color="primary" block @click="addNewActivity()">Start</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-btn icon dark @click="newEvent = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core';
import { required, requiredIf } from '@vuelidate/validators';
import { dailyActivity, weeklyActivity } from '@/utils/mocks/goals.js';

let newEvent = ref(false);
let periodList = ['Daily', 'Weekly'];
let weeklyType = ['Sporting', 'Academic', 'Health'];
const dailyActivityList = ref([...dailyActivity]);
const weeklyActivityList = ref([...weeklyActivity]);

let formData = reactive({
  name: '',
  period: '',
  weeklyType: '',
  achievePeriod: ''
});

const rules = computed(() => {
  return {
    name: { required },
    period: { required },
    weeklyType: {
      requiredIf: requiredIf(formData.period == periodList[1])
    },
    achievePeriod: {
      requiredIf: requiredIf(formData.period == periodList[1])
    }
  };
});

const v$ = useVuelidate(rules, formData);

const nameError = computed(() => {
  if (!v$.value.name.$dirty) {
    return;
  }
  return v$.value.name.$errors.map((e) => e.$message);
});

const weeklyTypeError = computed(() => {
  if (!v$.value.weeklyType.$dirty) {
    return;
  }
  return v$.value.weeklyType.$errors.map((e) => e.$message);
});

const achievePeriodError = computed(() => {
  if (!v$.value.achievePeriod.$dirty) {
    return;
  }
  return v$.value.achievePeriod.$errors.map((e) => e.$message);
});

function addNewActivity() {
  if (formData.period == periodList[0]) {
    dailyActivityList.value.push({
      id: Math.floor(Math.random() * 101),
      name: formData.name,
      icon: 'mdi-firebase',
      color: randomHexColor()
    });
  }

  if (formData.period == periodList[1]) {
    weeklyActivityList.value.push({
      id: Math.floor(Math.random() * 101),
      name: formData.name,
      type: formData.weeklyType,
      period: formData.achievePeriod,
      icon: 'mdi-fire',
      color: randomHexColor()
    });
  }

  newEvent.value = false;
  formData = reactive({
    name: '',
    period: '',
    weeklyType: '',
    achievePeriod: ''
  });
}

function editActivity(data) {
  console.log(data);
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}
function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}
function randomHexColor() {
  let [r, g, b] = randomRgbColor();
  let hr = r.toString(16).padStart(2, '0');
  let hg = g.toString(16).padStart(2, '0');
  let hb = b.toString(16).padStart(2, '0');
  return '#' + hr + hg + hb;
}
</script>

<style lang="scss"></style>
