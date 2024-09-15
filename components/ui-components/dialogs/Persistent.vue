<script setup>
import { Persistent } from "./__code";

const persistentDialogs = ref(false);
</script>

<template>
  <div id="persistent">
    <GlobalsIntro title="Persistent">
      Use <code>persistent</code> prop to create persistent dialog.
    </GlobalsIntro>
    <GlobalsCodePre :code="Persistent">
      <v-dialog v-model="persistentDialogs" persistent class="v-dialog-sm" width="600">
        <!-- Activator -->
        <template #activator="{ props }">
          <v-btn v-bind="props"> Open Dialog </v-btn>
        </template>

        <!-- Dialog Content -->
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Use Google's location service?
            <icon-btn @click="persistentDialogs = !persistentDialogs">
              <v-icon icon="tabler-x" />
            </icon-btn>
          </v-card-title>
          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </v-card-text>

          <v-card-text class="d-flex justify-end gap-3 flex-wrap">
            <v-btn
              color="secondary"
              variant="tonal"
              class="ma-1"
              @click="persistentDialogs = false"
            >
              Disagree
            </v-btn>
            <v-btn class="ma-1" @click="persistentDialogs = false"> Agree </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
