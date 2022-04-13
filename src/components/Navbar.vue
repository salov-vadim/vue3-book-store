<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">BOOKSTORE</router-link>
      <div class="navbar-nav">
        <router-link class="nav-link" to="/cart" style="color: teal">
          <i class="bi bi-cart4 mr-4" style="font-size: 20px; color: beige" />
          {{ getCartItemsLength }} (книг) {{ getTotal }} ₴
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const getCartItemsLength = computed(() => store.getters.getCartItems.length);
const getTotal = computed(() => store.getters.getTotal);

</script>
