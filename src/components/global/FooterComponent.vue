<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <div class="logoFooter">
            <img src="@/assets/images/logoo.png" />
          </div>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src="@/assets/icons/facebook_Gold.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img src="@/assets/icons/Youtube - Gold.png" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src="@/assets/icons/instagram_Gold.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <img src="@/assets/icons/Twitter - Gold.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-4" style="margin: auto">
          <h6><router-link to="/" class="h">Home</router-link></h6>
          <h6><router-link to="#">About Us</router-link></h6>
          <h6><router-link to="#">Media Center</router-link></h6>
          <h6><router-link to="#">Contact Us</router-link></h6>
        </div>
        <div class="col-lg-3 col-md-4" style="margin: auto">
          <h6>Electronics</h6>
          <h6>Jwelery</h6>
          <h6>Men Clothing</h6>
          <h6>Women Clothing</h6>
        </div>
        <div class="col-lg-3 col-md-4" style="margin: auto">
          <h3>Contact Us</h3>
          <h6>+971 00 000 000</h6>
          <h6>+971 00 000 000</h6>
          <h6><a href="#">info@gmail.com</a></h6>
        </div>
      </div>
    </div>
    <hr />
    <p class="text-center">&copy; Develpoer Test 2024, All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {},
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
