<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      trainings: [],
      checked: false,
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
  methods: {
    consoleLog: function () {
      this.experiences.forEach((experience) => {
        if (experience.checked) {
          console.log("this experience is checked, hooray!", experience);
        }
      });
      this.trainings.forEach((training) => {
        if (training.checked) {
          console.log("this training is checked, hooray!", training);
        }
      });
    },
  },
};
</script>

<template>
  <div class="index">
    <h1>Welcome to your resume database</h1>
    <div>
      <!-- CREATE NEW EXPERIENCE BUTTON -->
      <div class="create-experience-button"></div>
      <button @click="$router.push('/resumes/new')">Create New Experience</button>
      <!-- CREATE NEW EXPERIENCE BUTTON -->

      <br />
      ||

      <!-- CREATE NEW TRAINING BUTTON -->
      <div class="create-training-button"></div>
      <button @click="$router.push('/trainings/new')">Create New Training</button>
      <!-- CREATE NEW TRAINING BUTTON -->
      <br />
      <br />
      <br />

      <!-- INDEX EXPERIENCES -->
      <!-- CHECKBOXES EXPERIENCES -->

      <div v-for="experience in experiences" v-bind:key="experience.id">
        <h1>{{ experience.category }}</h1>
        <h3>Title: {{ experience.title }}</h3>
        <h4>Description: {{ experience.description }}</h4>
        <h4>Tags: {{ experience.misc }}</h4>
        <a v-bind:href="`/resumes/${experience.id}`">More info</a>
        <div class="form-check">
          <input
            class="text-justify form-check-input"
            v-model="experience.checked"
            type="checkbox"
            value="Experience"
            id="flexCheckDefault1"
          />
          <label class="form-check-label" for="flexCheckDefault">Export</label>
        </div>
      </div>

      <!-- INDEX TRAININGS -->
      <!-- CHECKBOXES TRAININGS -->

      <div v-for="training in trainings" v-bind:key="training.id">
        <h1>{{ training.category }}</h1>
        <h4>Degree or Certification: {{ training.degree_or_cert }}</h4>
        <h4>Tags: {{ training.misc }}</h4>
        <a v-bind:href="`/trainings/${training.id}`">More info</a>
        <input
          class="text-justify form-check-input"
          v-model="training.checked"
          type="checkbox"
          value="Training"
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">Export</label>
      </div>
      <!-- CONSOLELOG BUTTON -->
      <button v-on:click="consoleLog()">Console Log</button>
    </div>
  </div>
</template>

<style></style>
