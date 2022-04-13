<template>
  <div class="col-xl-3 col-lg-4 col-sm-6  mb-4">
    <div class="card align-items-center" style="min-height: 100%">
      <img :src="book.image" style="object-fit: cover; max-width: 250px">

      <div class="card-body">
        <hr />
        <h5 class="card-title mb-3">{{ book.title }}</h5>

        <h6 class="card-subtitle mb-3 text-muted text-center"> Авторы: {{ book.authors }}</h6>
        <hr />
        <h5 class="card-subtitle mb-2 text-muted text-center">{{ book.publishedDate }}</h5>

      </div>
      <button class="btn btn-primary mb-4"
              v-if="book.price>0" @click="openBookDialog">Заказать
      </button>
      <button class="btn btn-primary mb-4"
              v-else disabled>Нет в наличии
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ book: Object });
const emits = defineEmits(["openBook"]);

const openBookDialog = () => {
  emits("openBook", props.book);
};
</script>
