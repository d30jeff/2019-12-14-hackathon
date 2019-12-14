<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item">
        LOGO
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end" v-if="!areButtonsHidden">
        <div class="navbar-item">
          <div class="buttons">
            <router-link :to="{ name: 'signup' }" class="button is-primary">
              Sign up
            </router-link>
            <router-link :to="{ name: 'signin' }" class="button is-light">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {
  @Prop({})
  private areButtonsHidden!: boolean;
}
</script>
<style lang="scss">
.navbar {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  // &__container {
  //   @include shadow;
  //   display: flex;
  //   align-items: center;
  //   padding: $padding-small-1 $padding-small;
  // }
  // &__brand {
  //   a {
  //     display: block;
  //     height: 100%;
  //   }
  //   height: 80px;
  //   width: 120px;
  //   img {
  //     height: 100%;
  //     width: 100%;
  //     object-fit: contain;
  //   }
  // }
  // &__links {
  //   margin-left: auto;
  // }
  // &--item {
  //   font-size: $size-4;
  //   margin-left: $padding-small;
  //   padding: $padding-small-1 $padding-small;
  //   background: #e0e0e0;
  // }
}
</style>
