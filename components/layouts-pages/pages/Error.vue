<script setup>
import error404 from "/images/pages/404-error-img.png";
</script>
<template>
  <div class="d-flex align-center justify-center flex-column mb-12">
    <div class="mb-12">
      <img :src="error404" class="img-wrapper" />
    </div>
    <div class="text-center">
      <h1 class="text-h1">Oops! the page not found.</h1>
      <p class="mb-5">Or simply leverage the expertise of our consultation team.</p>
      <v-btn to="/"> Go Home </v-btn>
    </div>
  </div>
</template>
