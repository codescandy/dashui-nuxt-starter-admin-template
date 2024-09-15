<script setup>
import Basic from "@/components/ui-components/virtual-scroller/Basic.vue";
import Height from "@/components/ui-components/virtual-scroller/Height.vue";
import ItemHeight from "@/components/ui-components/virtual-scroller/ItemHeight.vue";
import UserDirectory from "@/components/ui-components/virtual-scroller/UserDirectory.vue";

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
    name: "Guide",
    to: "guide",
  },
  {
    name: "Height",
    to: "height",
  },
  {
    name: "Item Height",
    to: "item-height",
  },
  {
    name: "User Directory",
    to: "user-directory",
  },
];

useSeoMeta({
  title: "Virtual scroller",
  ogTitle: "Virtual scroller",
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
            title="Virtual scroller"
            subtitle="The v-virtual-scroll component displays a virtual, infinite list. It supports dynamic height and scrolling vertically and is a good alternative to pagination."
          />
        </div>

        <Basic />

        <!-- Guide -->
        <div id="guide">
          <GlobalsIntro title="Guide">
            The <code>v-virtual-scroll</code> allows you to display thousands of records on a single
            page without the performance hit of actually showing all of them at once.
            <code>v-virtual-scroll</code> is devoid of styling and pairs well with components such
            as <code>v-card</code> to provide a better visual experience.
          </GlobalsIntro>
        </div>

        <Height />
        <ItemHeight />
        <UserDirectory />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
