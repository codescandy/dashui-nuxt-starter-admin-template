<script setup>
import { Window } from "./__code";
</script>

<template>
  <div id="window">
    <GlobalsIntro title="Window"> A window bar with window controls and status info. </GlobalsIntro>
    <GlobalsCodePre :code="Window">
      <v-layout style="height: 50px">
        <v-system-bar window>
          <v-icon icon="tabler-message" class="me-2"></v-icon>

          <span>10 unread messages</span>

          <v-spacer></v-spacer>

          <v-btn icon="tabler-minus" variant="text" size="30" />
          <v-btn icon="tabler-maximize" variant="text" size="30" />
          <v-btn icon="tabler-x" variant="text" size="30" />
        </v-system-bar>
      </v-layout>
    </GlobalsCodePre>
  </div>
</template>
