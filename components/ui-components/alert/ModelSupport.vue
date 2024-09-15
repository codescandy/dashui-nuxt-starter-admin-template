<script setup>
import { ModalSupport } from "./__code";

const isAlertVisibleModal = ref(true);
</script>
<template>
  <div id="v-model-support">
    <GlobalsIntro title="v-model support">
      Clicking this button will set its value to <code>false</code> and effectively hide the alert.
      You can restore the alert by binding <code>v-model</code> and setting it to true.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="ModalSupport">
      <v-alert v-model="isAlertVisibleModal" color="primary" variant="tonal">
        Nice, you triggered this alert message!
      </v-alert>

      <v-btn @click="isAlertVisibleModal = !isAlertVisibleModal">
        {{ isAlertVisibleModal ? "Hide Alert" : "Show Alert" }}
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
