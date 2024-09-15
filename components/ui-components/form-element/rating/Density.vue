.
<script setup>
import { Density } from "./__code";
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      Control the space occupied by <code>v-rating</code> items using the <code>density</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <v-rating density="compact" />
    </GlobalsCodePre>
  </div>
</template>
