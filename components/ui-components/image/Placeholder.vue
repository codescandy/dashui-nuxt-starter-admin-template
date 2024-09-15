<script setup>
import { Placeholder } from "./__code";
import image1 from "/images/components/image/1.jpg";
</script>

<template>
  <div id="placeholder">
    <GlobalsIntro title="Placeholder">
      <code>v-img</code> has a special <code>placeholder</code> slot for placeholder to display
      while image’s loading. Note: the example below has bad src which won’t load for you to see
      placeholder.
    </GlobalsIntro>
    <GlobalsCodePre :code="Placeholder">
      <v-img
        class="mx-auto"
        height="300"
        :lazy-src="image1"
        max-width="500"
        src="https://bad.src/not/valid"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
    </GlobalsCodePre>
  </div>
</template>
