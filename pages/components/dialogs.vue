<script setup>
import Basic from "@/components/ui-components/dialogs/Basic.vue";
import Persistent from "@/components/ui-components/dialogs/Persistent.vue";
import Scrollable from "@/components/ui-components/dialogs/Scrollable.vue";
import Loader from "@/components/ui-components/dialogs/Loader.vue";
import Nesting from "@/components/ui-components/dialogs/Nesting.vue";
import Overflow from "@/components/ui-components/dialogs/Overflow.vue";
import FullScreen from "@/components/ui-components/dialogs/FullScreen.vue";
import Form from "@/components/ui-components/dialogs/Form.vue";

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
    name: "Persistent",
    to: "persistent",
  },
  {
    name: "Scrollable",
    to: "scrollable",
  },
  {
    name: "Loader",
    to: "loader",
  },
  {
    name: "Nesting",
    to: "nesting",
  },
  {
    name: "Overflowed",
    to: "overflowed",
  },
  {
    name: "Fullscreen",
    to: "fullscreen",
  },
  {
    name: "Form",
    to: "form",
  },
];

useSeoMeta({
  title: "Dialogs",
  ogTitle: "Dialogs",
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
            title="Dialogs"
            subtitle="The v-dialog component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive."
          />
        </div>
        <Basic />
        <Persistent />
        <Scrollable />
        <Loader />
        <Nesting />
        <Overflow />
        <FullScreen />
        <Form />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
