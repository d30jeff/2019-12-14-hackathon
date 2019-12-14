<template>
  <PublicPage>
    <div class="signup__container">
      <form @submit.prevent="handleFormSubmitted">
        <h1>Login</h1>
        <hr />
        <div class="field">
          <label class="label">IC Number</label>
          <div class="control">
            <input class="input" type="text" placeholder="Please enter your IC number" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Password" value="" />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-fullwidth">Login</button>
          </div>
        </div>
      </form>
      <a href="#">Forgot Password?</a>
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
  handleFormSubmitted() {
    this.$router.push({
      name: 'syllabus',
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
