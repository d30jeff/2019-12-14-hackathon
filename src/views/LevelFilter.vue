<template>
  <div class="select">
    <select v-model="value" @change="handleValueSelected($event)">
      <option value="0" selected>Select Level</option>
      <option v-for="level in levels" :key="level.value" :value="level.value">
        {{ level.name }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import { levels } from '../datasource/levels';

@Component({})
export default class LevelFilter extends Vue {
  value = '0';

  get levels() {
    return levels;
  }

  @Emit('onSelect')
  handleValueSelected(event: any) {
    return event.target.value;
  }
}
</script>
<style lang="sass" scoped></style>
