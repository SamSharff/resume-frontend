<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newExperienceParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createExperience: function () {
      console.log("making a new experience");
      axios
        .post("/experiences", this.newExperienceParams)
        .then((response) => {
          console.log("Success!", response.data);
          this.experiences.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.status, error.response.statusText), (this.status = error.response.status);
        });
    },
  },
};
</script>
<template>
  <div class="experiences-new">
    <form v-on:submit.prevent="createExperience()">
      <h1>Add your professional history here!</h1>
      <div>
        <div class="form-group">
          Category (Job, Skill, or Volunteer):
          <input type="text" v-model="newExperienceParams.category" />
        </div>
        <div class="form-group">
          Organization or Institution:
          <input type="text" v-model="newExperienceParams.org_or_institution" />
        </div>
        <div class="form-group">
          Description:
          <input type="text" v-model="newExperienceParams.description" />
        </div>
        <div class="form-group">
          Title:
          <input type="text" v-model="newExperienceParams.title" />
        </div>
        <div class="form-group">
          Dates:
          <input type="text" v-model="newExperienceParams.dates" />
        </div>
        <div class="form-group">
          Location:
          <input type="text" v-model="newExperienceParams.location" />
        </div>
        <div class="form-group">
          Tags or Misc.:
          <input type="text" v-model="newExperienceParams.misc" />
        </div>
        <div class="form-group">
          Last Updated:
          <input type="text" v-model="newExperienceParams.updated_at" />
        </div>
      </div>
      <input type="submit" value="Create" />
      <br />
      <p><button @click="$router.push('/resumes')">Back to all Data</button></p>
    </form>
  </div>
</template>

<style></style>
