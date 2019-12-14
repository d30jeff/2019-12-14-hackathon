<template>
  <PublicPage>
    <div class="signup__container">
      <form @submit.prevent="handleFormSubmitted">
        <h1>Login</h1>
        <hr />
        <div class="field">
          <label class="label">IC Number</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Please enter your IC number"
              v-model="icNumber"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="password" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link is-fullwidth" :disabled="isLoginButtonDisabled">
              Login
            </button>
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

@Component({
  components: {
    PublicPage,
    Carousel,
    Slide,
  },
})
export default class Signin extends Vue {
  icNumber = '';
  password = '';

  get isLoginButtonDisabled(): boolean {
    return this.icNumber.trim().length === 0 || this.password.trim().length < 6;
  }

  handleFormSubmitted() {
    this.$router.push({
      name: 'subjects',
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
    margin: 100px auto 100px auto;
  }
}
</style>
