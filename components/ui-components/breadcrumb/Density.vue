<script setup>
import { Density } from "./__code";
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      The <code>density</code> prop decreases the height of the breadcrumb based upon 1 of 3 levels
      of density. <code>default</code>, <code>comfortable</code>, and <code>compact</code> and the
      <code>bg-color</code> prop change the backgroud color of the breadcrumb.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Density">
      <v-breadcrumbs bg-color="primary" :items="['Home']" />
      <v-breadcrumbs bg-color="secondary" density="comfortable" :items="['Home', 'Library']" />
      <v-breadcrumbs bg-color="success" density="compact" :items="['Home', 'Library', 'Data']" />
    </GlobalsCodePre>
  </div>
</template>
