<script setup>
import { Elevation } from "./__code";
</script>

<template>
  <div id="elevation">
    <GlobalsIntro title="Elevation">
      The <code>elevation</code>elevation property makes it easy to match the elevation of the
      skeleton loader to the content it is replacing.
    </GlobalsIntro>
    <GlobalsCodePre :code="Elevation" background>
      <v-skeleton-loader
        class="mx-auto"
        elevation="12"
        max-width="400"
        type="table-heading, list-item-two-line, image, table-tfoot"
      />
    </GlobalsCodePre>
  </div>
</template>
