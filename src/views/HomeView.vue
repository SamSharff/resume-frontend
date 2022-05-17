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
      <h1><strong>Welcome to Resume Database!</strong></h1>
      <br />
      <h4>We hold your history. You create the future.</h4>
      <div class="route-to-user-index-button">
        <button type="button" class="btn btn-primary btn-lg btn-block btn-dark" @click="$router.push('/resumes/')">
          See my data
        </button>
      </div>
    </div>
  </div>
</template>

<style>
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
