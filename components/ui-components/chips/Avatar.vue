<script setup>
import { Avatar } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
</script>
<template>
  <div id="with-avatar">
    <GlobalsIntro title="With Icon">
      Use <code>pill</code> prop to remove the <code>v-avatar </code> padding.
    </GlobalsIntro>
    <GlobalsCodePre :code="Avatar">
      <v-chip pill>
        <v-avatar start :image="avatar1" />
        John Doe
      </v-chip>

      <v-chip pill>
        <v-avatar start :image="avatar2" />
        <span>Darcy Nooser</span>
      </v-chip>
      <v-chip pill>
        <v-avatar start :image="avatar3" />
        <span>Felicia Risker</span>
      </v-chip>
      <v-chip pill>
        <v-avatar start :image="avatar4" />
        <span>Minnie Mostly</span>
      </v-chip>
    </GlobalsCodePre>
  </div>
</template>
