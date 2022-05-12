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
    <h2>Category: {{ training.category }}</h2>
    <p>
      <strong>Organization:</strong>
      {{ training.org_or_institution }}
    </p>
    <p>
      <strong>Description:</strong>
      {{ training.description }}
    </p>
    <p>
      <strong>Dates:</strong>
      {{ training.dates }}
    </p>
    <p>
      <strong>Location:</strong>
      {{ training.location }}
    </p>
    <p>
      <strong>Misc.:</strong>
      {{ training.misc }}
    </p>
    <p>
      <strong>Last updated:</strong>
      {{ training.updated_at }}
    </p>
    <a href="/resumes">Back to all data</a>
    <br />
    <a v-bind:href="`/trainings/${training.id}/edit`">Edit</a>
  </div>
</template>

<style></style>
