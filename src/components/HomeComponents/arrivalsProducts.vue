<template>
  <Carousel
    class="arrivalsProducts"
    :itemsToShow="3.95"
    :wrapAround="true"
    :transition="500"
  >
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item">
        <div class="card">
          <img :src="slide.image" :alt="slide.title" />
          <p>{{ slide.title }}</p>
          <p>AED <span>{{ slide.oldPrice }}</span> {{ slide.newPrice }}</p>
        </div>
      </div>
    </Slide>

    <!-- Addons: Arrows & Pagination -->
    <template #addons>
      <Navigation />  <!-- ✅ Adds Left & Right Arrows -->
      <Pagination />  <!-- ✅ Adds Pagination Dots -->
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"; 

import "vue3-carousel/dist/carousel.css"; // ✅ Import default styles

export default defineComponent({
  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/D.png"),
          title: "Lorem ipsum dolor 1",
          oldPrice: "899.00",
          newPrice: "800.00",
        },
        {
          image: require("@/assets/images/H.png"),
          title: "Lorem ipsum dolor 2",
          oldPrice: "999.00",
          newPrice: "850.00",
        },
        {
          image: require("@/assets/images/F.png"),
          title: "Lorem ipsum dolor 3",
          oldPrice: "1099.00",
          newPrice: "900.00",
        },
        {
          image: require("@/assets/images/G.png"),
          title: "Lorem ipsum dolor 4",
          oldPrice: "1199.00",
          newPrice: "950.00",
        },
        {
          image: require("@/assets/images/H.png"),
          title: "Lorem ipsum dolor 5",
          oldPrice: "1299.00",
          newPrice: "1000.00",
        },
      ],
    };
  },
  name: "arrivalsProducts",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation, // ✅ Import Navigation for Arrows
  },
});
</script>

<style>
.arrivalsProducts .carousel__viewport {
  /* padding: 2rem 0; */
}
.arrivalsProducts .carousel__slide {
  padding: 5px;
}

.arrivalsProducts .carousel__slide {
  opacity: 0.9;
}

.arrivalsProducts .carousel__slide--prev,
.arrivalsProducts .carousel__slide--next,
.arrivalsProducts .carousel__slide--active {
  opacity: 1;
}

.arrivalsProducts .card {
  margin: 1rem 0;
  padding: 0.5rem;
  height: 95%;
  border: 0;
  border-radius: 0;

}

.arrivalsProducts .card img {
  width: 230px;
  height: 280px !important;
  border-radius: 3px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
}
.arrivalsProducts .card p:last-of-type {
  color: #000;
  font-weight: 700;
}
.arrivalsProducts .card p span {
  text-decoration: line-through;
  margin-right: 3vh;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .arrivalsProducts .carousel__slide {
    width: 30% !important;
  }
}
@media (max-width: 991px) {
  .arrivalsProducts .carousel__slide {
    width: 50% !important;
  }
}
@media (max-width: 500px) {
  .arrivalsProducts .carousel__slide {
    width: 80% !important;
  }
}
</style>
