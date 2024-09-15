<script setup>
import { Prominent } from "./__code";
</script>
<template>
  <div id="prominent">
    <GlobalsIntro title="Prominent">
      The <code>prominent</code> prop provides a more pronounced alert by increasing the size of the
      icon.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Prominent">
      <v-alert icon="tabler-garden-cart" prominent color="primary">
        I'm an alert with prominent prop
      </v-alert>
      <v-alert icon="tabler-garden-cart" type="warning">
        I'm an alert with without prominent prop
      </v-alert>
    </GlobalsCodePre>
  </div>
</template>
