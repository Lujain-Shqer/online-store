<template>
  <div class="homePage">
    <!-- Slider sales -->
    <div class="sliderSales">
        <carouselProducts />
    </div>
    <!-- Header -->
    <div class="header">
      <button class="btn">
        SEE MORE <v-icon icon="mdi-arrow-right-thin"></v-icon>
      </button>
    </div>


    <!-- Header -->
    <!-- Sign Up -->
    <div class="best padding">
      <div class="container">
        <h2>Special offers</h2>

        <specialProducts />
      </div>
    </div>
    <div class="head"></div>

    <div class="new padding">
      <div class="container">
        <h2>New Arrivals</h2>
        <arrivalsProducts />
      </div>
    </div>
    <!---->
    <div class="sign">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h4>Become A Member & Get 15% Off</h4>
          </div>
          <div class="col-md-4">
            <button class="btn">
              Sign Up For Free <v-icon icon="mdi-arrow-right-thin"></v-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import FooterComponent from "@/components/global/FooterComponent.vue";

import arrivalsProducts from "@/components/HomeComponents/arrivalsProducts.vue";

import specialProducts from "@/components/HomeComponents/specialProducts.vue";
import carouselProducts from "@/components/HomeComponents/carouselProducts.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {},
  components: { FooterComponent, specialProducts, arrivalsProducts, carouselProducts },
};
</script>

<style>

 .homePage .sliderSales{
  padding-bottom: 10vh;
  position: relative;
 }

.homePage .header {
  background-image: url("@/assets/images/Jewelry.jpg");
  background-size: cover;
  height: 80vh;
  position: relative;
}
.homePage .header button {
  padding: 5px 20px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  background: #fff;
  color: #000;  font-weight: 900;
  border-radius: 0;
  letter-spacing: 2px;

}
.homePage .head {
  background-image: url("@/assets/images/Untitled-1.jpg");
  background-size: cover;
  height: 100vh;
}
.homePage h2 {
  color: #000;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
}
.homePage .sign {
  background: #ede635;
  padding: 10vh 0;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}
.homePage .sign h4 {
  font-weight: 900;
}
.homePage .sign button {
  background: #000;
  color: #fff;
  padding: 5px 20px;
  font-weight: 900;
  letter-spacing: 2px;
  border-radius: 0;
}
@media (max-width: 768px) {
  .homePage .sign button {
    margin-top: 2vh;
  }
}
</style>
