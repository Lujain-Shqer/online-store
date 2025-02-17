<template>
  <div class="connectUsPage">
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#000"
      loader="bars"
      background-color="#000"
      :lock-scroll="false"
    />
 
    <!---->
    <div class="connect-ways text-center">
      <div class="container">
        <div class="row connect-way">
          <div class="col-lg-4 col-md-6 cards">
            <div class="card">
              <h3><v-icon icon="mdi-cellphone" /> To Connect </h3>
              <label> HEAD OFFICE </label>
              <p>2920042 11 00966</p>
              <p>0939984 59 00966</p>
              <p>5434737 53 00966</p>
              <label> RIYADH BRANCH</label>
              <p>0634681 54 00966</p>
              <p>2920042 11 00966</p>
              <label>DAMMAM BRANCH </label>
              <p>0634186 54 00966</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 cards">
            <div class="card email">
              <h3>
                <v-icon icon="mdi-email-open-outline" />Email
              </h3>
              <a href="mailto:info@alshriqi-safety.com">info@alshriqi-safety.com</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 cards">
            <div class="card">
              <h3><v-icon icon="mdi-map-marker-outline" />Address</h3>
              <ul>
                <label>HEAD OFFICE </label>
                <li>
                  <p>Riyadh - Kingdom of Saudi Arabia</p>
                  <p>Malaz - Aldhahran St</p>
                </li>
                <label>RIYADH BRANCH  </label>
                <li>
                  <p>Malaz - Aldhahran St</p>
                </li>
                <label>  DAMMAM BRANCH </label>
                <li>
                  <p>Dammam - Kingdom of Saudi Arabia </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="connect-us">
      <div class="container">
        <h3>Send A Message</h3>
        <form class="row">
          <div class="col-md-6">
            <div class="inputs">
              <input type="text" placeholder="Name" name="name"/>

              <input type="text" placeholder="Phone Number" name="phone_number" />

    
              <input
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div class="col-md-6">
            <textarea placeholder="Message"></textarea>
          </div>

          <button class="btn">Send</button>
        </form>
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
  name: "ConnectUs",
  data() {
    return {
      isLoading: false,

    };
  },
  methods: {},
  components: { FooterComponent, Loading },

};
</script>

<style>

.connectUsPage .connect .contentImage {
  text-align: center;
  padding-top: 13rem;
  z-index: 223;
  position: relative;
}
.connectUsPage .connect .contentImage h1 {
  font-weight: 900;
  font-size: 8vmin;
}
.connectUsPage .connect .contentImage p span {
  color: #f5821f;
}
.connectUsPage .connect .contentImage p a {
  color: #aaaaa6;
  text-decoration: none;
  z-index: 666666666;
  position: relative;
}
.connectUsPage .connect-ways {
  background: #eeeee4;
  padding: 7vh 0 3vh;
}
.connectUsPage .connect-way {
  justify-content: center;
}
.connectUsPage .connect-ways ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.connectUsPage .connect-ways label {
  color: #ffff99;
  margin: 1rem 0;
}
.connectUsPage .connect-ways .cards {
  margin-bottom: 2rem;
}
.connectUsPage .connect-ways .card {
  height: 100%;
  padding: 2vh;
  border: 1px solid #343434;
  transition: 0.5s ease-in-out;
  background: #161616;
  color: #eee;
}
.connectUsPage .connect-ways .email {
  justify-content: space-evenly;
}
.connectUsPage .connect-ways .card h3 {
  color: #bebebe;
  display: flex;
  justify-content: center;
  align-items: center;
}
.connectUsPage .connect-ways .email a{
  text-decoration: none;
  color: #FFF;
}

.connectUsPage .connect-us {
  padding: 6vh;
}
.connectUsPage .connect-us h3 {
  color: #404040;
}
.connectUsPage .connect-us .inputs {
  width: 100%;
}
.connectUsPage .connect-us input,
.connectUsPage .connect-us textarea {
  display: block;
  border: 1px solid #515151;
  margin: 1rem 0;
  padding: 1rem;
  background: #00000033;
  border-radius: 2px;
  color: #000;
}
.connectUsPage .connect-us input {
  width: 80%;
}
.connectUsPage .connect-us textarea {
  width: 100%;
  height: 13rem;
}
.connectUsPage .connect-us button {
  background: #404040;
  color: #fff;
  width: auto;
  padding: 0.2rem 2rem;
  border-radius: 2px;
  margin: 0 12px;
}
/* @media (max-width: 575px) {
  .connectUsPage .connect-ways .email {
    padding: 0;
  }
} */
</style>
