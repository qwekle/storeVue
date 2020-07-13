<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <h1>This is the id {{ $route.params.id}}</h1>
      <div class="row product">
        <div class="col">
          <figure>
            <img class="img-fluid" v-bind:src="product.image" v-bind:alt="product.title" />
          </figure>
        </div>
        <div class="col col-expand">
          <p v-html="product.description"></p>
          <!--Использование фильтра formatPrice()-->
          <p class="price">{{ product.price }}</p>
          <button class="btn btn-success" @click="edit">Edit Product</button>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import { axiosInstance } from "@/axios-instance.js";
export default {
  components: { MyHeader },
  data() {
    return {
      product: ""
    };
  },
  methods: {
    edit() {
      this.$router.push({ name: "Edit" });
    }
  },
  created: function() {
    axiosInstance.get("products.json").then(response => {
      this.product = response.data.products.filter(
        data => data.id == this.$route.params.id
      )[0];
      console.log("product", this.product);
      this.product.image = "/" + this.product.image;
    });
  }
};
</script>