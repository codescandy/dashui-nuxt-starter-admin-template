<script setup>
import Basic from "@/components/ui-components/snack-bar/Basic.vue";
import WithAction from "@/components/ui-components/snack-bar/WithAction.vue";
import MultiLine from "@/components/ui-components/snack-bar/MultiLine.vue";
import Timeout from "@/components/ui-components/snack-bar/Timeout.vue";
import Vertical from "@/components/ui-components/snack-bar/Vertical.vue";
import Position from "@/components/ui-components/snack-bar/Position.vue";
import Variants from "@/components/ui-components/snack-bar/Variants.vue";
import TransitionSnackBar from "@/components/ui-components/snack-bar/Transition.vue";

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
    name: "With Action",
    to: "with-action",
  },
  {
    name: "Multi Line",
    to: "multi-line",
  },
  {
    name: "Timeout",
    to: "timeout",
  },
  {
    name: "Vertical",
    to: "vertical",
  },
  {
    name: "Position",
    to: "position",
  },
  {
    name: "Variants",
    to: "variants",
  },
  {
    name: "Transition",
    to: "transition",
  },
];

useSeoMeta({
  title: "Snack bar",
  ogTitle: "Snack bar",
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
            title="Snack bar"
            subtitle="The v-snackbar component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks."
          />
        </div>
        <Basic />
        <WithAction />
        <MultiLine />
        <Timeout />
        <Vertical />
        <Position />
        <Variants />
        <TransitionSnackBar />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
