<script setup>
import Basic from "@/components/ui-components/breadcrumb/Basic.vue";
import Density from "@/components/ui-components/breadcrumb/Density.vue";
import Divider from "@/components/ui-components/breadcrumb/Divider.vue";

const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "Basic",
    to: "basic",
  },
  {
    name: "Divider",
    to: "divider",
  },
  {
    name: "Density",
    to: "density",
  },
];

useSeoMeta({
  title: "Breadcrumb",
  ogTitle: "Breadcrumb",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col lg="9" md="12">
        <!-- Intro -->
        <div id="intro">
          <GlobalsIntro
            page-intro
            title="Breadcrumb"
            subtitle="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
          />
        </div>
        <Basic />
        <Density />
        <Divider />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
