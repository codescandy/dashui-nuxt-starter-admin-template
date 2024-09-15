<script setup>
import { AvatarStatus } from "./__code";
import avatar2 from "/images/avatar/avatar-2.jpg";
</script>

<template>
  <div id="avatar-status">
    <GlobalsIntro title="Avatar Status"> You can use badge with avatar as status. </GlobalsIntro>
    <GlobalsCodePre :code="AvatarStatus" margin-l flex>
      <v-badge dot bordered color="success" location="bottom end" :offset-x="5" :offset-y="1">
        <v-avatar size="small">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge dot bordered color="error" location="bottom end" :offset-x="5" :offset-y="1">
        <v-avatar>
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge dot bordered color="primary" location="bottom end" :offset-x="5" :offset-y="1">
        <v-avatar size="large">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
