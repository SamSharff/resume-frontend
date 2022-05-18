<script>
import axios from "axios";
import FileSaver from "file-saver";

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

    onTestSaveFile() {
      var output =
        " - - - - - - " +
        "CATEGORY" +
        " || " +
        "TITLE" +
        " || " +
        "DESCRIPTION" +
        " || " +
        "LOCATION" +
        " || " +
        "TAGS" +
        " - - - - - - " +
        "\n";

      this.experiences.forEach((experience) => {
        if (experience.checked) {
          console.log("this experience is checked, hooray!", experience);
          output =
            output +
            "-----" +
            experience.category +
            " | " +
            experience.title +
            " | " +
            experience.description +
            " | " +
            experience.location +
            " | " +
            experience.misc +
            "\n";
        }
      });
      var outputTwo =
        " - - - - - - " +
        "CATEGORY" +
        " || " +
        "ORG/INSTITUTION" +
        " || " +
        "DESCRIPTION" +
        " || " +
        "LOCATION" +
        " || " +
        "TAGS" +
        " - - - - - - " +
        "\n";

      this.trainings.forEach((training) => {
        if (training.checked) {
          console.log("this training is checked, hooray!", training);
          outputTwo =
            outputTwo +
            "-----" +
            training.category +
            " | " +
            training.org_or_institution +
            " | " +
            training.description +
            " | " +
            training.location +
            " | " +
            training.misc +
            "\n";
        }
      });

      var blob = new Blob([output, outputTwo], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(blob, "hello world.txt");
    },
  },
};
</script>

<template>
  <div class="index">
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

      <br />
      <br />

      <!-- EXPERIENCE TABLE -->
      <h3>Experience (Jobs, Skills, and Volunteer Work)</h3>
      <div class="container">
        <div class="table-responsive-xxl">
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Export</th>
                <th scope="col">Category</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Tags</th>
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
                  <label class="form-check-label" for="flexCheckDefault"></label>
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
        </div>
        <!-- TRAINING TABLE -->
      </div>
      <h3>Training (Education, Professional Development, and Certifications)</h3>
      <div class="container">
        <div class="table-responsive-xxl">
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Export</th>
                <th scope="col">Category</th>
                <th scope="col">Organization/Institution</th>
                <th scope="col">Description</th>
                <th scope="col">Tags.</th>
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
                  <label class="form-check-label" for="flexCheckDefault"></label>
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
        </div>
        <!-- CONSOLELOG BUTTON -->
        <button v-on:click="onTestSaveFile()">Export to file</button>
      </div>
    </div>
  </div>
</template>

<style></style>
