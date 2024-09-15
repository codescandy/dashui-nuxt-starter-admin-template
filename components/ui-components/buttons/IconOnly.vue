<script setup>
import { IconOnly } from "./__code";
</script>

<template>
  <div id="icon-only">
    <GlobalsIntro title="Icon Only">
      Use <code>v-icon</code> component inside button to create buttons that looks like rest of the
      theme.
    </GlobalsIntro>
    <GlobalsCodePre :code="IconOnly">
      <v-btn size="38">
        <v-icon icon="tabler-briefcase" size="22" />
      </v-btn>

      <v-btn size="38" color="secondary">
        <v-icon icon="tabler-user-plus" size="22" />
      </v-btn>

      <v-btn size="38" color="success">
        <v-icon icon="tabler-search" size="22" />
      </v-btn>

      <v-btn size="38" color="info">
        <v-icon icon="tabler-thumb-up" size="22" />
      </v-btn>

      <v-btn size="38" color="warning">
        <v-icon icon="tabler-star" size="22" />
      </v-btn>

      <v-btn size="38" color="error">
        <v-icon icon="tabler-heart" size="22" />
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
