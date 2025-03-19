<script setup>
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';


async function createHouse() {
  try {
    logger.log('creating House');
    
  }
  catch (error){
    Pop.error(error);
  }
  
}

</script>


<template>
  <form @submit="createHouse()">
    <div class="mb-3">
      <label for="houseBedrooms">Bedrooms</label>
      <input id="houseBedrooms" name="bedrooms" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseBathrooms">Bathrooms</label>
      <input id="houseBathrooms" name="bathrooms" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseLevels">Levels</label>
      <input id="houseLevels" name="levels" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseYear">Year</label>
      <input id="houseYear" name="year" type="number" required>
    </div>
    <div class="mb-3">
      <label for="housePrice">Price</label>
      <input id="housePrice" name="price" type="number" required>
    </div>
    <div class="mb-3">
      <label for="houseimgUrl">Image URL</label>
      <input id="houseimgUrl" name="imgUrl" type="url" required maxlength="500">
    </div>
    <div class="mb-3">
      <label for="houseDescription">Description</label>
      <textarea class="w-100" id="houseDescription" name="description" placeholder="Enter a description..."
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