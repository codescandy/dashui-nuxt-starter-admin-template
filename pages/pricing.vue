<script setup>
import PriceCard from "@/components/layouts-pages/pages/pricing/PriceCard.vue";
import FAQ from "@/components/layouts-pages/pages/pricing/FAQ.vue";
import Information from "@/components/layouts-pages/pages/pricing/Information.vue";

useSeoMeta({
  title: "Pricing",
  ogTitle: "Pricing",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-container fluid>
    <v-row offset-lg2>
      <v-col lg="10" offset-lg="1">
        <div class="my-16">
          <h1 class="text-h1">Find a plan that's right for you</h1>
          <p class="text-body-1">
            Or simply leverage the expertise of our consultation team.
            <v-btn class="ml-2" size="x-small" variant="outlined"> Talk to us </v-btn>
          </p>
        </div>

        <div class="mb-16">
          <price-card />
        </div>

        <div class="mb-16">
          <information />
        </div>

        <div class="mb-16">
          <FAQ />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
