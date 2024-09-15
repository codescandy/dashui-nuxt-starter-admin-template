<script setup>
import { Link } from "./__code";
</script>

<template>
  <div id="link">
    <GlobalsIntro title="Link">
      Add the <code>link</code> prop for the same style without adding an anchor.
    </GlobalsIntro>
    <GlobalsCodePre :code="Link">
      <v-card color="primary" class="mx-auto my-8" max-width="344" link>
        <v-card-item>
          <v-card-title class="text-white"> Hover and click me </v-card-title>
          <v-card-subtitle class="text-white"> Same looks, no anchor </v-card-subtitle>
        </v-card-item>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
