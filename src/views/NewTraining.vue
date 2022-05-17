<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newTrainingParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createTraining: function () {
      console.log("making a new training");
      axios
        .post("/trainings", this.newTrainingParams)
        .then((response) => {
          console.log("Success", response.data);
          this.$router.push(`/resumes/`);
        })
        .catch((error) => {
          console.log(error.response.status, error.response.statusText), (this.status = error.response.status);
        });
    },
  },
};
</script>
<template>
  <div class="trainings-new">
    <form v-on:submit.prevent="createTraining()">
      <h1>Add your training and certifications here!</h1>

      <div>
        <div class="form-group">
          Category (Education, Professional Dev, or Certification):
          <input type="text" v-model="newTrainingParams.category" />
        </div>

        <div class="form-group">
          Organization or Institution:
          <input type="text" v-model="newTrainingParams.org_or_institution" />
        </div>

        <div class="form-group">
          Description:
          <input type="text" v-model="newTrainingParams.description" />
        </div>

        <div class="form-group">
          Dates:
          <input type="text" v-model="newTrainingParams.dates" />
        </div>

        <div class="form-group">
          Degree or Certificate:
          <input type="text" v-model="newTrainingParams.degree_or_cert" />
        </div>

        <div class="form-group">
          Location:
          <input type="text" v-model="newTrainingParams.location" />
        </div>

        <div class="form-group">
          Tags or Misc.:
          <input type="text" v-model="newTrainingParams.misc" />
        </div>
      </div>

      <input type="submit" value="Create" />
      <!-- <br /> -->
    </form>
    <p><button @click="$router.push('/resumes')">Back to all Data</button></p>
  </div>
</template>

<style></style>
