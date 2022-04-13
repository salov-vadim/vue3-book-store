<template>
  <div class="row">
    <BookItem v-for="book in books"
              :book="book"
              :key="book.id"
              @openBook="openBook"
    />
  </div>
  <transition enter-active-class="animate__animated animate__zoomIn">
    <BookDialog v-if="showDialog" :book="currentBook" @showDialog="showDialog=false" />
  </transition>
</template>

<script setup>
import { ref } from "vue";
import BookItem from "./BookItem";
import BookDialog from "./BookDialog";

const props = defineProps({ books: Array });
const emits = defineEmits(["openBookForm"]);

const showDialog = ref(false);
const currentBook = ref();

const openBook = (book) => {
  currentBook.value = book;
  showDialog.value = true;
};

</script>

<style scoped>

</style>