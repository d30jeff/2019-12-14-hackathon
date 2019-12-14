<template>
  <Page>
    <div class="subjects__container">
      <h1>Subjects</h1>
      <hr />
      <LevelFilter @onSelect="handleLevelSelected($event)" />
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
.subjects-list__container {
  padding: 20px 0;
}
</style>
