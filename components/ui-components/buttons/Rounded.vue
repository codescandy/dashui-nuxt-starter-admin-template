<script setup>
import { Rounded } from "./__code";
</script>

<template>
  <div id="rounded">
    <GlobalsIntro title="Rounded">
      Use the <code>rounded</code> prop to control the border radius of buttons.
    </GlobalsIntro>
    <GlobalsCodePre :code="Rounded">
      <v-btn color="primary" variant="elevated"> Normal Button </v-btn>
      <v-btn color="secondary" rounded="lg"> Rounded Button </v-btn>
      <v-btn color="success" rounded="0"> Tile Button </v-btn>
      <v-btn color="error" rounded="pill"> Pill Button </v-btn>
    </GlobalsCodePre>
  </div>
</template>
