<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'trips' }">Trips</b-nav-item>
          <b-nav-item :to="{ name: 'flights' }">Flights</b-nav-item>
          <b-nav-item :to="{ name: 'accommodations' }">Accommodations</b-nav-item>
          <b-nav-item :to="{ name: 'itinerary' }">Itinerary</b-nav-item>
          <b-nav-item :to="{ name: 'bookings' }">Bookings</b-nav-item>
          <b-nav-item :to="{ name: 'profile' }">Profile</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Account" right>
            <b-dropdown-item :to="{ name: 'login' }">Log in</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'register' }">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  BNavbar,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem
} from 'bootstrap-vue'

export default {
  components: {
    BNavbar,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem
  }
}
</script>
