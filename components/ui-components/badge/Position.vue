<script setup>
import { Position } from "./__code";
import avatar2 from "/images/avatar/avatar-2.jpg";
</script>

<template>
  <div id="position">
    <GlobalsIntro title="Position">
      You can use <code>location</code> prop to change the position of the badge. Possible values
      are <code>top-end</code>, <code>bottom-end</code>, <code>bottom-start</code>,
      <code>top-start</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Position" margin-l flex>
      <v-badge content="1" location="end top">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge content="1" location="bottom start">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge content="1" location="bottom end">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge content="1" location="start top">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
