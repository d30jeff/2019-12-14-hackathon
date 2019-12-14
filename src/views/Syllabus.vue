<template>
  <Page>
    <div class="syllabus__container">
      <h1>{{ subjectName }} - Syllabus</h1>
      <hr />
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
import { subjects } from '../datasource/subjects';

@Component({
  components: {
    Page,
    LevelFilter,
    SubjectsListContainer,
  },
})
export default class Syllabus extends Vue {
  get subjectName(): string {
    const subject = subjects.find(subject => {
      return subject.id === Number(this.$route.params.id);
    })

    if (subject) {
      document.title = `${subject.name} - Syllabus`
      return subject.name;
    }
    return '';
  }


  created() {

  }
}
</script>
<style lang="scss" scoped>
.syllabus__container {
  padding: 20px 0;
}
</style>
