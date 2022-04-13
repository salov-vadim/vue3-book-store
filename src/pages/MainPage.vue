<template>
  <div class="main">
    <SearchForm />
    <div v-if="!loading">
      <div v-if="getSearchBooks.length>0">
        <hr class="my-3" />
        <h2>Результаты поиска по слову: "{{ getSearchText }}"</h2>
        <hr class="my-3" />
        <BookList :books="getSearchBooks" />
      </div>
      <div v-else>
        <h4 class="mt-5">Для поиска книг введите текст и нажмите кнопку "Поиск"</h4>
      </div>
    </div>
    <div v-else class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import SearchForm from "../components/SearchForm";
import BookList from "../components/BookList";

const store = useStore();

const loading = computed(() => store.getters.getLoading);
const getSearchBooks = computed(() => store.getters.getSearchBooks);
const getSearchText = computed(() => store.getters.getSearchText);

</script>
