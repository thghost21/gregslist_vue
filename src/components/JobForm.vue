<script setup>

</script>


<template>
  <form>
    <div class="mb-3">
      <label for="jobCompany">Company</label>
      <input type="text" name="company" id="jobCompany" maxlength="100" required>
    </div>
    <div class="mb-3">
      <label for="jobTitle">Job Title</label>
      <input type="text" name="jobTitle" id="jobTitle" maxlength="100" required>
    </div>
    <div class="mb-3">
      <label for="jobHours">Hours</label>
      <input type="number" name="hours" id="jobHours" required>
    </div>
    <div class="mb-3">
      <label for="jobRate">Rate</label>
      <input type="number" name="Rate" id="jobRate" required>
    </div>
    <div class="mb-3">
      <label for="jobDescription">Job description</label>
      <textarea name="description" id="jobDescription" maxlength="5000" class="w-100"></textarea>
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