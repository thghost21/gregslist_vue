<script setup>
import { AppState } from '@/AppState.js';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/houseListing.vue';
import { houseService } from '@/services/HouseService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(()=> AppState.houses)
const account = computed(()=> AppState.account)

onMounted(()=> {
  getHouses()
})

async function getHouses() {
  try {
    logger.log('getting houses')
    await houseService.getHouses()
  }
  catch (error){
    Pop.error(error);
  }
}




</script>


<template>
  <section class="container">
    <div class="row align-items-center">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-2">Houses</h1>
        </div>
      </div>
      <div v-if="account" class="row">
        <div class="col-md-6 ">
          <HouseForm/>
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <img src="https://images.unsplash.com/photo-1562325989-8287bf25f565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yJTIwc2FsZSUyMGhvdXNlfGVufDB8MXwwfHx8Mg%3D%3D" alt="cool house" class="rounded shadow">
          </div>
        </div>
      </div>
      <div v-for="house in houses" :key="house.id" class="col-12">
        <HouseListing :houseProp="house"/>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>