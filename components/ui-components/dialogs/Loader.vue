<script setup>
import { Loader } from "./__code";
const loadingDialogs = ref(false);
</script>

<template>
  <div id="loader">
    <GlobalsIntro title="Loader">
      The <code>v-dialog</code> component makes it easy to create a customized loading experience
      for your application.
    </GlobalsIntro>
    <GlobalsCodePre :code="Loader">
      <v-btn :disabled="loadingDialogs" @click="loadingDialogs = true"> Start loading </v-btn>

      <v-dialog v-model="loadingDialogs" width="300">
        <v-card color="primary" width="300">
          <v-card-text class="pt-3">
            Please stand by
            <v-progress-linear indeterminate color="white" :height="8" class="mb-0 mt-4" />
          </v-card-text>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
