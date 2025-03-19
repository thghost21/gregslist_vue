<script setup>

</script>


<template>
  <form onsubmit="app.carsController.createCarListing()">
    <div class="mb-3">
      <label for="carMake">Car Make</label>
      <input id="carMake" name="make" type="text" required maxlength="500" placeholder="Car Make...">
    </div>
    <div class="mb-3">
      <label for="carModel">Car Model</label>
      <input id="carModel" name="model" type="text" required maxlength="500" placeholder="Car Model...">
    </div>
    <div class="mb-3">
      <label for="carPrice">Car Price</label>
      <input id="carPrice" name="price" type="number" required min="0" max="1000000" placeholder="0">
    </div>
    <div class="mb-3">
      <label for="carYear">Car Year</label>
      <input id="carYear" name="year" type="number" required min="1886" max="2025" placeholder="2025">
    </div>
    <div class="mb-3">
      <label for="carImgUrl">Car Image URL</label>
      <input id="carImgUrl" name="imgUrl" type="url" required maxlength="500" placeholder="Image URL...">
    </div>
    <div class="d-flex justify-content-between">
      <div class="mb-3">
        <label for="carEngineType">Car Engine Type</label>
        <select name="engineType" id="carEngineType">
          <option value="unknown">Unknown</option>
          <option value="2 stroke">2 Stroke</option>
          <option value="4 cylinder">4 cylinder</option>
          <option value="v6">v6</option>
          <option value="v8">v8</option>
          <option value="v10">v10</option>
          <option value="v12">v12</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
          <option value="chuncko">chuncko</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="carColor">Car Color</label>
        <input id="carColor" name="color" type="color" value="#FF0000" class="check-input">
      </div>
    </div>
    <div class="mb-3">
      <label for="carDescription">Car Description</label>
      <textarea name="description" id="carDescription" class="w-100" placeholder="Description of the car..."
        maxlength="500"></textarea>
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