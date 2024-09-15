<script setup>
import { ReconcileNotification } from "./__code";
</script>

<template>
  <div id="reconcile-notification">
    <GlobalsIntro title="Reconcile Notification">
      The following example uses a sheet component to create a banner that notifies users that the
      account balance has been reconciled.
    </GlobalsIntro>
    <GlobalsCodePre :code="ReconcileNotification" background>
      <v-sheet
        elevation="12"
        max-width="600"
        rounded="lg"
        width="100%"
        class="pa-4 text-center mx-auto"
      >
        <v-icon class="mb-5" color="success" icon="tabler-circle-check-filled" size="112"></v-icon>

        <h2 class="text-h5 mb-6">You reconciled this account</h2>

        <p class="mb-4 text-medium-emphasis text-body-1">
          To see a report on this reconciliation, click
          <a href="#" class="text-decoration-none text-info">View reconciliation report.</a>

          <br />

          Otherwise, you're done!
        </p>

        <v-divider class="mb-4"></v-divider>

        <div class="text-end">
          <v-btn class="text-none" color="success" rounded variant="flat" width="90"> Done </v-btn>
        </div>
      </v-sheet>
    </GlobalsCodePre>
  </div>
</template>
