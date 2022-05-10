<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      trainings: [],
    };
  },
  created: function () {
    axios.get("/experiences").then((response) => {
      this.experiences = response.data;
      console.log("All experiences", this.experiences);
    });
    axios.get("/trainings").then((response) => {
      this.trainings = response.data;
      console.log("All trainings", this.trainings);
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
    <div v-for="training in trainings" v-bind:key="training.id">
      <h1>{{ training.category }}</h1>
      <h3>{{ training.title }}</h3>
      <h4>Tags: {{ training.misc }}</h4>
      <br />
      <a v-bind:href="`/trainings/${training.id}`">More info</a>
    </div>
  </div>
</template>

<style></style>
