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
      <br />
      <div class="create-experience-button"></div>
      <button @click="$router.push('/resumes/new')">Create New Experience</button>
      <!-- CREATE NEW EXPERIENCE BUTTON -->

      <br />
      ||

      <!-- CREATE NEW TRAINING BUTTON -->
      <div class="create-training-button"></div>
      <button @click="$router.push('/trainings/new')">Create New Training</button>
      <!-- CREATE NEW TRAINING BUTTON -->

      <!-- INDEX EXPERIENCES -->
      <!-- CHECKBOXES EXPERIENCES -->

      <!-- <div v-for="experience in experiences" v-bind:key="experience.id">
        <h1>{{ experience.category }}</h1>
        <h3>Title: {{ experience.title }}</h3>
        <h4>Description: {{ experience.description }}</h4>
        <h4>Tags: {{ experience.misc }}</h4>
        <a v-bind:href="`/resumes/${experience.id}`">More info</a>
        || -->

      <!-- <input
          class="text-justify form-check-input"
          v-model="experience.checked"
          type="checkbox"
          value="Experience"
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">Export</label> -->

      <br />
      <br />
      <!-- </div> -->

      <!-- INDEX TRAININGS -->
      <!-- CHECKBOXES TRAININGS -->

      <!-- <div v-for="training in trainings" v-bind:key="training.id">
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
        <br />
        <br />
      </div> -->
      <!-- EXPERIENCE TABLE -->
      <div class="container">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Export</th>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Misc.</th>
              <th scope="col">More info</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="experience in experiences" :key="experience.id">
              <td>
                <input
                  class="text-justify form-check-input"
                  v-model="experience.checked"
                  type="checkbox"
                  value="Experience"
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">(butt)</label>
              </td>
              <td>{{ experience.category }}</td>
              <td>{{ experience.title }}</td>
              <td>{{ experience.description }}</td>
              <td>{{ experience.misc }}</td>
              <td>
                <a v-bind:href="`/resumes/${experience.id}`">More info</a>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- TRAINING TABLE -->
      </div>
      <div class="container">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Export</th>
              <th scope="col">Category</th>
              <th scope="col">Organization/Institution</th>
              <th scope="col">Description</th>
              <th scope="col">Misc.</th>
              <th scope="col">More info</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="training in trainings" :key="training.id">
              <!-- <th scope="row">1</th> -->
              <td>
                <input
                  class="text-justify form-check-input"
                  v-model="training.checked"
                  type="checkbox"
                  value="Training"
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">(butt)</label>
              </td>
              <td>{{ training.category }}</td>
              <td>{{ training.org_or_institution }}</td>
              <td>{{ training.description }}</td>
              <td>{{ training.misc }}</td>
              <td>
                <a v-bind:href="`/trainings/${training.id}`">More info</a>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- CONSOLELOG BUTTON -->
        <button v-on:click="consoleLog()">Console Log</button>
      </div>
    </div>
  </div>
</template>

<style></style>
