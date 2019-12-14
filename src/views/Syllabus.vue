<template>
  <Page>
    <div class="syllabus__container">
      <h1>{{ subjectName }}</h1>
      <h2 class="subtitle">Syllabus</h2>
      <hr />

      <div class="syllabus-card--container" v-for="year in Object.keys(syllabusList)" :key="year">
        <div class="syllabus-card--year">
          <h2>{{ year }}</h2>
        </div>
        <div class="syllabus-card--table">
          <table class="table is-fullwidth">
            <thead>
              <th>Year</th>
              <th>Rating</th>
            </thead>

            <tbody>
              <tr v-for="syllabus in getSyllabusByKey(year)" :key="syllabus">
                <td>{{ syllabus.title }}</td>
                <td><VueStarRating :rating="getRandomRating()" read-only :star-size="30" /></td>
              </tr>
            </tbody>
          </table>
        </div>
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
import { subjects } from '../datasource/subjects';
import { syllabus } from '../datasource/syllabus';
import VueStarRating from 'vue-star-rating';

@Component({
  components: {
    Page,
    LevelFilter,
    SubjectsListContainer,
    VueStarRating,
  },
})
export default class Syllabus extends Vue {
  get subjectId(): number {
    const id = this.$route.params.id;

    return Number(id);
  }

  getRandomRating() {
    return Math.floor(Math.random() * 5 + 1);
  }

  get syllabusList() {
    return syllabus[this.subjectId] || [];
  }

  getSyllabusByKey(key: string) {
    return this.syllabusList[key];
  }

  get subjectName(): string {
    const subject = subjects.find((subject) => {
      return subject.id === this.subjectId;
    });

    if (subject) {
      document.title = `${subject.name} - Syllabus`;
      return subject.name;
    }
    return '';
  }

  created() {}
}
</script>
<style lang="scss" scoped>
.syllabus__container {
  padding: 20px 0;
}
.syllabus-card {
  &--container {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  }
  &--year {
    margin-bottom: 10px;
    font-weight: 600;
  }
  &--table {
    table.table.is-fullwidth > tbody > tr > td {
      width: 100%;
    }
  }
}
</style>
