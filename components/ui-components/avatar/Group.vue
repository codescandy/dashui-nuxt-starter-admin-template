<script setup>
import { Group } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
import avatar5 from "/images/avatar/avatar-5.jpg";
import avatar6 from "/images/avatar/avatar-6.jpg";
</script>

<template>
  <div id="group">
    <GlobalsIntro title="Group">
      Use <code>v-avatar-group</code> class as a wrapper of avatars.
    </GlobalsIntro>
    <GlobalsCodePre :code="Group">
      <div class="v-avatar-group">
        <v-avatar :size="42">
          <v-img :src="avatar1" />
          <v-tooltip activator="parent" location="top"> John Doe 1 </v-tooltip>
        </v-avatar>
        <v-avatar :size="42">
          <v-img :src="avatar2" />
          <v-tooltip activator="parent" location="top"> John Doe 2 </v-tooltip>
        </v-avatar>
        <v-avatar :size="42">
          <v-img :src="avatar3" />
          <v-tooltip activator="parent" location="top"> John Doe 3 </v-tooltip>
        </v-avatar>
        <v-avatar :size="42">
          <v-img :src="avatar4" />
          <v-tooltip activator="parent" location="top"> John Doe 4 </v-tooltip>
        </v-avatar>
        <v-avatar :size="42">
          <v-img :src="avatar5" />
          <v-tooltip activator="parent" location="top"> John Doe 5 </v-tooltip>
        </v-avatar>
        <v-avatar :size="42">
          <v-img :src="avatar6" />
          <v-tooltip activator="parent" location="top"> John Doe 6 </v-tooltip>
        </v-avatar>
      </div>
    </GlobalsCodePre>
  </div>
</template>
