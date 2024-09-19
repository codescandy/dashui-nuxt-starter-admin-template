<script setup>
import { VueCodeHighlighter } from "vue-code-highlighter";

const contantList = [
  {
    name: "Installation",
    to: "intro",
  },
  {
    name: "Getting Started",
    to: "getting-started",
  },
  {
    name: "Running in Local environment",
    to: "running-in-local-environment",
  },
  {
    name: "Generating a Production Build",
    to: "getting-build",
  },
];

useSeoMeta({
  title: "Environment Setup",
  ogTitle: "Environment Setup",
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
              <h1 class="text-h1">Installation</h1>
              <p>Welcome to the Dash UI Nuxt free version of the original DashUI HTML theme.</p>
              <v-divider class="my-4" />
            </div>

            <div id="getting-started" class="py-6">
              <h2 class="text-h3">Getting Started</h2>
              <p class="intro-font my-3">
                A professional Dash UI Nuxt Dashboard that comes with plenty of ready-to-use
                components that will help you to build more beautiful application.
              </p>
              <p class="intro-font my-3">
                Dash UI is built with the most popular The Progressive JavaScript Framework
                <a href="https://nuxt.com/" target="_blank" class="intro-font">Nuxt Js</a> and Vue
                Component Framework
                <a href="https://vuetifyjs.com/" target="_blank" class="intro-font">Vuetify</a>.
              </p>
              <p>
                This doc will guide you to understand how DashUI-Nuxt Js theme is organized, basics
                of how to customize, and how to run and build free version from the source code.
              </p>
            </div>

            <v-divider class="my-4" />

            <div id="running-in-local-environment" class="py-6">
              <h2 class="text-h3">Running in Local environment</h2>
              <p class="text-body-1">
                This project is scaffolded using <code>create nuxt@latest</code> with Vue Router for
                Single Page Application development, Pinia for state management, Vitest for Unit
                testing, ESLint for code quality and Prettier for code formatting settings to Yes
              </p>
              <div class="py-3">
                <ol>
                  <li>
                    <h3>Prerequisite</h3>
                    <p class="intro-font my-3">
                      Before proceeding you'll need to have the latest and stable nodejs
                      <b>(>=18.18.0)</b> version, if it's already installed on your machine, you can
                      move to next step.
                    </p>
                    <div class="bg-grey-200 border-1 rounded-sm pa-3 my-3">
                      <p class="text-body-1 font-weight-bold">How do I check my node version?</p>
                      <VueCodeHighlighter lang="js" :code="`node -v`" class="my-4" />
                    </div>
                  </li>

                  <li>
                    <h3>Install Dash UI Nuxt Free Version</h3>
                    <p class="intro-font my-3">
                      Open the <code>dashui-nuxt-starter-admin-template</code> directory with your
                      cmd or terminal. Open the project folder and install its dependencies.
                    </p>
                    <div class="bg-grey-200 border-1 rounded-sm pa-3 my-3">
                      <p class="text-body-1 font-weight-bold">Navigate to your project folder</p>
                      <VueCodeHighlighter
                        lang="js"
                        :code="`cd dashui-nuxt-starter-admin-template`"
                        class="my-4"
                      />
                    </div>

                    <div class="bg-grey-200 border-1 rounded-sm pa-3 my-3">
                      <p class="text-body-1 font-weight-bold">
                        Installing all required dependencies
                      </p>
                      <VueCodeHighlighter lang="js" :code="`npm install`" class="my-4" />
                    </div>
                  </li>

                  <li>
                    <h3>Starting Dash UI Nuxt Free Version</h3>
                    <p class="intro-font my-3">
                      After installing all required dependencies, you can start your project at the
                      development server on http://localhost:3000 with below npm command.
                    </p>
                    <div class="bg-grey-200 border-1 rounded-sm pa-3 my-3">
                      <p class="text-body-1 font-weight-bold">
                        Start project at local development server
                      </p>
                      <VueCodeHighlighter lang="js" :code="`npm run dev`" class="my-4" />
                    </div>

                    <p class="intro-font my-3">
                      Visit
                      <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
                      to view your application
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <v-divider class="my-4" />

            <div id="getting-build" class="py-6">
              <h2 class="text-h3">Generating a Production Build.</h2>

              <div class="py-3">
                <p class="intro-font">
                  1. To generate a production build, use the following commands:
                </p>

                <VueCodeHighlighter lang="js" :code="`npm run build`" class="my-4" />

                <p class="intro-font">
                  2. Once the build is generated, you can preview it on your local system using the
                  following commands:
                </p>

                <VueCodeHighlighter lang="js" :code="`npm run preview`" class="my-4" />

                <p>
                  Once you execute above command, the production build run locally at
                  <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.
                </p>
                <v-alert color="success" variant="outlined" class="my-4">
                  <p class="text-body-1 text-success">
                    <b>TIP</b>
                    <br />
                    Refer to
                    <a
                      href="https://vitejs.dev/guide/static-deploy.html"
                      target="_blank"
                      class="text-success"
                      >this</a
                    >
                    documentation for detailed deployment guide.
                  </p>
                </v-alert>

                <v-alert color="warning" variant="outlined" class="my-4">
                  <p class="text-body-1">
                    <b>Note</b>
                    <br />
                    Make sure you are in the project directory before running above commands and
                    also that you have npm installed on your machine. (You can use npm, yarn or pnpm
                    any of the package manager to manage required packages.)
                  </p>
                </v-alert>
              </div>
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
