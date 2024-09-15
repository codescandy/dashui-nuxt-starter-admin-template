<script setup>
import { Router } from "./__code";
</script>

<template>
  <div id="router">
    <GlobalsIntro title="Router">
      Use <code>to</code> prop to create button with router support.
    </GlobalsIntro>
    <GlobalsCodePre :code="Router">
      <v-alert class="mb-2">
        Note: On click of the link button, You will get redirected to another page.
      </v-alert>

      <v-btn to="/"> String Literal </v-btn>

      <v-btn color="warning" :to="{ path: '/' }"> Object Path </v-btn>

      <v-btn
        color="secondary"
        :to="{
          path: '/',
          query: { plan: 'private' },
        }"
      >
        With Query
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
