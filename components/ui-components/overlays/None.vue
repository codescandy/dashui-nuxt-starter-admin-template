<script setup>
import { None } from "./__code";
</script>

<template>
  <div id="none">
    <GlobalsIntro title="None">
      <code>scroll-strategy="none"</code><br />
      No scroll strategy is used.
    </GlobalsIntro>
    <GlobalsCodePre :code="None">
      <v-btn>
        None

        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="none">
          <v-card class="pa-4"> Hello! </v-card>
        </v-overlay>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
