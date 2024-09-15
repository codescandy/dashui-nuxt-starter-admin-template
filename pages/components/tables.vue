<script setup>
import Basic from "@/components/ui-components/tables/Basic.vue";
import Theme from "@/components/ui-components/tables/Theme.vue";
import Density from "@/components/ui-components/tables/Density.vue";
import Height from "@/components/ui-components/tables/Height.vue";
import FixedHeader from "@/components/ui-components/tables/FixedHeader.vue";

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
    name: "Theme",
    to: "theme",
  },
  {
    name: "Density",
    to: "density",
  },
  {
    name: "Height",
    to: "height",
  },
  {
    name: "Fixed Header",
    to: "fixed-header",
  },
];

useSeoMeta({
  title: "Tables",
  ogTitle: "Tables",
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
            title="Tables"
            subtitle="The simpler of the table components is v-table, a basic wrapper component for the HTML <table> element. In addition, regular table elements such as <thead>, <tbody>, <tr>, and <td> work by default."
          />
        </div>
        <Basic />
        <Theme />
        <Density />
        <Height />
        <FixedHeader />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
