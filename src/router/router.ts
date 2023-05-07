import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../pages/PageHome.vue'
import Trips from '../pages/PageTrips.vue'
import Flights from '../pages/PageFlights.vue'
import Accommodations from '../pages/PageAccommodations.vue'
import Itinerary from '../pages/PageItinerary.vue'
import Bookings from '../pages/PageBookings.vue'
import Profile from '../pages/PageProfile.vue'
import Login from '../pages/PageLogin.vue'
import Register from '../pages/PageRegister.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/trips',
    name: 'trips',
    component: Trips
  },
  {
    path: '/flights',
    name: 'flights',
    component: Flights
  },
  {
    path: '/accommodations',
    name: 'accommodations',
    component: Accommodations
  },
  {
    path: '/itinerary',
    name: 'itinerary',
    component: Itinerary
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: Bookings
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
