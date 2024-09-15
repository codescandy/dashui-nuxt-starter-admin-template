<script setup>
import SignIn from "@/components/layouts-pages/authentications/SignIn.vue";

definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Sign In",
  ogTitle: "Sign In",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-container fluid class="h-100">
    <v-row justify="center" align="center" class="h-100">
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <SignIn />
      </v-col>
    </v-row>
  </v-container>
</template>
