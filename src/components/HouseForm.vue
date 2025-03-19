<script setup>
import { houseService } from '@/services/HouseService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editableHouseData = ref({
  bedrooms: 0,
    bathrooms: 0,
    levels: 0,
    imgUrl: '',
    year: 0,
    price: 0,
    description: ''
}) 


async function createHouse() {
  try {
    logger.log('creating House');
    const houseData = editableHouseData.value
    await houseService.createHouse(houseData)
    editableHouseData.value = {  bedrooms: 0,
    bathrooms: 0,
    levels: 0,
    imgUrl: '',
    year: 0,
    price: 0,
    description: ''}
    
  }
  catch (error){
    Pop.error(error, 'could not create house');
    logger.log(error, 'could not create house')
  }
  
}

</script>


<template>
  <form @submit.prevent="createHouse()">
    <div class="mb-3">
      <label for="houseBedrooms">Bedrooms</label>
      <input v-model="editableHouseData.bedrooms" id="houseBedrooms" name="bedrooms" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseBathrooms">Bathrooms</label>
      <input v-model="editableHouseData.bathrooms" id="houseBathrooms" name="bathrooms" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseLevels">Levels</label>
      <input v-model="editableHouseData.levels" id="houseLevels" name="levels" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseYear">Year</label>
      <input v-model="editableHouseData.year" id="houseYear" name="year" type="number" required>
    </div>
    <div class="mb-3">
      <label for="housePrice">Price</label>
      <input v-model="editableHouseData.price" id="housePrice" name="price" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseimgUrl">Image URL</label>
      <input v-model="editableHouseData.imgUrl" id="houseimgUrl" placeholder="Enter an image url..." name="imgUrl" type="url" required maxlength="500">
    </div>
    <div class="mb-3">
      <label for="houseDescription">Description</label>
      <textarea v-model="editableHouseData.description" class="w-100" id="houseDescription" name="description" placeholder="Enter a description..."
        maxlength="5000"></textarea>
    </div>
    <div class="text-end">
      <button class="btn btn-outline-danger me-2" type="reset">
        Reset Form
      </button>
      <button class="btn btn-outline-dark" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
label {
  display: block;
}
input {
  width: 100%;
}


</style>