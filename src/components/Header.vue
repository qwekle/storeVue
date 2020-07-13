<template>
  <header>
    <nav class="navbar navbar-dark bg-dark text-white">
      <h1>
        <router-link :to="{name: 'iMain'}">{{ sitename }}</router-link>
      </h1>
      <div class="ml-auto">
        <!-- <button type="button" class="btn btn-default text-white btn-lg" v-on:click="showCheckout">
          <span>
            <i class="fas fa-shopping-cart mr-1"></i>
            {{ cartItemCount }}
          </span>Checkout
        </button>-->
        <router-link
          active-class="active"
          tag="button"
          class="btn btn-default text-white btn-lg"
          :to="{name: 'Form'}"
        >
          <span>
            <i class="fas fa-shopping-cart mr-1"></i>
            {{ cartItemCount }}
          </span>Checkout
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      sitename: "Vue.js Pet Depot"
    };
  },
  props: ["cartItemCount"],
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    }
  }
};
</script>

<style scoped>
a,
a:hover {
  text-decoration: none;
  color: white;
}

/* Данный класс будет добавлен кнопке Checkout при нахождении на соответсвующем маршруте */
.router-link-exact-active {
  border-color: lightgray;
  color: lightgray !important;
}
</style>