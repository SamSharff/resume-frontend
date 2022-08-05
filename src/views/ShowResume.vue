<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function () {
    return {
      experience: {},
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      console.log("Showing experience", response.data);
      this.experience = response.data;
    });
  },
  methods: {
    formatDate: function (date) {
      return moment(date).add(10, "days").calendar();
    },
    destroyExperience: function () {
      axios.delete("/experiences/" + this.$route.params.id).then((response) => {
        console.log("Deleting experience!", response.data);
        this.$router.push("/resumes/");
      });
    },
  },
};
</script>
<template>
  <div class="experiences-show">
    <p>
      <strong>Category:</strong>
      {{ experience.category }}
    </p>
    <p>
      <strong>Organization or Institution:</strong>
      {{ experience.org_or_institution }}
    </p>
    <p>
      <strong>Description:</strong>
      {{ experience.description }}
    </p>
    <p>
      <strong>Title:</strong>
      {{ experience.title }}
    </p>
    <p>
      <strong>Dates:</strong>
      {{ experience.dates }}
    </p>
    <p>
      <strong>Location:</strong>
      {{ experience.location }}
    </p>
    <p>
      <strong>Tags or notes:</strong>
      {{ experience.misc }}
    </p>
    <p>
      <strong>Last updated:</strong>
      {{ formatDate(experience.updated_at) }}
    </p>
    <p>
      <strong>Entry created:</strong>
      {{ formatDate(experience.created_at) }}
    </p>
    <a href="/resumes">Back to all data</a>
    <br />
    <a v-bind:href="`/resumes/${experience.id}/edit`">Edit</a>
    <br />
    <button v-on:click="destroyExperience()">DELETE</button>
  </div>
</template>

<style></style>
