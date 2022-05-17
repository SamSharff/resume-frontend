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
      console.log("Showing training for edit", response.data);
      this.training = response.data;
    });
  },

  methods: {
    updatedTraining: function () {
      console.log("update training");
      axios.patch("/trainings/" + this.$route.params.id, this.training).then((response) => {
        console.log("Training update", response.data);
        this.$router.push(`/trainings/${this.training.id}`);
      });
    },
  },
};
</script>
<template>
  <div class="training-update">
    <form v-on:submit.prevent="updatedTraining()">
      <h1>Edit</h1>
      <div>
        <div class="form-group">
          Category (Education, Professional Dev, or Certification):
          <input type="text" v-model="training.category" />
        </div>
        <div class="form-group">
          Organization or Institution:
          <input type="text" v-model="training.org_or_institution" />
        </div>
        <div class="form-group">
          Description:
          <input type="text" v-model="training.description" />
        </div>
        <div class="form-group">
          Dates:
          <input type="text" v-model="training.dates" />
        </div>
        <div class="form-group">
          Degree or Certificate:
          <input type="text" v-model="training.degree_or_cert" />
        </div>
        <div class="form-group">
          Location:
          <input type="text" v-model="training.location" />
        </div>
        <div class="form-group">
          Tags or notes:
          <input type="text" v-model="training.misc" />
        </div>
      </div>
      <input type="submit" value="Update" />
    </form>
    <a v-bind:href="`/trainings/${training.id}`">Back</a>
    <!-- <a href="/resumes/">Back</a> -->
  </div>
</template>

<style></style>
