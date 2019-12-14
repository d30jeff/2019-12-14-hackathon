<template>
  <div class="public-page__container">
    <div class="public-page__header">
      <Navbar />
    </div>
    <div class="public-page__body" :class="{'padded': hasPadding}">
      <slot></slot>
    </div>

    <div class="public-page__footer">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';

@Component({
  components: {
    Footer,
    Navbar
  },
})
export default class PublicPage extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  private hasPadding: boolean | undefined;
}
</script>
<style lang="scss" scoped>
.public-page {
  &__body {
    &.padded {
      padding: $padding-small;
    }
  }
}
</style>
