<script setup>
import { VueCodeHighlighter } from "vue-code-highlighter";

const contantList = [
  {
    name: "Colors & Themes",
    to: "intro",
  },
  {
    name: "Updating Colors",
    to: "updating-colors",
  },
];

useSeoMeta({
  title: "Theme Configuration",
  ogTitle: "Theme Configuration",
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
          <div class="mb-6">
            <div id="intro">
              <h1 class="text-h1">Colors & Themes</h1>
              <p class="intro-font my-3">
                Customize your application's default text colors, surfaces, and more. Easily modify
                your theme programmatically in real time. Vuetify comes with standard support for
                light and dark variants. For more detailed explnation read this
                <a
                  href="https://next.vuetifyjs.com/en/features/theme/"
                  target="_blank"
                  class="intro-font"
                  >documentation</a
                >
              </p>
            </div>

            <v-divider class="my-4" />

            <div id="updating-colors" class="py-6">
              <h2 class="text-h3">Updating colors</h2>

              <p class="intro-font my-3">
                Here, we will go over how you can customize the theme/colors in our template. <br />
                Theme's colors and modes are defined in
                <span class="text-grey-400">
                  /dashui-nuxt-starter-admin-template/plugins/vuetify/theme.js.
                </span>
              </p>

              <p class="intro-font my-3">
                To update primary colors to something else navigate to above mentioned vuetify
                plugin theme file and update primary to desired colors in themes you like.
              </p>

              <p class="intro-font">
                File:
                <span class="text-grey-400">
                  /dashui-nuxt-starter-admin-template/utils/theme.js</span
                >
              </p>

              <VueCodeHighlighter
                lang="js"
                :code="`const theme = {
  ...
  ...
  themes: {
    light: {
      colors: {
        dark: '#1e293b',
        light: '#f1f5f9',
        white: '#ffffff',
        primary: '#624bff',
        ...
        ...
      },
    },

    dark: {
      colors: {
        dark: '#f1f5f9',
        light: '#1e293b',
        white: '#ffffff',
        primary: '#624bff',
        ...
        ...
      }
    }
  }
}`"
                width="100%"
                height="100%"
                font-size="16px"
                theme="dark"
                class="my-4"
              />

              <v-alert color="success" variant="outlined" class="my-4">
                <p class="text-body-1 text-success">
                  <b>TIP</b>
                  <br />
                  If you want to override any style or want to add your custom scss code, you can
                  use _user.scss file located at below path.<br />
                  File : /src/@core/styles/_user.scss
                </p>
              </v-alert>
            </div>
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
  font-size: 16px;
  margin-bottom: 4px;
}
</style>
