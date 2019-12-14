<template>
  <div class="subjects-list__container">
    <div v-for="subject of subjects" :key="subject.id">
      <div class="subject">
        <div class="subject--header">
          <h3>{{ subject.name }}</h3>
          <div class="subject--rating">
            <VueStarRating :rating="getRandomRating()" read-only
            :star-size="30"/>
          </div>
        </div>
        <div class="subject--description">
          <p>{{ description }}</p>
        </div>
        <div class="subject--footer">
          <router-link
            :to="{
              name: 'syllabus',
              params: {
                id: subject.id,
              },
            }"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Page from '@/components/layouts/Page.vue';
import { Subject } from '@/models/subject';
import { subjects } from '@/datasource/subjects';
import faker from 'faker';
import VueStarRating from 'vue-star-rating';

@Component({
  components: {
    Page,
    VueStarRating
  },
})
export default class SubjectsListContainer extends Vue {
  @Prop({})
  private subjects!: Subject[];

  getRandomRating() {
    return Math.floor(Math.random() * 5 + 1);
  }

  get description() {
    return faker.lorem.paragraph(3);
  }
}
</script>
<style lang="scss" scoped>
.subjects-list__container {
  .subject {
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    &--header {
      display: flex;
      justify-content: space-between;
    }
    &--description {
      padding-bottom: 40px;
    }
    &--footer {
      padding-top: 10px;
      border-top: 1px solid $blue;
      a {
        padding: 10px 20px;
        display: inline-block;
        background: $blue;
        color: $yellow;
        font-weight: 600;
        border-radius: 2px;
        &:hover {
          background: $yellow;
          color: $blue;
        }
      }
    }
  }
}
</style>
