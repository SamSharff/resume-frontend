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
      console.log("Showing experience", response.data);
      this.experience = response.data;
    });
  },
};
</script>
<template>
  <div class="experiences-show">
    <p>{{ experience.title }}</p>
  </div>
</template>

<style></style>
