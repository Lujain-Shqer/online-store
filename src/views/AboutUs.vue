<template>
  <div class="aboutPage">
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#000"
      loader="bars"
      background-color="#000"
      :lock-scroll="false"
    />
    <div class="about">
      <div class="container">
        <h3>ALSHRIQI FOR SAFETY TOOLS:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ab
          illo atque sapiente quisquam molestiae magni totam a laudantium quae
          corrupti, natus beatae in voluptatum officia quod deserunt ullam
          assumenda.
        </p>
        <h3>Nature of institutional activity:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum
          esse laboriosam odio corrupti officiis non dolorum consequatur vel
          voluptatem deleniti expedita quo, magnam porro debitis sequi voluptas
          dignissimos perferendis.
        </p>
      </div>
    </div>
    <!---->
    <div class="ourVision">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <ul class="list-unstyled tab-switch text-center">
              <li class="selected" data-class=".tab-one">Our Vision</li>
              <li data-class=".tab-two">Our Mission</li>
            </ul>
          </div>
          <div class="col-md-10">
            <div class="tabs-content">
              <div class="tab-one">
                <h3>Our Vision IN ALSHRIQI</h3>
                <p class="paraghraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur optio quo nihil nemo reiciendis laudantium quam
                  iure sunt, molestiae explicabo tempora ducimus error sequi
                  dolores suscipit tenetur ratione perspiciatis sit.
                </p>
              </div>
              <div class="tab-two">
                <h3>ur Mission IN ALSHRIQI</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus reprehenderit excepturi voluptas harum
                  voluptatum reiciendis inventore blanditiis illo, dolore
                  aliquid vel. Id cum excepturi quis numquam nihil dolorum
                  aliquam architecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
// Loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import FooterComponent from "@/components/global/FooterComponent.vue";
export default {
  name: "AboutUs",
  data() {
    return {
      isLoading: false,

    };
  },
  methods: {},
  components: { FooterComponent, Loading },
  mounted() {
    window.$(".tab-switch li").on("click", function () {
      // Add Selected Class To Active Link
      window.$(this).addClass("selected").siblings().removeClass("selected");
      // Hide All Divs
      window.$(".tabs-content > div").hide();
      // Show Div Connected With This Link
      window.$(window.$(this).data("class")).show();
    });
  },
};
</script>

<style>
.aboutPage .about {
  padding: 6vh 0;
  background: #111111;
}
.aboutPage .about h3 {
  color: #ffffff;
  margin-bottom: 2vh;
}
.aboutPage .ourVision {
  background: #eeeee4;
  padding: 6vh 0;
}
.aboutPage .ourVision h3 {
  color: #000000;
  margin-bottom: 2vh;
}
.aboutPage p {
  line-height: 1.8;
  color: #aaaaa6;
}
.aboutPage .tab-switch li {
  background-color: #333;
  color: #fff;
  border-bottom: 1px solid #fff;
  height: 110px;
  line-height: 110px;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
}

.aboutPage .tab-switch li.selected,
.aboutPage .tab-switch li:hover {
  background-color: #aaaaaa;
}
.aboutPage .tabs-content div:not(.tab-one) {
  display: none;
}

.aboutPage .tabs-content h3 {
  margin-top: 0;
  font-weight: bold;
  letter-spacing: -1px;
  margin-bottom: 20px;
}
.aboutPage .ourCustomers {
  padding: 6vh 0;
}
.aboutPage .ourCustomers img {
  width: 70px;
  height: 70px;
  margin: 0 1rem;
}
.aboutPage .ourCustomers h3 {
  color: #aaaaaa;
  margin-bottom: 2vh;
}
</style>
