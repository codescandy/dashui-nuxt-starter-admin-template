<script setup>
import { Border } from "./__code";
</script>

<template>
  <div id="border">
    <GlobalsIntro title="Border">
      Use <code>border</code> prop to applies border styles to the footer.
    </GlobalsIntro>
    <GlobalsCodePre :code="Border">
      <v-footer border>
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
          </v-col>
        </v-row>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
