<template>
  <Carousel
    class="fullImageCarousel"
    :itemsToShow="1"
    :wrapAround="true"
    :transition="500"
  >
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item">
        <!-- Sidebar -->
        <div class="carousel__sidebar">
          <h1>Sales</h1>
          <p>Access A Limited Selection<br />With Up To 70% Off</p>
          <button>
            Shop Now <v-icon icon="mdi-arrow-right-thin"></v-icon>
          </button>
        </div>

        <!-- Full-Screen Image -->
        <div class="carousel__image-wrapper">
          <img :src="slide.image" :alt="slide.title" class="carousel__image" />
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css"; 

export default defineComponent({
  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/Header.jpg"),
        },
        {
          image: require("@/assets/images/Header.jpg"),
        },
        {
          image: require("@/assets/images/Header.jpg"),
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style scoped>
.fullImageCarousel .carousel__item {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
}

/* Sidebar */
.carousel__sidebar {
  width: 20%;
  background: rgb(238 238 228);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: left;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 11111;
}

.carousel__sidebar h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1vh;
}

.carousel__sidebar p {
  text-transform: uppercase;
  font-weight: 700;
}

.carousel__sidebar button {
  background: #000;
  color: #fff;
  border: 0;
  padding: 10px;
  font-weight: 900;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.5vh;
  cursor: pointer;
  border-bottom: 4px solid #fff;
    border-right: 4px solid #fff;
    transform: translate(9px, 2px);
}

.carousel__sidebar button:hover {
  background: #444;
}

/* Image Section */
.carousel__image-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
}

.carousel__image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 991px) {
  .carousel__sidebar {
    width: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    padding: 30px;
    z-index: 11111;
  }

  .carousel__sidebar h1 {
    font-size: 1.8rem;
  }

  .carousel__sidebar p {
    font-size: 1rem;
  }

  .carousel__sidebar button {
    width: 100%;
    padding: 12px;
  }
}
</style>
