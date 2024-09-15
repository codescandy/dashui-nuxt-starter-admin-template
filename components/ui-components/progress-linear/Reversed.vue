<script setup>
import { Reversed } from "./__code";
</script>

<template>
  <div id="reversed">
    <GlobalsIntro title="Reversed">
      Use prop <code>reverse</code> to animate continuously in reverse direction. The component also
      has RTL support.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Reversed">
      <v-progress-linear color="primary" indeterminate reverse />
    </GlobalsCodePre>
  </div>
</template>
