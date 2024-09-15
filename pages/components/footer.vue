<script setup>
import Basic from "@/components/ui-components/footer/Basic.vue";
import Border from "@/components/ui-components/footer/Border.vue";
import Elevation from "@/components/ui-components/footer/Elevation.vue";
import Height from "@/components/ui-components/footer/Height.vue";
import Rounded from "@/components/ui-components/footer/Rounded.vue";
import Company from "@/components/ui-components/footer/Company.vue";
import Primary from "@/components/ui-components/footer/Primary.vue";
import Secondary from "@/components/ui-components/footer/Secondary.vue";

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
    name: "Border",
    to: "border",
  },
  {
    name: "Elevation",
    to: "elevation",
  },
  {
    name: "Height",
    to: "height",
  },
  {
    name: "Rounded",
    to: "rounded",
  },
  {
    name: "Company Footer",
    to: "company-footer",
  },
  {
    name: "Primary Footer",
    to: "primary-footer",
  },
  {
    name: "Secondary Footer",
    to: "secondary-footer",
  },
];

useSeoMeta({
  title: "Footer",
  ogTitle: "Footer",
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
            title="Footer"
            subtitle="The v-footer component is used for displaying general information that a user might want to access from any page within your site."
          />
        </div>
        <Basic />
        <Border />
        <Elevation />
        <Height />
        <Rounded />
        <Company />
        <Primary />
        <Secondary />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
