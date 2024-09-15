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
  {
    name: "Default Dark Theme",
    to: "default-dark-theme",
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
                <span class="text-grey-400"> src/plugins/vuetify/theme.js. </span>
              </p>

              <p class="intro-font my-3">
                To update primary colors to something else navigate to above mentioned vuetify
                plugin theme file and update primary to desired colors in themes you like.
              </p>

              <p class="intro-font">
                File: <span class="text-grey-400"> /src/plugins/vuetify/theme.js</span>
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

            <v-divider class="my-4" />

            <div id="default-dark-theme" class="py-6">
              <h2 class="text-h3">Set as default dark theme mode</h2>

              <div class="py-3">
                <p class="intro-font my-3">
                  Vuetify comes with two themes pre-installed, <code>light</code> and
                  <code>dark</code>. To set the default theme of your application, use the
                  defaultTheme option.
                </p>

                <p class="intro-font my-3">
                  Mostly you will use default light theme mode, you can set
                  <span class="text-grey-400">dark</span> or
                  <span class="text-grey-400">light</span> as for your prefrence.
                </p>

                <p class="intro-font">
                  File: <span class="text-grey-400"> /plugins/vuetify/theme.js</span>
                </p>

                <VueCodeHighlighter
                  lang="js"
                  :code="`const theme = {
  defaultTheme: 'dark'
  // other settings
}

// After change clear your local storage and reload page.`"
                  width="100%"
                  height="100%"
                  font-size="16px"
                  theme="dark"
                  class="my-4"
                />
              </div>
            </div>

            <v-alert color="error" variant="outlined" class="my-4">
              <p class="text-error">
                <b>Note</b>
                <br />
                Make sure you clear the browser's local storage in order to see the config changes
                in the template. Refer:
                <a
                  href="https://docs.devolutions.net/kb/general-knowledge-base/clear-browser-local-storage/"
                  target="_blank"
                  class="text-error"
                  >How to clear site storage?</a
                >.
              </p>
            </v-alert>
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
