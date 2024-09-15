<script setup>
import { Size } from "./__code";
</script>

<template>
  <div id="size">
    <GlobalsIntro title="Size">
      The <code>v-chip </code>component can have various sizes from <code>x-small</code> to
      <code>x-large</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Size">
      <v-chip size="x-small"> x-small chip </v-chip>
      <v-chip size="small"> small chip </v-chip>
      <v-chip> Default </v-chip>
      <v-chip size="large"> large chip </v-chip>
      <v-chip size="x-large"> x-large chip </v-chip>
    </GlobalsCodePre>
  </div>
</template>
