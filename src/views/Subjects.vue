<template>
  <Page>
    <div class="subjects__container">
      <h1>Subjects</h1>
      <hr />
      <div class="subjects__header">
        <LevelFilter @onSelect="handleLevelSelected($event)" />
        <h4>{{ total }}</h4>
      </div>

      <div class="subjects-list__container">
        <SubjectsListContainer :subjects="tableSubjects" />
      </div>
    </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Page from '@/components/layouts/Page.vue';
import LevelFilter from '@/views/LevelFilter.vue';
import SubjectsListContainer from '@/views/SubjectsListContainer.vue';
import { Level } from '../datasource/levels';
import { subjects } from '@/datasource/subjects';
import { Subject } from '@/models/subject';

@Component({
  components: {
    Page,
    LevelFilter,
    SubjectsListContainer,
  },
})
export default class Subjects extends Vue {
  subjects = [...subjects];

  created() {
    console.log(this.subjects);
  }

  get tableSubjects() {
    return this.subjects
  }

  get total() {
    const count = this.subjects.length;

    if (count) {
      return `Showing ${count} Subjects`
    }
    return '';
  }

  handleLevelSelected(level: number) {
    console.log({ level })
    if (Number(level) === 0) {
      this.subjects = [...subjects];
    } else {
      this.subjects = [...subjects].filter((subject) => {
        return subject.level.indexOf(Number(level)) !== -1;
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.subjects__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
