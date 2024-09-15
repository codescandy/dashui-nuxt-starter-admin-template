<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-footer</code> component in its simplest form is a container.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-footer>
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
          </v-col>
        </v-row>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
