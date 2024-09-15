<script setup>
import { Type } from "./__code";
</script>
<template>
  <div id="type">
    <GlobalsIntro title="Type">
      The <code>type</code> prop provides 4 default v-alert styles: <code>success</code>,
      <code>info</code>, <code>warning</code>, and <code>error</code>. Each of these styles provide
      a default icon and color.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Type">
      <v-alert type="info"> I'm a alert with a <strong>type</strong> of info </v-alert>
      <v-alert type="success"> I'm a alert with a <strong>type</strong> of success </v-alert>
      <v-alert type="warning"> I'm a alert with a <strong>type</strong> of warning </v-alert>
      <v-alert type="error"> I'm a alert with a <strong>type</strong> of error </v-alert>
    </GlobalsCodePre>
  </div>
</template>
