<template>
  <div class="subjects-list__container">
    <div v-for="subject of subjects" :key="subject.id">
      <router-link
        :to="{
          name: 'syllabus',
          params: {
            id: subject.id,
          },
        }"
      >
        {{ subject.name }}
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Page from '@/components/layouts/Page.vue';
import { Subject } from '@/models/subject';
import { subjects } from '@/datasource/subjects';

@Component({
  components: {
    Page,
  },
})
export default class SubjectsListContainer extends Vue {
  @Prop({})
  private subjects!: Subject[];
}
</script>
<style lang="scss" scoped>
.subjects-list__container {
  display: flex;
  flex-direction: column;
  a {
    display: block;
  }
}
</style>
