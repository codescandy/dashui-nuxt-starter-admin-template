<script setup>
import { DynamicNotifications } from "./__code";

const notifications = ref();
</script>

<template>
  <div id="dynamic-notifications">
    <GlobalsIntro title="Dynamic notifications">
      You can incorporate badges with dynamic content to make things such as a notification system.
    </GlobalsIntro>
    <GlobalsCodePre :code="DynamicNotifications" margin-l flex>
      <v-badge :content="notifications" :model-value="!!notifications" color="primary" class="me-5">
        <v-icon size="40" icon="tabler-brand-vue" />
      </v-badge>

      <v-btn @click="notifications = (notifications || 0) + 1"> Send Message </v-btn>

      <v-btn color="error" @click="notifications = 0"> Clear Notifications </v-btn>
    </GlobalsCodePre>
  </div>
</template>
