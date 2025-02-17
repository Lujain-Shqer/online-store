<template>
  <Loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="false"
    color="#000"
    loader="bars"
    background-color="#000"
    :lock-scroll="false"
  />
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- Mobile Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <!-- Right-Aligned Links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AboutUs" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">Media Center</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ConnectUs" class="nav-link">Contact Us</router-link>
          </li>
        </ul>

        <!-- Language Switcher -->
        <div class="ms-3">
          <button class="language">AR</button>
        </div>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          width="120"
          height="120"
          class="d-inline-block align-text-top"
        />
      </a>

      <!-- Mobile Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Categories List -->
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item" v-for="category in categories" :key="category" @click="handleCategoryClick(category)">
            <span class="nav-link"> {{ category }}</span>
          </li>
       
        </ul>
      </div>

      <!-- Search Bar with 3 Icons -->
      <div class="d-flex align-items-center">
        <!-- Search Input -->
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search..." />
          <button class="btn btn-outline-secondary">
            <i class="mdi mdi-magnify"></i>
            <!-- MDI Search Icon -->
          </button>
        </div>
        <!-- Icons -->
        <div class="d-flex me-2">
          <img src="@/assets/icons/icon3.png" alt="Icon 1" class="icon" />
          <img src="@/assets/icons/icon2.png" alt="Icon 2" class="icon" />
         <router-link to="/CartView"> <img src="@/assets/icons/icon1.png" alt="Icon 3" class="icon" /></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  data() {
    return {
      categories: [],
      isLoading: false,
    };
  },

  methods: {
    getCategories() {
      this.isLoading = true;
      fetch("https://fakestoreapi.com/products/categories")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
          this.isLoading = false;
        });
    },

    handleCategoryClick(category) {
      localStorage.setItem("category_name", category);
      // console.log("Selected Category:", localStorage.getItem("category_name"));
      // Example: Navigating to the selected category page
      this.$router.push({ path: `/Products/${category.replaceAll(" ", "-")}` });
    },
  },

  beforeMount() {
    this.getCategories();
  },

  components: {
    Loading,
  },
};
</script>
<style>
.navbar button.language {
  color: #000;
  font-weight: 700;
  margin-right: 5vh;
}
.navbar .navbar-collapse li span {
  text-transform: uppercase;
  color: #000;
  font-weight: 700;
}
/* Custom styling */
.nav-link {
  cursor: pointer;
  font-weight: 500;
  color: #333;
}
.nav-link:hover {
  color: #007bff;
}
.navbar .input-group input {
  background: #eeeee4;
  border-radius: 0;
}
.navbar .input-group button {
  background: #eeeee4;
  border-radius: 0;
  border: 0;
}
.navbar .input-group button i {
  font-size: 3vh;
  color: #000;
}
/* Icon Styling */
.icon {
  width: 30px;
  height: 30px;
  margin: 0 15px;
}
</style>
