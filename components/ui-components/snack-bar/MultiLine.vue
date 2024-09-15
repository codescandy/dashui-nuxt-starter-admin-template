<script setup>
import { MultiLine } from "./__code";
const isSnackbarVisible = ref(false);
</script>

<template>
  <div id="multi-line">
    <GlobalsIntro title="Multi Line">
      The <code>multi-line</code> property extends the height of the <code>v-snackbar</code> to give
      you a little more room for content.
    </GlobalsIntro>
    <GlobalsCodePre :code="MultiLine">
      <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

      <!-- Snackbar -->
      <v-snackbar v-model="isSnackbarVisible" multi-line>
        I am a multi-line snackbar. I can have more than one line. This is another line that is
        quite long.

        <template #actions>
          <v-btn color="error" @click="isSnackbarVisible = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </GlobalsCodePre>
  </div>
</template>
