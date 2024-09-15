<script setup>
import Basic from "@/components/ui-components/data-iterators/Basic.vue";
import Slots from "@/components/ui-components/data-iterators/Slots.vue";
import HeaderAndFooter from "@/components/ui-components/data-iterators/HeaderAndFooter.vue";
import ControllableProps from "@/components/ui-components/data-iterators/ControllableProps.vue";

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
    name: "Slots",
    to: "slots",
  },
  {
    name: "Header and Footer",
    to: "header-and-footer",
  },
  {
    name: "Controllable props",
    to: "controllable-props",
  },
];

useSeoMeta({
  title: "Data iterator",
  ogTitle: "Data iterator",
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
            title="Data iterator"
            subtitle="The v-data-iterator component is used for displaying arbitrary data, and shares a majority of its functionality with the v-data-table component. Features include sorting, searching, pagination, and selection."
          />
        </div>
        <Basic />
        <Slots />
        <HeaderAndFooter />
        <ControllableProps />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
