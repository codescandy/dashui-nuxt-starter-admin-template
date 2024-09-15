<script setup>
import Basic from "@/components/ui-components/parallax/Basic.vue";
import Content from "@/components/ui-components/parallax/Content.vue";
import CustomHeight from "@/components/ui-components/parallax/CustomHeight.vue";

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
    name: "Content",
    to: "content",
  },
  {
    name: "Custom height",
    to: "custom-height",
  },
];

useSeoMeta({
  title: "Parallax",
  ogTitle: "Parallax",
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
            title="Parallax"
            subtitle="The v-parallax component creates a 3d effect that makes an image appear to scroll slower than the window."
          />
        </div>
        <Basic />
        <Content />
        <CustomHeight />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
