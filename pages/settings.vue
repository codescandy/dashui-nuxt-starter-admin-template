<script setup>
import Settings from "@/components/apps/profile/Settings.vue";

useSeoMeta({
  title: "Settings",
  ogTitle: "Setting",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <v-container fluid>
    <GlobalsHeader title="General" />
    <settings />
  </v-container>
</template>
