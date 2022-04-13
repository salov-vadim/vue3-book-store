<template>
  <Navbar />
  <div class="container">
    <router-view v-slot="{Component}">
      <transition enter-active-class="animate__animated animate__bounceInLeft">
        <component :is="Component" />
      </transition>
    </router-view>
  <Alert/>
  </div>

</template>
<script>
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

export default {
  components: {
    Alert,
    Navbar
  }
};

</script>
<style>

</style>
