<script setup>
import Basic from "@/components/ui-components/image/Basic.vue";
import Cover from "@/components/ui-components/image/Cover.vue";
import Height from "@/components/ui-components/image/Height.vue";
import Placeholder from "@/components/ui-components/image/Placeholder.vue";
import Errors from "@/components/ui-components/image/Errors.vue";
import Grid from "@/components/ui-components/image/Grid.vue";

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
    name: "Cover",
    to: "cover",
  },
  {
    name: "Height",
    to: "height",
  },
  {
    name: "Placeholder",
    to: "placeholder",
  },
  {
    name: "Error",
    to: "error",
  },
  {
    name: "Grid",
    to: "grid",
  },
];

useSeoMeta({
  title: "Image",
  ogTitle: "Image",
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
            title="Image"
            subtitle="The v-img component is packed with features to support rich media. Combined with the vuetify-loader, you can add dynamic progressive images to provide a better user experience."
          />
        </div>
        <Basic />
        <Cover />
        <Height />
        <Placeholder />
        <Errors />
        <Grid />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
