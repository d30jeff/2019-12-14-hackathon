<template>
  <div class="page__container">
    <div class="page__header">
      <Navbar :areButtonsHidden="true" />
    </div>

    <div class="page__body" :class="{ padded: false }">
      <div class="page__sidebar">
        <Sidenav />
      </div>
      <div class="page__content">
        <slot></slot>
      </div>
    </div>

    <div class="page__footer">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/layouts/Navbar.vue';
import Sidenav from '@/components/layouts/Sidenav.vue';
import Footer from '@/components/layouts/Footer.vue';

@Component({
  components: {
    Navbar,
    Sidenav,
    Footer,
  },
})
export default class Page extends Vue {}
</script>
<style lang="scss" scoped>
.page__content {
  padding: 20px 40px;
  width: 100%;
}
.page {
  &__container {
  }
}
.page__body {
  display: flex;
}

.page__sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
}
</style>
