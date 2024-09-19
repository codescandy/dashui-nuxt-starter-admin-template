<script setup>
const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
  {
    name: "v 1.0.0",
    to: "v1",
  },
];

useSeoMeta({
  title: "Changelog",
  ogTitle: "Changelog",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <v-container>
    <div class="mt-lg-6 pt-lg-6">
      <v-row>
        <v-col offset-lg="2" lg="6" md="12">
          <div id="intro" class="mb-6">
            <h1 class="text-h1">Changelog</h1>
            <p class="text-grey-500 intro-font">
              We're constantly improving & updating Dash UI. See the latest features and
              improvements.
            </p>
          </div>

          <div id="v1" class="py-4 d-flex flex-wrap ga-8">
            <p class="text-h4 font-weight-bold">
              <span class="code text-h4 font-weight-bold"> v1.0.0 </span> - September 15, 2024
            </p>
            <p class="text-h4 font-weight-bold">Initial Relase</p>
          </div>
        </v-col>
        <v-col lg="3" class="d-none d-lg-block">
          <GlobalsContentList :list="contantList" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.intro-font {
  font-size: 1.09375rem;
}
</style>
