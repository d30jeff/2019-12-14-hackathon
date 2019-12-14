<template>
  <PublicPage>
    <div class="signup__container">
      <h1>Sign up for a new account</h1>
      <hr />
      <form @submit.prevent="handleFormSubmitted">
      <div class="field">
        <label class="label">IC Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input is-success" type="text" placeholder="Text input" value="" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input is-success" type="text" placeholder="Text input" value="" />
        </div>
      </div>

      <div class="field">
        <label class="label">Confirm Password</label>
        <div class="control">
          <input class="input is-success" type="text" placeholder="Text input" value="" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>


      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Sign up</button>
        </div>
        <div class="control">
          <button type="button" class="button is-link is-light">Reset</button>
        </div>
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
export default class Signup extends Vue {

  handleFormSubmitted() {
    this.$router.push({
      name: 'signin'
    })
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
