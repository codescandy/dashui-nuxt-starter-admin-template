<script setup>
import { Images } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
import avatar5 from "/images/avatar/avatar-5.jpg";
import avatar6 from "/images/avatar/avatar-6.jpg";
</script>

<template>
  <div id="images">
    <GlobalsIntro title="Images">
      You can use <code>image</code> prop of <code>v-avatar</code> component for rendering image.
    </GlobalsIntro>
    <GlobalsCodePre :code="Images">
      <v-avatar :image="avatar1" />
      <v-avatar :image="avatar2" />
      <v-avatar :image="avatar3" />
      <v-avatar :image="avatar4" />
      <v-avatar :image="avatar5" />
      <v-avatar :image="avatar6" />
    </GlobalsCodePre>
  </div>
</template>
