<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experience: {},
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      console.log("Showing experience", response.data);
      this.experience = response.data;
    });
  },
};
</script>
<template>
  <div class="experiences-show">
    <!-- {{ experience }} -->
    <h2>{{ experience.title }}</h2>
    <p>{{ experience.description }}</p>
    <p>{{ experience.dates }}</p>
    <p>{{ experience.location }}</p>
    <p>{{ experience.updated_at }}</p>
    <a href="/resumes">Back to all data</a>
    <br />
    <a v-bind:href="`/resumes/${experience.id}/edit`">Edit</a>
  </div>
</template>

<style></style>
