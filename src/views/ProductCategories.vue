<template>
  <div class="typeProductsPage">
    <Loading v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#000"
      loader="bars"
      background-color="#000"
      :lock-scroll="false"
    />

    <div class="types">
      <div class="container">
        <h2>Click on the type of products you want</h2>

        <div class="row" v-if="categories.length > 0">
          <div
            class="col-md-6"
            v-for="category in categories"
            :key="category"
          >
            <div class="card" @click="handleCategoryClick(category)">
              <div>
                <h3>{{ category }}</h3>
              </div>
            </div>
          </div>
        </div>
        <p class="nodata" v-else>There Is No Categories</p>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import FooterComponent from "@/components/global/FooterComponent.vue";

export default {
  name: "ProductCategorys",
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
    }
  },

  beforeMount() {
    this.getCategories();
  },

  components: {
    FooterComponent,
    Loading
  },
};
</script>

<style>
.typeProductsPage {
  min-height: 23vh;
  border: 1px solid #ccc;
}
.typeProductsPage .types {
  background: #fff;
  padding: 3rem 0;
}
.typeProductsPage .types h2 {
  color: #000;
}
.typeProductsPage .types .card {
  background: #eeeee4;
  color: #575757;
  margin: 1rem 0;
  padding: 2rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
