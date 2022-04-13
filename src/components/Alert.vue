<template>
  <transition name="fade">
    <div class="alert alert-dark"
         style="position:fixed; left: 40%; top:0" v-if="store.getters.getAlert">
      Ваш заказ на сумму {{store.getters.getTotalOrder}} ₴ оформлен!
    </div>
  </transition>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .9s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>