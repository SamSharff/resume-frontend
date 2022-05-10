<script>
import axios from "axios";

export default {
  data: function () {
    return {
      training: {},
    };
  },
  created: function () {
    axios.get("/trainings/" + this.$route.params.id).then((response) => {
      console.log("Showing training", response.data);
      this.training = response.data;
    });
  },
};
</script>
<template>
  <div class="trainings-show">
    <!-- {{ training }} -->
    <h2>{{ training.category }}</h2>
    <p>{{ training.org_or_institution }}</p>
    <p>{{ training.description }}</p>
    <p>{{ training.dates }}</p>
    <p>{{ training.location }}</p>
    <p>{{ training.misc }}</p>
    <p>{{ training.updated_at }}</p>
    <a href="/resumes">Back to all data</a>
    <br />
    <a v-bind:href="`/trainings/${training.id}/edit`">Edit</a>
  </div>
</template>

<style></style>
