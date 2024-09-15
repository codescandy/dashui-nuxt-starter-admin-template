<script setup>
import { Icon } from "./__code";
</script>

<template>
  <div id="with-icon">
    <GlobalsIntro title="With Icon">
      Chips can use text or any icon available in the Material Icons font library.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icon">
      <v-chip>
        <v-icon start size="16" icon="tabler-user" />
        Account
      </v-chip>

      <v-chip color="primary">
        <v-icon start size="16" icon="tabler-arrow-left" />
        Left
      </v-chip>

      <v-chip color="secondary">
        <v-icon start size="16" icon="tabler-clock" />
        1 Hour
      </v-chip>

      <v-chip color="success">
        <v-icon start size="16" icon="tabler-bell" />
        Notification
      </v-chip>

      <v-chip color="info">
        <v-icon start size="16" icon="tabler-message" />
        Message
      </v-chip>

      <v-chip color="warning">
        <v-icon start size="16" icon="tabler-alert-triangle" />
        Warning
      </v-chip>

      <v-chip color="error">
        <v-icon start size="16" icon="tabler-face-id-error" />
        Check
      </v-chip>
    </GlobalsCodePre>
  </div>
</template>
