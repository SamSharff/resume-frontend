<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
  methods: {
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<template>
  <div class="company-name">
    <h1><strong>RsmDtbs</strong></h1>
  </div>
  <nav>
    <span>
      <router-link to="/">Home</router-link>
    </span>
    <span v-if="!isLoggedIn">
      |
      <router-link to="/signup">Sign Up</router-link>
    </span>
    <span v-if="!isLoggedIn">
      |
      <router-link to="/login">Log In</router-link>
    </span>
    <span v-if="isLoggedIn">
      |
      <router-link to="/resumes">All Data</router-link>
    </span>
    <span v-if="isLoggedIn">
      |
      <router-link to="/logout">Log Out</router-link>
    </span>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
