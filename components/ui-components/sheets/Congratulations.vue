<script setup>
import { Congratulations } from "./__code";
</script>

<template>
  <div id="congratulations">
    <GlobalsIntro title="Congratulations">
      This example uses a sheet component to create a banner congratulating users for signing up for
      the DashUi community.
    </GlobalsIntro>
    <GlobalsCodePre :code="Congratulations" background>
      <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        elevation="4"
        height="250"
        rounded
        max-width="800"
        width="100%"
      >
        <div>
          <h2 class="text-h4 font-weight-black text-primary">Congratulations!</h2>

          <div class="text-h5 font-weight-medium mb-2">
            You are officially a part of the DashUi Community!
          </div>

          <p class="text-body-1 mb-4">
            Please head over to your inbox/spam or others folder to find our verificaiton email.
          </p>

          <v-btn>Go to Login</v-btn>
        </div>
      </v-sheet>
    </GlobalsCodePre>
  </div>
</template>
