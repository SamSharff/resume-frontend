<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "A database of your own professional history that allows you to quickly tailor your resume!",
      experiences: {},
      newExperienceParams: {},
    };
  },
  created: function () {
    this.indexExperiences();
  },
  methods: {
    indexExperiences: function () {
      axios.get("/experiences").then((response) => {
        this.experiences = response.data;
        console.log(this.experiences);
      });
    },
    // createExperience: function () {
    //   axios.get("/experiences", this.newExperienceParams).then((response) => {
    //     console.log("New experience", response.data);
    //     this.ex
    //   })
    // }
    // consoleLog: function (experience) {
    //   console.log(experience);
    // },
  },
};
</script>

<template>
  <!-- Experiences Index -->
  <div class="home">
    <h1>Welcome to your Resume Database</h1>
    <div v-for="experience in experiences" v-bind:key="experience.id">
      <h1>{{ experience.category }}</h1>
      <h3>{{ experience.title }}</h3>
      <p>Details: {{ experience }}</p>
      <button v-on:click="consoleLog(experience)">Console Log</button>
    </div>
  </div>
</template>
