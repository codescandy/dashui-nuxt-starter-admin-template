<script setup>
import { Secondary } from "./__code";

const icons = [
  "tabler-brand-facebook",
  "tabler-brand-twitter",
  "tabler-brand-linkedin",
  "tabler-brand-instagram",
];
</script>

<template>
  <div id="secondary-footer">
    <GlobalsIntro title="Secondary Footer">
      The <code>footer</code> component with a <code>bg-grey-400</code> color header and columns and
      rows of links.
    </GlobalsIntro>
    <GlobalsCodePre :code="Secondary">
      <v-footer class="d-flex flex-column">
        <div class="bg-grey-400 d-flex w-100 align-center pa-4">
          <strong>Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <icon-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" />
        </div>

        <div class="px-4 py-2 bg-secondary text-center w-100">
          {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
        </div>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
