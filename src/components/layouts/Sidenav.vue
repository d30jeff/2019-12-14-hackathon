<template>
  <div class="sidenav__container">
    <router-link :to="{ name: 'subjects' }" >Subjects</router-link>
    <router-link :to="{ name: 'my.reviews' }" exact>My Reviews</router-link>
    <router-link :to="{ name: 'forum' }" exact>Forum</router-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class Page extends Vue {}
</script>
<style lang="scss">
.sidenav {
  &__container {
    text-transform: uppercase;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    a {
      font-weight: 600;
      background: $blue;
      padding: 20px 20px;
      font-size: 14px;
      color: $yellow;
      &.active,
      &:hover {
        background: $yellow;
        color: $blue;
      }
    }
  }
}
</style>
