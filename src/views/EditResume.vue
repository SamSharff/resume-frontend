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
      console.log("Showing experience for edit", response.data);
      this.experience = response.data;
    });
  },

  methods: {
    updateExperience: function () {
      console.log("update experience");
      axios.patch("/experiences/" + this.$route.params.id, this.experience).then((response) => {
        console.log("Experience update", response.data);
        this.$router.push(`/resumes/${this.experience.id}`);
      });
    },
  },
};
</script>
<template>
  <div class="experience-update">
    <form v-on:submit.prevent="updateExperience()">
      <h1>Edit</h1>
      <div>
        <div class="form-group">
          Category:
          <input type="text" v-model="experience.category" />
        </div>
        <div class="form-group">
          Organization or Institution:
          <input type="text" v-model="experience.org_or_institution" />
        </div>
        <div class="form-group">
          Description:
          <input type="text" v-model="experience.description" />
        </div>
        <div class="form-group">
          Title:
          <input type="text" v-model="experience.title" />
        </div>
        <div class="form-group">
          Dates:
          <input type="text" v-model="experience.dates" />
        </div>
        <div class="form-group">
          Location:
          <input type="text" v-model="experience.location" />
        </div>
        <div class="form-group">
          Tags or Misc.:
          <input type="text" v-model="experience.misc" />
        </div>
      </div>
      <input type="submit" value="Update" />
    </form>
    <a v-bind:href="`/resumes/${experience.id}`">Back</a>
    <!-- <a href="/resumes/">Back</a> -->
  </div>
</template>

<style></style>
