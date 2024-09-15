<script setup>
import { Icons } from "./__code";
</script>

<template>
  <div id="icons">
    <GlobalsIntro title="Icons">
      The <code>icon</code> prop allows you to add an icon to the beginning of the alert component.
      If a <code>type</code> is provided, this will override the default type icon. Additionally,
      setting the icon prop to false will remove the <code>icon</code> altogether.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Icons">
      <v-alert color="primary" icon="tabler-brand-vue"> I'm an alert with icon. </v-alert>
      <v-alert color="primary" variant="tonal" icon="tabler-brand-vue">
        I'm an alert with icon.
      </v-alert>
      <v-alert color="primary" variant="outlined" icon="tabler-brand-vue">
        I'm an alert with icon.
      </v-alert>
    </GlobalsCodePre>
  </div>
</template>
