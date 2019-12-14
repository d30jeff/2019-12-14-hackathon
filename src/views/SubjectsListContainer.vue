<template>
  <div class="subjects-list__container">
    <div v-for="subject of subjects" :key="subject.id">
      <div class="subject">
        <div class="subject--header">
          <h3>{{ subject.name }}</h3>
        </div>
        <div class="subject--description">
          {{ description }}
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

@Component({
  components: {
    Page,
  },
})
export default class SubjectsListContainer extends Vue {
  @Prop({})
  private subjects!: Subject[];

  get description() {
    return faker.lorem.paragraph(1);
  }
}
</script>
<style lang="scss" scoped>
.subjects-list__container {
  .subject {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border: 1px solid $blue;
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
    &--header {
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
