<script setup>
import ForgetPassword from "@/components/layouts-pages/authentications/ForgetPassword.vue";

definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Forget Password",
  ogTitle: "Forget Password",
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
        <ForgetPassword />
      </v-col>
    </v-row>
  </v-container>
</template>
