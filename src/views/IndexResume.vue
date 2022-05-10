<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
    };
  },
  created: function () {
    axios.get("/experiences").then((response) => {
      this.experiences = response.data;
      console.log("All experiences", this.experiences);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="index">
    <h1>Welcome to your resume database</h1>
    <div v-for="experience in experiences" v-bind:key="experience.id">
      <h1>{{ experience.category }}</h1>
      <h3>{{ experience.title }}</h3>
      <h4>Tags: {{ experience.misc }}</h4>
      <br />
      <a v-bind:href="`/resumes/${experience.id}`">More info</a>
    </div>
  </div>
</template>

<style></style>
