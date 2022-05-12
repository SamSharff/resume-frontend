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
    <h2>Category:</h2>
    <p>{{ experience.category }}</p>
    <h2>Organization:</h2>
    <p>{{ experience.org_or_institution }}</p>
    <h2>Description:</h2>
    <p>{{ experience.description }}</p>
    <h2>Title:</h2>
    <p>{{ experience.title }}</p>
    <h2>Dates:</h2>
    <p>{{ experience.dates }}</p>
    <h2>Location:</h2>
    <p>{{ experience.location }}</p>
    <h2>Misc.:</h2>
    <p>{{ experience.misc }}</p>
    <h2>Created</h2>
    <p>{{ experience.created }}</p>
    <h2>Last updated:</h2>
    <h2>{{ experience.updated }}</h2>
    <a href="/resumes">Back to all data</a>
    <br />
    <a v-bind:href="`/resumes/${experience.id}/edit`">Edit</a>
  </div>
</template>

<style></style>
