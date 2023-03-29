<template>
  <div class="appointments">
    <section class="mhp-title-section">
      <h3 class="mhp-page-title text-primary my-5">Appointments</h3>
    </section>

    <v-container v-if="appointments.length" class="mhp-container">
      <v-row>
        <v-col offset-md="9" sm="12" md="3" class="text-end">
          <v-btn color="info" class="schedule-btn">
            <v-icon icon="mdi-plus" />
            Schedule an appointment
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" md="5">
          <h4 class="text-subtitle-1 font-weight-medium text-uppercase mb-4 text-primary">Upcoming appointments</h4>
          <v-card color="secondary">
            <v-card-text>
              <v-card
                class="appointment-card px-4 py-2 mb-3"
                v-for="appointment in futureAppointments"
                :key="appointment.id"
                :to="{ name: 'appointmentDetails', params: { id: appointment.id } }"
              >
                <v-row>
                  <v-col cols="6" md="6" lg="2">
                    <div class="text-h6 text-lg-center text-primary">
                      <span class="mr-1">{{ getDay(appointment.date) }}</span>
                      <span class="text-uppercase">{{ getMonth(appointment.date) }}</span>
                      <br />
                      <span class="text-uppercase">{{ getYear(appointment.date) }}</span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <div class="text-h6">
                      <span class="text-uppercase text-primary">{{ appointment.place }}</span>
                      <br />
                      <span class="appointment-doctor">{{ appointment.doctor }}</span>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3">
                    <div class="ml-auto text-base font-weight-medium text-center text-lg-end">
                      {{ appointment.department }}
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3">
                    <div class="text-h6 appointment-time text-center text-lg-end">
                      <span>{{ appointment.time }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="5">
          <h4 class="text-subtitle-1 font-weight-medium text-uppercase mb-4 text-primary">Past appointments</h4>
          <v-card>
            <v-card-text>
              <v-card
                class="appointment-card px-4 py-2 mb-3"
                v-for="appointment in pastAppointments"
                :key="appointment.id"
                :to="{ name: 'appointmentDetails', params: { id: appointment.id } }"
              >
                <v-row>
                  <v-col cols="6" md="6" lg="2">
                    <div class="text-h6 text-lg-center text-primary">
                      <span class="mr-1">{{ getDay(appointment.date) }}</span>
                      <span class="text-uppercase">{{ getMonth(appointment.date) }}</span>
                      <br />
                      <span class="text-uppercase">{{ getYear(appointment.date) }}</span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <div class="text-h6">
                      <span class="text-uppercase text-primary">{{ appointment.place }}</span>
                      <br />
                      <span class="appointment-doctor">{{ appointment.doctor }}</span>
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3">
                    <div class="ml-auto text-base font-weight-medium text-center text-lg-end">
                      {{ appointment.department }}
                    </div>
                  </v-col>
                  <v-col cols="12" lg="3">
                    <div class="text-h6 appointment-time text-center text-lg-end">
                      <span>{{ appointment.time }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div v-else class="no-data">
      <span class="message">No appointments yet. </span>
    </div>
  </div>
</template>
<script setup>
import { monthNames } from '@/utils/monthNames.js';

const appointments = [1];
const futureAppointments = [
  {
    id: '1',
    date: '09.05.2023',
    place: 'office visit',
    doctor: 'Dr White',
    department: 'Family Medicine Weston',
    time: '10:15 AM',
    period: 'Upcoming'
  },
  {
    id: '21',
    date: '10.28.2023',
    place: 'follow up',
    doctor: 'Dr Patrick',
    department: 'Internal Medicine Krupa',
    time: '12:45 PM',
    period: 'Upcoming'
  }
];
const pastAppointments = [
  {
    id: '1',
    date: '01.01.2023',
    place: 'office visit',
    doctor: 'Dr White',
    department: 'Family Medicine Weston',
    time: '10:15 AM',
    period: 'Past'
  },
  {
    id: '2',
    date: '12.28.2022',
    place: 'follow up',
    doctor: 'Dr Patrick',
    department: 'Internal Medicine Krupa',
    time: '12:45 PM',
    period: 'Past'
  },
  {
    id: '12',
    date: '11.16.2023',
    place: 'new patient',
    doctor: 'Dr Patrick',
    department: 'Internal Medicine Krupa',
    time: '9:30 AM',
    period: 'Past'
  }
];

function getDay(appointmentDate) {
  const [month, day, year] = appointmentDate.split('.');
  return day;
}

function getYear(appointmentDate) {
  const [month, day, year] = appointmentDate.split('.');
  return year;
}

function getMonth(appointmentDate) {
  const [month, day, year] = appointmentDate.split('.');
  const properDate = new Date(`${year}-${month}-${day}`);
  return `${getMonthName(properDate).slice(0, 3)}`;
}

function getMonthName(date) {
  return monthNames[date.getMonth()];
}
</script>
<style lang="scss">
@import '../styles/variables.scss';

.appointments {
  .appointment-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    .appointment-doctor {
      color: $grey;
    }

    .appointment-time {
      min-width: 90px;
      text-align: end;
    }
  }

  .schedule-btn {
    color: white !important;
  }
}
</style>
