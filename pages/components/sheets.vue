<script setup>
import Basic from "@/components/ui-components/sheets/Basic.vue";
import Elevation from "@/components/ui-components/sheets/Elevation.vue";
import Rounded from "@/components/ui-components/sheets/Rounded.vue";
import Congratulations from "@/components/ui-components/sheets/Congratulations.vue";
import ReconcileNotification from "@/components/ui-components/sheets/ReconcileNotification.vue";
import PrivacyPolicy from "@/components/ui-components/sheets/PrivacyPolicy.vue";
import ReferralProgram from "@/components/ui-components/sheets/ReferralProgram.vue";

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
    name: "Elevation",
    to: "elevation",
  },
  {
    name: "Rounded",
    to: "rounded",
  },
  {
    name: "Congratulations",
    to: "congratulations",
  },
  {
    name: "Reconcile Notification",
    to: "reconcile-notification",
  },
  {
    name: "Privacy Policy",
    to: "privacy-policy",
  },
  {
    name: "Referral Program",
    to: "referral-program",
  },
];

useSeoMeta({
  title: "Sheets",
  ogTitle: "Sheets",
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
            title="Sheets"
            subtitle="The v-sheet component is a transformable piece of paper that provides a basic foundation for Vuetify features."
          />
        </div>
        <Basic />
        <Elevation />
        <Rounded />
        <Congratulations />
        <ReconcileNotification />
        <PrivacyPolicy />
        <ReferralProgram />
      </v-col>

      <v-col lg="3" class="d-none d-lg-block">
        <GlobalsContentList :list="contantList" />
      </v-col>
    </v-row>
  </v-container>
</template>
