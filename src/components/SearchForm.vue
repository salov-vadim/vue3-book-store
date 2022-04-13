<template>
  <form class="row align-items-top mt-5" @submit.prevent="submit">
    <div class="col-8">
      <input type="text"
             v-model.trim="form.searchText.value"
             @blur="form.searchText.blur"
             :class="['form-control', {'is-invalid': isInValid}]"
             placeholder="Название книги">
      <small v-if="isInValid" class="invalid-feedback">
        Значение не может быть пустым и должно содержать минимум 2 символа
      </small>
    </div>

    <div class="col-auto">
      <button type="submit"
              class="btn btn-primary"
              :disabled="!form.valid"
              v-if="!loading">
        Поиск
      </button>
      <button v-else class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Загрузка...
      </button>

    </div>

  </form>
</template>

<script setup>
import { useForm } from "../use/form";
import { computed } from "vue";
import { useStore } from "vuex";
import { minLength, required } from "../assets/validators";

const store = useStore();

const form = useForm({
  searchText: {
    value: "",
    validators: { required, minLength: minLength(2) }
  }
});

const isInValid = computed(() => form.searchText.touched && !form.searchText.valid);
const loading = computed(() => store.getters.getLoading);

const submit = () => store.dispatch("setBooks", form.searchText.value);
</script>
