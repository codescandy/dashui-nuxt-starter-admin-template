<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Use <code>color</code> prop to create various background badges.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color" margin-l flex>
      <v-badge dot color="primary">
        <v-icon size="25" icon="tabler-brand-vue" />
      </v-badge>
      <v-badge dot color="success">
        <v-icon size="25" icon="tabler-brand-vue" />
      </v-badge>
      <v-badge dot color="info">
        <v-icon size="25" icon="tabler-brand-vue" />
      </v-badge>
      <v-badge dot color="warning">
        <v-icon size="25" icon="tabler-brand-vue" />
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
