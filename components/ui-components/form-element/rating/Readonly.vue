<script setup>
import { Readonly } from "./__code";
</script>

<template>
  <div id="readonly">
    <GlobalsIntro title="Readonly">
      For ratings that are not meant to be changed you can use <code>readonly</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Readonly">
      <v-rating readonly :model-value="4" />
    </GlobalsCodePre>
  </div>
</template>
