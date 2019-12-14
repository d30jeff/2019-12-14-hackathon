<template>
  <PublicPage>
    <div class="signup__container">
      <h1>Sign up for a new account</h1>
      <hr />
      <form @submit.prevent="handleFormSubmitted">
        <div class="field">
          <label class="label">NRIC Number</label>
          <div class="control">
            <input class="input" type="text" placeholder="NRIC Number" v-model="icNumber" />
          </div>
        </div>

        <div class="field">
          <label class="label">Phone Number</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g. 0123456789" v-model="phoneNumber" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="password" />
          </div>
        </div>

        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Confirm Password"
              v-model="confirmPassword"
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" :checked="true" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button type="submit" class="button is-link is-fullwidth">Sign up</button>
          </div>
        </div>

        <div class="field has-text-centered">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  </PublicPage>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PublicPage from '@/components/layouts/PublicPage.vue';
import { Carousel, Slide } from 'vue-carousel';

let data: any = {};

@Component({
  components: {
    PublicPage,
    Carousel,
    Slide,
  },
})
export default class Signup extends Vue {
  icNumber = '';
  phoneNumber = '';
  password = '';
  confirmPassword = '';

  mounted() {
    data = {
      icNumber: '951214-12-1234',
      phoneNumber: '+60123456789',
      password: 'password123456',
      confirmPassword: 'password123456',
    };
  }

  beforeCreate() {
    setTimeout(() => {
      this.incrementData('icNumber');
      this.incrementData('phoneNumber');
      this.incrementData('password');
      this.incrementData('confirmPassword');
    }, 100);
  }

  incrementData(key: string) {
    if ((this as any)[key] === data[key]) {
      return;
    }
    (this as any)[key] += data[key].slice(0, 1);
    data[key] = data[key].substr(1);

    if (data[key].length) {
      setTimeout(() => {
        this.incrementData(key);
      }, 100);
    }
  }

  handleFormSubmitted() {
    this.$router.push({
      name: 'signin',
    });
  }
}
</script>
<style lang="scss" scoped>
.signup {
  &__container {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-top: 140px;
    padding: 40px;
    max-width: 600px;
    margin: 50px auto 50px auto;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  }
}
</style>
