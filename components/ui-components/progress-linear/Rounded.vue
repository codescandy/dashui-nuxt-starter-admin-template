<script setup>
import { Rounded } from "./__code";
</script>

<template>
  <div id="rounded">
    <GlobalsIntro title="Rounded">
      The <code>rounded</code> prop is used to apply a border radius to the v-progress-linear
      component. By default we have set <code>rounded</code> prop true. You can disable it by using
      <code>:rounded='false'</code>.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Rounded">
      <v-progress-linear model-value="78" height="8" color="primary" :rounded="false" />
      <v-progress-linear model-value="20" color="primary" height="20" :rounded="false" />
      <v-progress-linear model-value="33" height="20" color="primary" :rounded="false" />
    </GlobalsCodePre>
  </div>
</template>
