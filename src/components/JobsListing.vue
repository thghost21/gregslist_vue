<script setup>
import { AppState } from '@/AppState.js';
import { Job } from '@/models/Job.js';
import { computed } from 'vue';

const account = computed(()=> AppState.account)

defineProps({
  jobsProp: {type: Job, required: true}
})
</script>


<template>
<div class="row">
  <div class="d-flex shadow my-2 border border-dark p-2">
    <div class="col-12">
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="p-4">
          <h3>{{ jobsProp.jobTitle }}</h3>
          <h4>{{ jobsProp.company }}</h4>
          <hr>
          <p class="fs-4">${{ jobsProp.rate }}</p>
          <p> {{ jobsProp.hours }} hours per week</p>
          <p>listed on {{ jobsProp.createdAt.toLocaleDateString() }}</p>
          <p>{{ jobsProp.description }}</p>
        </div>
        <div class="d-flex align-items-center gap-3 justify-content-between px-2">
          <div>
            <button v-if="jobsProp.creatorId == account?.id" class="btn btn-outline-danger" type="button">Delete</button>
          </div>
          <div  class="d-flex align-items-center gap-3">
            <div>{{ jobsProp.creator.name }}</div>
            <img class="creatorPic" :src="jobsProp.creator.picture" :alt="jobsProp.creator.name">
          </div>
        </div>

      </div>
  </div>

  </div>
</div>
</template>


<style lang="scss" scoped>
.creatorPic{
  height: 3.7em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  width: unset;
}
img {
  height: 45dvh;
  width: 100%;
  object-fit: cover;

}
</style>