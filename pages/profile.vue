<script setup>
import UserProfile from "@/components/apps/profile/UserProfile.vue";
import OverView from "@/components/apps/profile/Overviews.vue";

useSeoMeta({
  title: "Profile",
  ogTitle: "Profile",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <v-container fluid>
    <user-profile />
    <over-view />
  </v-container>
</template>
