<template>
  <app-navbar/>
  <router-view />
</template>

<script>
import AppNavbar from '@/components/global/AppNavbar.vue'

export default {
  name: 'App',
  data() {
    return {
      location: "/",
      main: 0,
    };
  },
  methods: {

  },
  mounted () {

  },
  components: {
    AppNavbar,
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 5px !important;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3a3b3c !important;
}

@font-face {
  font-family: Dubai-Regular;
  src: url(@/assets/fonts/Dubai/Dubai-Regular.ttf);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  direction: ltr;
}

body{
  min-height: 100vh;
}
#app {
    font-family: Dubai-Regular;

  color: #FFF;
  direction: ltr;
  min-height: 100vh;
}
.padding{
  padding: 10vh 0;
}
.nodata{
  color: red;
    text-align: center;
    margin-top: 10vh;
    font-size: 5vmin;
}
</style>
