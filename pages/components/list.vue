<script setup>
import Basic from "@/components/ui-components/list/Basic.vue";
import Rounded from "@/components/ui-components/list/Rounded.vue";
import Density from "@/components/ui-components/list/Density.vue";
import Nav from "@/components/ui-components/list/Nav.vue";
import ActionAndItemGroup from "@/components/ui-components/list/ActionAndItemGroup.vue";
import SubGroup from "@/components/ui-components/list/SubGroup.vue";
import TwoLinesAndSubheader from "@/components/ui-components/list/TwoLinesAndSubheader.vue";
import ThreeLine from "@/components/ui-components/list/ThreeLine.vue";
import UserList from "@/components/ui-components/list/UserList.vue";
import ProgressList from "@/components/ui-components/list/ProgressList.vue";
import Shaped from "@/components/ui-components/list/Shaped.vue";

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
    name: "Rounded",
    to: "rounded",
  },
  {
    name: "Density",
    to: "density",
  },
  {
    name: "Nav",
    to: "nav",
  },
  {
    name: "Action and item group",
    to: "action-and-item-group",
  },
  {
    name: "Sub Group",
    to: "sub-group",
  },
  {
    name: "Two lines and subheader",
    to: "two-lines-and-subheader",
  },
  {
    name: "Three Line",
    to: "three-line",
  },
  {
    name: "User List",
    to: "user-list",
  },
  {
    name: "Progress List",
    to: "progress-list",
  },
  {
    name: "Shaped",
    to: "shaped",
  },
];

useSeoMeta({
  title: "List",
  ogTitle: "List",
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
            title="List"
            subtitle="The v-list component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images."
          />
          <Basic />
          <Rounded />
          <Density />
          <Nav />
          <ActionAndItemGroup />
          <SubGroup />
          <TwoLinesAndSubheader />
          <ThreeLine />
          <UserList />
          <ProgressList />
          <Shaped />
        </div>
      </v-col>
      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
