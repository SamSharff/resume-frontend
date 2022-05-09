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
      <!-- <h3>Details</h3> -->
      <h1>{{ experience.category }}</h1>
      <h3>{{ experience.title }}</h3>
      <h4>Tags: {{ experience.misc }}</h4>
      <br />
      <!-- <button v-on:click="consoleLog(experience)">Console Log</button> -->
      <!-- <p>category: {{ experience.category }}</p> -->
      <!-- <a v-bind:href="`/experiences/${experience.id}`">More info</a> -->
      <!-- </div> -->
      <button v-on:click="`/experiences/${experience.id}`">More info</button>
    </div>
  </div>
</template>

<style></style>
