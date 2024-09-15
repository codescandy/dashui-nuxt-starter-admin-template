<script setup>
import Basic from "@/components/ui-components/timeline/Basic.vue";
import Card from "@/components/ui-components/timeline/Card.vue";
import WithIcons from "@/components/ui-components/timeline/WithIcons.vue";

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
    name: "Card",
    to: "card",
  },
  {
    name: "With Icons",
    to: "with-icons",
  },
];

useSeoMeta({
  title: "Timeline",
  ogTitle: "Timeline",
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
            title="Timeline"
            subtitle="The v-timeline is useful for stylistically displaying chronological information."
          />
        </div>
        <Basic />
        <Card />
        <WithIcons />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
