<script setup>
import { Style } from "./__code";
import avatar2 from "/images/avatar/avatar-2.jpg";
</script>

<template>
  <div id="style">
    <GlobalsIntro title="Style">
      You can use various props like <code>bordered</code>, <code>dot</code>, <code>inline</code>,
      <code>rounded</code> etc. to style the badge.
    </GlobalsIntro>
    <GlobalsCodePre :code="Style" margin-l flex>
      <!-- default -->
      <v-badge content="1">
        <v-btn variant="tonal"> Default </v-btn>
      </v-badge>

      <!-- bordered -->
      <v-badge content="5" bordered>
        <v-btn variant="tonal"> Border </v-btn>
      </v-badge>

      <!-- dot -->
      <v-badge dot location="bottom end" offset-x="3" offset-y="3">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>

      <!-- inline -->
      <v-badge inline content="5">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>

      <!-- Rounded -->
      <v-badge rounded="sm" content="5">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
