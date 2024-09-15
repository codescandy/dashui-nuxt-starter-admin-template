<script setup>
import { Loading } from "./__code";
const loading = ref(true);
</script>

<template>
  <div id="loading">
    <GlobalsIntro title="Loading">
      A skeleton loader is considered to be in a loading state if one of the following conditions
      are met:
      <br />
      <br />
      <ul>
        <li>The default slot is not used</li>
        <li>The <code>loading</code> property is set to <code>true</code></li>
      </ul>
      <br />
      <br />
      If either condition is met, the skeleton loader returns the type structure in place of the
      default slot and applies dimensions values; e.g. <code>height</code>, <code>width</code>,
      <code>min-height</code>, etc. If the condition is not met, the default slot is returned.
    </GlobalsIntro>
    <GlobalsCodePre :code="Loading" background>
      <div class="text-center mb-5">
        <v-btn @click="loading = !loading"> Toggle Loading </v-btn>
      </div>
      <v-row justify="center">
        <v-col class="mb-12" cols="12" md="6">
          <div class="text-body text-center mb-2">Using slot</div>

          <v-skeleton-loader :loading="loading" type="list-item-two-line">
            <v-list-item title="Title" subtitle="Subtitle" lines="two" rounded></v-list-item>
          </v-skeleton-loader>
        </v-col>

        <v-col cols="12" md="6">
          <div class="text-body text-center mb-2">Using if</div>

          <v-skeleton-loader v-if="loading" type="list-item-two-line" />

          <v-list-item v-else title="Title" subtitle="Subtitle" lines="two" rounded></v-list-item>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
