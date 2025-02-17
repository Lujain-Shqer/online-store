<template>
  <div class="productsPage">
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#000"
      loader="bars"
      background-color="#000"
      :lock-scroll="false"
    />
    <div class="products">
      <div class="container">
        <div class="row" v-if="products.length > 0">
          <div
            class="col-lg-3 col-md-4 col-sm-6 pro"
            v-for="product in products"
            :key="product"
            :data-id="product.id"
          >
            <div class="card">
              <img :src="product.image" alt="Product Image" />
              <h6>{{ product.title }}</h6>
              <div class="price">
                <span>{{ product.price }} $</span>
              </div>
              <a class="more" @click="goToProduct(product.id)">more</a>
            </div>
          </div>
        </div>
        <p class="nodata" v-else>There Is No Products</p>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script>
// Loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import FooterComponent from "@/components/global/FooterComponent.vue";

export default {
  name: "ProductsPage",
  props: {
    name: String,
  },
  data() {
    return {
      products: [],
      isLoading: false,
      categoryName: localStorage.getItem("category_name"),
    };
  },
  watch: {
    categoryName() {
      // console.log(`Category changed from "${oldVal}" to "${newVal}"`);
      this.getProducts();
    },
  },
  methods: {
    getProducts() {
      if (!this.categoryName) return;

      this.isLoading = true;

      fetch(`https://fakestoreapi.com/products/category/${this.categoryName}`)
        .then((response) => response.json())
        .then((data) => {
          this.isLoading = false;
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          this.isLoading = false;
        });
    },
    checkLocalStorage() {
      const newCategory = localStorage.getItem("category_name");
      if (newCategory !== this.categoryName) {
        // console.log(`Detected change in localStorage: ${newCategory}`);
        this.categoryName = newCategory;
      }
    },
    goToProduct(productId) {
    console.log("Selected Product ID:", productId);
    localStorage.setItem("product_id", productId);
    // console.log(localStorage.getItem('product_id'))
    // Navigate to product details page (optional)
    this.$router.push({ path: `/ProductView` });
  },
  },
  mounted() {
    // let that = this;

  
    this.getProducts();

    this.localStorageInterval = setInterval(this.checkLocalStorage, 500);
  },
  beforeUnmount() {
    clearInterval(this.localStorageInterval);
  },
  components: {
    FooterComponent,
    Loading,
  },
};
</script>

<style>
.productsPage {
  min-height: 23vh;
  border: 1px solid #ccc;
}
.productsPage .product {
  height: 70vh;
}
.productsPage .products {
  background: #eeeee4;
  padding: 3rem 0;
}
.productsPage .row {
  display: flex;
  flex-wrap: wrap;
}
.productsPage .row .pro {
  margin-bottom: 2vh;
}
.productsPage .products .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures consistent spacing */
  align-items: center;
  height: 100%; /* Makes all cards the same height */
  padding: 2vh;
}
.productsPage .products .card h6 {
  margin: 1rem 0;
}
.productsPage .products .card .price {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.productsPage .products .card .price span {
  color: green;
  text-decoration: none;
}
.productsPage .products .card img {
  width: 100%;
  height: 200px;
  border-radius: 3px;
  /* margin: auto; */
}
.productsPage .products .card a {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #000;
  border-radius: 10px;
  margin-top: 1rem;
  display: block;
  text-align: center;
  padding: 1vh 10vh;
  text-transform: uppercase;
}
/* V-Select */
.v-select {
  padding: 0;
  margin-bottom: 1rem;
}
.v-field__input {
  padding: 0.5rem 1rem;
  min-height: 2.8rem;
}
.v-select .v-field {
  border-radius: 10px;
}
.v-select .v-field .v-field__input {
  display: block;
  text-align: end;
}
.v-select .v-field:hover .v-select .v-field:focus {
  border: 0 !important;
}
.v-select span,
.v-select .v-icon {
  color: #f5821f;
}
.v-select .v-icon {
  text-align: end;
  position: absolute;
  left: 10px;
}
.v-select input {
  border: none;
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  width: 100%;
}
.v-select label {
  margin: 0 1rem;
}
.v-select .v-input__details {
  display: none;
}
/* Serach */
.form-wrapper {
  border-radius: 8px;
  overflow: hidden;
  padding: 8px;
  background: #00000033;
  margin-bottom: 1rem;
}

.form-wrapper #search {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #fff;
  height: 20px;
  padding: 20px;
  width: 100px;
}

.form-wrapper #search:focus {
  border-color: #aaa;
  outline: 0;
}

.form-wrapper #search:-moz-placeholder,
.form-wrapper #search:-ms-input-placeholder,
.form-wrapper #search::-webkit-input-placeholder {
  color: #999;
  font-weight: normal;
}

.form-wrapper #submit {
  background-color: #f5821f;
  border: 1px solid #f5821f;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  color: #fafafa;
  cursor: pointer;
  height: 42px;
  float: right;
  font: 15px Arial, Helvetica;
  padding: 0 2rem;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  width: auto;
}

.form-wrapper #submit::-moz-focus-inner {
  border: 0;
}
</style>
