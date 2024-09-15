<script setup>
import Basic from "@/components/ui-components/tabs/Basic.vue";
import Stacked from "@/components/ui-components/tabs/Stacked.vue";
import Vertical from "@/components/ui-components/tabs/Vertical.vue";
import Alignment from "@/components/ui-components/tabs/Alignment.vue";
import Pagination from "@/components/ui-components/tabs/Pagination.vue";
import CustomIcons from "@/components/ui-components/tabs/CustomIcons.vue";
import Fixed from "@/components/ui-components/tabs/Fixed.vue";
import Grow from "@/components/ui-components/tabs/Grow.vue";
import ProgrammaticNavigation from "@/components/ui-components/tabs/ProgrammaticNavigation.vue";
import Dynamic from "@/components/ui-components/tabs/Dynamic.vue";
import BasicPill from "@/components/ui-components/tabs/BasicPill.vue";
import VerticalPill from "@/components/ui-components/tabs/VerticalPill.vue";

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
    name: "Stacked",
    to: "stacked",
  },
  {
    name: "Vertical",
    to: "vertical",
  },
  {
    name: "Alignment",
    to: "alignment",
  },
  {
    name: "Pagination",
    to: "pagination",
  },
  {
    name: "Custom Icons",
    to: "custom-icons",
  },
  {
    name: "Fixed",
    to: "fixed",
  },
  {
    name: "Grow",
    to: "grow",
  },
  {
    name: "Programmatic Navigation",
    to: "programmatic-navigation",
  },
  {
    name: "Dynamic",
    to: "dynamic",
  },
  {
    name: "Basic Pill",
    to: "basic-pill",
  },
  {
    name: "Vertical Pill",
    to: "vertical-pill",
  },
];

useSeoMeta({
  title: "Tabs",
  ogTitle: "Tabs",
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
            title="Tabs"
            subtitle="The v-tabs component is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content."
          />
        </div>
        <Basic />
        <Stacked />
        <Vertical />
        <Alignment />
        <Pagination />
        <CustomIcons />
        <Fixed />
        <Grow />
        <ProgrammaticNavigation />
        <Dynamic />
        <BasicPill />
        <VerticalPill />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
