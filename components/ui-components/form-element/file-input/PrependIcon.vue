<script setup>
import { PrependIcon } from "./__code";
</script>

<template>
  <div id="prepend-icon">
    <GlobalsIntro title="Prepend icon">
      The <code>v-file-input</code> has a default <code>prepend-icon</code> that can be set on the
      component or adjusted globally.
    </GlobalsIntro>

    <GlobalsCodePre :code="PrependIcon">
      <v-file-input label="File input" prepend-icon="tabler-camera" />
    </GlobalsCodePre>
  </div>
</template>
