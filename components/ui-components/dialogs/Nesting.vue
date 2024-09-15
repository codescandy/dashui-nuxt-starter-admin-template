<script setup>
import { Nesting } from "./__code";

const nestingDialogs = ref(false);
const nestingDialogsChild = ref(false);
</script>

<template>
  <div id="nesting">
    <GlobalsIntro title="Nesting">
      Dialogs can be nested: you can open one dialog from another.
    </GlobalsIntro>
    <GlobalsCodePre :code="Nesting">
      <v-btn @click="nestingDialogs = true"> Open Dialog </v-btn>

      <v-dialog v-model="nestingDialogs" width="500">
        <!-- Dialog Content -->
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Dialog

            <icon-btn @click="nestingDialogs = !nestingDialogs">
              <v-icon icon="tabler-x" />
            </icon-btn>
          </v-card-title>
          <v-card-text>
            <v-btn variant="tonal" color="secondary" class="ma-1" @click="nestingDialogs = false">
              Close
            </v-btn>
            <v-btn class="ma-1" @click="nestingDialogsChild = !nestingDialogsChild">
              Open Child Dialog
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Child Dialog -->
      <v-dialog v-model="nestingDialogsChild" width="500">
        <!-- Dialog Content -->
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Child Dialog

            <icon-btn @click="nestingDialogsChild = !nestingDialogsChild">
              <v-icon icon="tabler-x" />
            </icon-btn>
          </v-card-title>
          <v-card-text> I'm a nested dialog </v-card-text>
          <v-card-text>
            <v-spacer />
            <v-btn @click="nestingDialogsChild = false"> Close </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
