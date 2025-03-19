<script setup>
import { houseService } from '@/services/HouseService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1 class="display-2">Houses</h1>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>