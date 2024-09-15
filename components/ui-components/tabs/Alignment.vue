<script setup>
import { Alignment } from "./__code";
</script>

<template>
  <div id="alignment">
    <GlobalsIntro title="Alignment">
      Use <code>align-tabs</code> prop to change the tabs alignment.
    </GlobalsIntro>
    <GlobalsCodePre :code="Alignment" background>
      <v-card>
        <v-card-text class="d-flex flex-column gap-4">
          <!-- Default -->
          <div>
            <v-tabs>
              <v-tab>Home</v-tab>
              <v-tab>Service</v-tab>
              <v-tab>Account</v-tab>
            </v-tabs>
          </div>

          <!-- Center -->
          <div>
            <v-tabs align-tabs="center">
              <v-tab>Home</v-tab>
              <v-tab>Service</v-tab>
              <v-tab>Account</v-tab>
            </v-tabs>
          </div>

          <!-- End -->
          <div>
            <v-tabs align-tabs="end">
              <v-tab>Home</v-tab>
              <v-tab>Service</v-tab>
              <v-tab>Account</v-tab>
            </v-tabs>
          </div>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
