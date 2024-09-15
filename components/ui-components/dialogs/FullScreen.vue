<script setup>
import { FullScreen } from "./__code";

const fullscreenDialogs = ref(false);
</script>

<template>
  <div id="fullscreen">
    <GlobalsIntro title="Fullscreen">
      Due to limited space, full-screen dialogs may be more appropriate for mobile devices than
      dialogs used on devices with larger screens.
    </GlobalsIntro>
    <GlobalsCodePre :code="FullScreen">
      <v-btn @click="fullscreenDialogs = true"> Open Dialog </v-btn>

      <v-dialog
        v-model="fullscreenDialogs"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <!-- Toolbar -->
          <v-toolbar color="primary">
            <icon-btn @click="fullscreenDialogs = false">
              <v-icon color="white" icon="tabler-x" />
            </icon-btn>

            <v-toolbar-title>Settings</v-toolbar-title>

            <v-spacer />

            <v-toolbar-items>
              <v-btn variant="text" @click="fullscreenDialogs = false"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-list lines="two">
            <v-list-subheader>User Controls</v-list-subheader>
            <v-list-item
              title="Content filtering"
              subtitle="Set the content filtering level to restrict apps that can be downloaded"
            />
            <v-list-item
              title="Password"
              subtitle="Require password for purchase or use password to restrict purchase"
            />
          </v-list>

          <v-divider />
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
