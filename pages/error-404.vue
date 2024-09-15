<script setup>
import Error from "@/components/layouts-pages/pages/Error.vue";

definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "404",
  ogTitle: "404",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-container class="h-100 d-flex align-center justify-center">
    <Error />
  </v-container>
</template>
