<script setup>
import { Height } from "./__code";
</script>

<template>
  <div id="height">
    <GlobalsIntro title="Height">
      Use <code>height</code> prop sets the height for the footer.
    </GlobalsIntro>
    <GlobalsCodePre :code="Height">
      <v-footer height="100" color="error">
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
          </v-col>
        </v-row>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
