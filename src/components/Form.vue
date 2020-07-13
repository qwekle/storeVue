<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <strong>First Name:</strong>
            <input v-model.trim="order.firstName" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <strong>Last Name:</strong>
            <input v-model.trim="order.lastName" class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <strong>Address:</strong>
          <input v-model.trim="order.address" class="form-control" />
        </div>

        <div class="form-group">
          <strong>City:</strong>
          <input v-model.trim="order.city" class="form-control" />
        </div>

        <div class="form-row">
          <div class="col-md-2">
            <strong>State:</strong>
            <select v-model="order.state" class="form-control">
              <option disabled value>State</option>
              <option v-for="(state, key) in states" v-bind:value="state" v-bind:key="key">{{key}}</option>
            </select>
          </div>

          <div class="col-md-6 offset-md-4">
            <strong>Zip/Postal Code:</strong>
            <input v-model.number="order.zip" type="number" class="form-control" />
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-6 boxes">
            <input
              type="checkbox"
              id="gift"
              value="true"
              v-bind:true-value="order.sendGift"
              v-bind:false-value="order.dontSendGift"
              v-model="order.gift"
            />
            <label for="gift">Ship As Gift?</label>
          </div>

          <div class="col-md-6 boxes">
            <input type="radio" id="home" v-bind:value="order.home" v-model="order.method" />
            <label for="home">Home</label>
            <input type="radio" id="business" v-bind:value="order.business" v-model="order.method" />
            <label for="business">Business</label>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-6 offset-md-3 text-center">
            <button type="submit" class="btn btn-primary" v-on:click="submitForm">Place Order</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
export default {
  name: "Form",
  props: ["cartItemCount"],
  data() {
    return {
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        gift: "Send As A Gift",
        sendGift: "Send As A Gift",
        dontSendGift: "Do Not Send As A Gift",
        method: "Home Address",
        business: "Business Address",
        home: "Home Address"
      },
      states: {
        AL: "Alabama",
        AR: "Arizona",
        CA: "California",
        NV: "Nevada"
      }
    };
  },
  components: { MyHeader },
  methods: {
    submitForm() {
      alert("Submitted");
    }
  }
};
</script>