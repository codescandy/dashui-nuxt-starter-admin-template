<script setup>
import Basic from "@/components/ui-components/skeleton-loader/Basic.vue";
import Type from "@/components/ui-components/skeleton-loader/Type.vue";
import Loading from "@/components/ui-components/skeleton-loader/Loading.vue";
import Elevation from "@/components/ui-components/skeleton-loader/Elevation.vue";
import Boilerplate from "@/components/ui-components/skeleton-loader/Boilerplate.vue";
import Example from "@/components/ui-components/skeleton-loader/Example.vue";

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
    name: "Type",
    to: "type",
  },
  {
    name: "Loading",
    to: "loading",
  },
  {
    name: "Elevation",
    to: "elevation",
  },
  {
    name: "Boilerplate",
    to: "boilerplate",
  },
  {
    name: "Example",
    to: "example",
  },
];

useSeoMeta({
  title: "Skeleton loader",
  ogTitle: "Skeleton loader",
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
            title="Skeleton loader"
            subtitle="Skeleton loaders provide a simple way to display loading placeholders in your application."
          />
        </div>
        <Basic />
        <Type />
        <Loading />
        <Elevation />
        <Boilerplate />
        <Example />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
