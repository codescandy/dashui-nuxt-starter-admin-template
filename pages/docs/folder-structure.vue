<script setup>
const contantList = [
  {
    name: "Introduction",
    to: "intro",
  },
];

useSeoMeta({
  title: "Folder Structure",
  ogTitle: "Folder Structure",
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
            <h1 class="text-h1">Folder Structure</h1>
            <p class="text-grey-500 intro-font">
              This section will show you how to keep your files organized. Our theme file structure
              that looks like this.
            </p>

            <v-divider class="my-4" />
            <h2 class="h3">Theme folder and file structure</h2>
            <p>Inside the zip-file you&apos;ll find the following directories and files.</p>
            <br />
            <pre>
dashui-nuxt-starter-admin-template
  ├── .nuxt/
  ├── .output/
  ├── app/
  ├── assets/
  ├── components/
  ├── composables/
  ├── layouts/
  ├── pages/
  ├── plugins/
  ├── public/
  ├── stores/
  ├── utils/
  ├── .gitignore
  ├── .prettierignore
  ├── .prettierrc
  ├── app.vue
  ├── error.vue
  ├── nuxt.config.js
  ├── package.json
  ├── README.md
  └── tsconfig.json
								</pre
            >
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
