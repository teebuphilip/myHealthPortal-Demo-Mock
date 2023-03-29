// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
      },
      {
        path: 'registration',
        name: 'registration',
        component: () => import(/* webpackChunkName: "registration" */ '@/views/Registration.vue')
      },
      {
        path: 'appointments',
        name: 'appointments',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "appointments" */ '@/views/Appointments.vue')
      },
      {
        path: 'appointment/:id',
        name: 'appointmentDetails',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "appointment-details" */ '@/views/AppointmentDetails.vue')
      },
      {
        path: 'medications',
        name: 'medications',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "medications" */ '@/views/Medications.vue')
      },
      {
        path: 'medication/:id',
        name: 'medicationDetails',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "medication-details" */ '@/views/MedicationDetails.vue')
      },
      {
        path: 'test-results',
        name: 'testResults',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "testResults" */ '@/views/TestResults.vue')
      },
      {
        path: 'test-result/:id',
        name: 'testResultDetails',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "testResult-details" */ '@/views/TestResultDetails.vue')
      },
      {
        path: 'vitals',
        name: 'vitals',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "vitals" */ '@/views/Vitals.vue')
      },
      {
        path: 'goals',
        name: 'goals',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "goals" */ '@/views/Goals.vue')
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/ErrorNotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const storedData = localStorage.getItem('isLoggedIn');
    if (!storedData) {
      return { name: 'login' };
    }
    const isLoggedIn = JSON.parse(storedData);
    // make sure the user is authenticated
    // ❗️ Avoid an infinite redirect
    if (!isLoggedIn) {
      // redirect the user to the login page
      return { name: 'login' };
    }
  }
});

export default router;
