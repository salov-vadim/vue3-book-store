<template>
  <div class="modal" tabindex="-1" style="display: block">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">{{ book.title }}</h5>
          <button type="button" class="btn-close" @click="$emit('showDialog')"></button>
        </div>
        <div class="modal-body">
          <img :src="book.image" style="object-fit:contain; max-width: 350px">
          <hr />
          <p>{{ book.description }}</p>
        </div>
        <div class="modal-footer" style="display: block">
          <form @submit.prevent="submit">
            <div class="row">
              <div class="mb-3 col">
                <input type="text"
                       name="Имя"
                       placeholder="Имя"
                       :class="['form-control', {'is-invalid': isName}]"
                       v-model="form.name.value"
                       @blur="form.name.blur">
                <small v-if="isName" class="invalid-feedback">
                  Имя должно быть от 2-ух букв
                </small>
              </div>
              <div class="mb-3 col">
                <input type="email"
                       :class="['form-control', {'is-invalid': isNotEmail}]"
                       name="Email"
                       placeholder="Email"
                       @blur="form.email.blur"
                       v-model="form.email.value">
                <small v-if="isNotEmail" class="invalid-feedback">
                  Email должен быть валидным
                </small>
              </div>
            </div>
            <div class="mb-3">
              <input type="text"
                     :class="['form-control', {'is-invalid': isNotPhone}]"
                     name="Телефон"
                     placeholder="Телефон"
                     @blur="form.phone.blur"
                     v-model="form.phone.value">
              <small v-if="isNotPhone" class="invalid-feedback">
                Телефон может начинаться на +38 и содержать только цифры и +
              </small>
            </div>
            <button type="submit"
                    class="btn btn-primary"
                    style="display: block; margin: 0 auto"
                    :disabled="!form.valid" @click="addBookToCart">Заказать
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useForm } from "../use/form";
import { minLength, required, email, phone } from "../assets/validators";

const props = defineProps({
  book: Object
});

const store = useStore();
const router = useRouter();

const form = useForm({
  name: {
    value: "",
    validators: { required, minLength: minLength(2) }
  },
  email: {
    value: "",
    validators: { required, minLength: minLength(2), email }
  },
  phone: {
    value: "",
    validators: { required, minLength: minLength(2), phone }
  }
});

const isName = computed(() => form.name.touched && !form.name.valid);
const isNotEmail = computed(() => form.email.touched && !form.email.valid);
const isNotPhone = computed(() => form.phone.touched && !form.phone.valid);

const addBookToCart = () => {
  store.commit("addBookToCart", props.book);
  router.push("/cart");
};

</script>
