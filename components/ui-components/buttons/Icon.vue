<script setup>
import { Icon } from "./__code";
</script>

<template>
  <div id="icon">
    <GlobalsIntro title="Icon">
      Icons can be used inside of buttons to add emphasis to the action.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icon">
      <v-btn>
        Accept
        <v-icon end icon="tabler-checkbox" />
      </v-btn>

      <v-btn color="secondary"> <v-icon start icon="tabler-circle-minus" />Cancel </v-btn>

      <v-btn color="success">
        Upload
        <v-icon end icon="tabler-cloud-upload" />
      </v-btn>

      <v-btn color="info">
        <v-icon start icon="tabler-arrow-left" />
        Back
      </v-btn>

      <v-btn color="warning">
        <v-icon icon="tabler-settings" />
      </v-btn>

      <v-btn color="error">
        <v-icon icon="tabler-circle-off" />
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
