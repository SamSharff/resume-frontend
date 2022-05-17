<script>
export default {
  data: function () {
    return {
      message: "A database of your own professional history that allows you to quickly tailor your resume!",
    };
  },
  created: function () {},
};
</script>

<template>
  <!-- Experiences Index -->
  <div class="home">
    <div class="container">
      <h1>Welcome to Resume Database!</h1>
      <h4>We keep track of your history, so you can concentrate on your future.</h4>
      <div class="route-to-user-index-button">
        <button @click="$router.push('/resumes/')">See my data</button>
      </div>
    </div>
  </div>
</template>

<style>
/* .home {
  text-align: center;
  border: 3px solid;
  padding: 50px;
  border-color: #2c3e50;
} */
.home {
  text-align: center;
  width: 300px;
  border: 15px solid #2c3e50;
  padding: 50px;
  margin: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
