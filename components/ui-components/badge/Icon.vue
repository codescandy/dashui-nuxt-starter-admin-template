<script setup>
import { Icon } from "./__code";
import avatar2 from "/images/avatar/avatar-2.jpg";
</script>

<template>
  <div id="icon">
    <GlobalsIntro title="Icon">
      You can use <code>icon</code> prop or use <code>slot</code> to render the icon
    </GlobalsIntro>
    <GlobalsCodePre :code="Icon" margin-l flex>
      <v-badge>
        <template #badge>
          <v-icon icon="tabler-brand-vue" />
        </template>

        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>

      <v-badge icon="tabler-brand-vue">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
