<script setup>
import { House } from '@/models/House.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';

defineProps({
  houseProp: {type: House, required: true}
})

async function deleteHouse(houseId) {
  try {
    logger.log("deleting house with the id of ", houseId)
  }
  catch (error){
    Pop.error(error);
  }
}
</script>


<template>
<div class="row">
  <div class="d-flex shadow my-2 border border-dark p-2">
    <div class="col-md-4">
      <div>
        <img class="img-fluid" :src="houseProp.imgUrl" alt="picture of a house">
      </div>
    </div>
    <div class="col-md-8">
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="p-4">
          <h3>{{ houseProp.year }}</h3>
          <h4>{{ houseProp.bedrooms }} bed / {{ houseProp.bathrooms }} bath</h4>
          <hr>
          <p class="fs-4">${{ houseProp.price.toLocaleString()}}</p>
          <p>{{ houseProp.levels }} Story</p>
          <p>{{ houseProp.description }}</p>
        </div>
        <div class="d-flex align-items-center gap-3 justify-content-between px-2">
          <div>
            <button @click="deleteHouse(houseProp.id)" class="btn btn-outline-danger">Delete</button>
          </div>
          <div class="d-flex align-items-center gap-3">
            <div>{{ houseProp.creator.name }}</div>
            <img class="creatorPic" :src="houseProp.creator.picture" alt="">
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