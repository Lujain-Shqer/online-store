<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <div class="logoFooter">
            <img src="@/assets/images/logoFooter.png" />
          </div>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src="@/assets/icons/Social_media/facebook_Gold.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img src="@/assets/icons/Social_media/Youtube - Gold.png" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src="@/assets/icons/Social_media/instagram_Gold.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <img src="@/assets/icons/Social_media/Twitter - Gold.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-4" style="margin: auto">
          <h6><router-link to="/" class="h">Home</router-link></h6>
          <h6><router-link to="/AboutUs">About Us</router-link></h6>
          <h6><router-link to="#">Media Center</router-link></h6>
          <h6><router-link to="/ConnectUs">Contact Us</router-link></h6>
        </div>
        <div class="col-lg-3 col-md-4 category" style="margin: auto">
          <h6
            v-for="category in categories"
            :key="category"
            @click="handleCategoryClick(category)"
          >
            {{ category }}
          </h6>
        </div>
        <div class="col-lg-3 col-md-4" style="margin: auto">
          <h3>Contact Us</h3>
          <h6>+971 00 000 000</h6>
          <h6>+971 00 000 000</h6>
          <h6><a href="mailto:info@gmail.com">info@gmail.com</a></h6>
        </div>
      </div>
    </div>
    <hr />
    <p class="text-center">&copy; Develpoer Test 2024, All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      isLoading: false,
    };
  },
  name: "FooterComponent",
  computed: {},

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
};
</script>

<style>
.footer {
  left: 0;
  background-color: #000;

  position: absolute;
  right: 0;
}

.footer .container {
  padding-bottom: 0.5rem;
}
.footer h6 {
  line-height: 3;
  color: #dddddd;
}
.footer h3,
.h {
  color: #fff !important;
  line-height: 3;
}
.footer .category h6{
  cursor: pointer;
}
.footer ul {
  display: flex;
  list-style-type: none;
  text-align: center;
}
.footer ul li {
  margin: 0 0.2rem;
}
.footer ul li img {
  width: 30px;
}
.footer .logoFooter img {
  width: 200px;
  height: 200px;
}

.footer p {
  color: #ddd;
}
.footer h6 a {
  text-decoration: none;
  color: #fff !important;
}
</style>
