<script setup>
import { Block } from "./__code";
</script>

<template>
  <div id="button-block">
    <GlobalsIntro title="Block buttons">
      The <code>block</code> prop allows buttons to extend the full available width.
    </GlobalsIntro>
    <GlobalsCodePre :code="Block">
      <div>
        <v-btn block class="mb-4"> Block Button </v-btn>
        <v-btn rounded="0" block> Block Button </v-btn>
      </div>
    </GlobalsCodePre>
  </div>
</template>
