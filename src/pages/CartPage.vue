<template>
  <div class="cart">
    <h1 class="text-center my-4">
      Заказанные книги
    </h1>

    <table class="table">
      <thead class="thead-light">
      <tr>
        <th scope="col">Книга</th>
        <th scope="col" style="text-align: center">Описание</th>
        <th scope="col">Цена</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in cartBooks">
        <td><img :src="book.image" alt=""></td>
        <td>{{ book.description }}</td>
        <td style="min-width: 80px">{{ book.price }} ₴</td>
      </tr>
      </tbody>
    </table>
    <h4 class="text-end">Сумма: {{ total }} ₴</h4>
    <div class="d-flex justify-content-center my-3">
      <button class="btn btn-primary" :disabled="cartBooks.length===0" @click="checkout">Оформить заказ</button>
    </div>

  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const cartBooks = computed(() => store.getters.getCartItems);
const total = computed(() => store.getters.getTotal);

const checkout = () => {
  store.commit("setTotal", total.value);
  store.commit("showAlert");
  store.dispatch("hideAlert");
  router.push("/");
};

</script>
