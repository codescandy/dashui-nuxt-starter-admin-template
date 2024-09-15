<script setup>
import Basic from "@/components/ui-components/chip-group/Basic.vue";
import Column from "@/components/ui-components/chip-group/Column.vue";
import FilterResults from "@/components/ui-components/chip-group/FilterResults.vue";
import Mandatory from "@/components/ui-components/chip-group/Mandatory.vue";
import Multiple from "@/components/ui-components/chip-group/Multiple.vue";
import ProductCard from "@/components/ui-components/chip-group/ProductCard.vue";

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
    name: "Column",
    to: "column",
  },
  {
    name: "Filter results",
    to: "filter-results",
  },
  {
    name: "Mandatory",
    to: "mandatory",
  },
  {
    name: "Multiple",
    to: "multiple",
  },
  {
    name: "Product Card",
    to: "product-card",
  },
];

useSeoMeta({
  title: "Chip group",
  ogTitle: "Chip group",
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
            title="Chip group"
            subtitle="The v-chip-group supercharges the v-chip component by providing groupable functionality. It is used for creating groups of selections using chips."
          />
        </div>
        <Basic />
        <Column />
        <FilterResults />
        <Mandatory />
        <Multiple />
        <ProductCard />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
