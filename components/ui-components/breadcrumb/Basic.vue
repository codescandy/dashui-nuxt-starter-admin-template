<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Use an ordered or unordered list with linked list items to create a minimally styled
      breadcrumb. Use our utilities to add additional styles as desired.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-breadcrumbs color="primary" :items="['Home']" />
      <v-breadcrumbs color="primary" density="compact" :items="['Home', 'Library']" />
      <v-breadcrumbs color="primary" density="compact" :items="['Home', 'Library', 'Data']" />
    </GlobalsCodePre>
  </div>
</template>
