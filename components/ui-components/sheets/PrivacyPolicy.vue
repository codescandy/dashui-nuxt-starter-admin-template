<script setup>
import { PrivacyPolicy } from "./__code";
</script>

<template>
  <div id="privacy-policy">
    <GlobalsIntro title="Privacy Policy">
      Creating a Privacy Policy notification is a great use case for the
      <code>v-sheet</code> component.
    </GlobalsIntro>
    <GlobalsCodePre :code="PrivacyPolicy">
      <v-sheet border="md" class="pa-6 text-white mx-auto" color="#141518" max-width="400">
        <h4 class="text-h5 font-weight-bold mb-4 text-white">Your Privacy</h4>

        <p class="mb-8">
          This business determines the use of personal data collectied on our media properties and
          across the internet. We may collect data that you submit to us directly or data that we
          collect automatically including from cookies (such as device information or IP address).

          <br />
          <br />

          Please read our <a href="#" class="text-error">Privacy Policy</a> to learn about our
          privacy practices or click "Your Preferences" to exercise control over your data.
        </p>

        <v-btn block class="mb-4" color="error" size="x-large" variant="flat"> Accept </v-btn>

        <v-btn block color="error" size="x-large" variant="outlined"> Your Preferences </v-btn>
      </v-sheet>
    </GlobalsCodePre>
  </div>
</template>
