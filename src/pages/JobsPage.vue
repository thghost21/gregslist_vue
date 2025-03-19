<script setup>
import { AppState } from '@/AppState.js';
import JobForm from '@/components/JobForm.vue';
import JobsListing from '@/components/JobsListing.vue';
import { jobsService } from '@/services/JobsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const jobs = computed(()=> AppState.jobs)

onMounted(()=>{
  getJobs()
})

async function getJobs(){
  try {
    logger.log('getting jobs')
    await jobsService.getJobs()

  }
  catch (error){
    Pop.error(error, "could not get jobs");
  }
}

</script>


<template>
<section class="container">
    <div class="row align-items-center">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-2">Jobs</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <JobForm />
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <img src="https://images.unsplash.com/photo-1584476318078-d38baa6edb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9iJTIwaW50ZXJ2aWV3fGVufDB8MXwwfHx8Mg%3D%3D" alt="For Hire sign" class="rounded shadow">
          </div>
        </div>
      </div>
      <div v-for="job in jobs" :key="job.id" class="col-12">
        <JobsListing :jobsProp="job"/>

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>