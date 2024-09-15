<script setup>
import { MaximumValue } from "./__code";
import avatar2 from "/images/avatar/avatar-2.jpg";
</script>

<template>
  <div id="maximum-value">
    <GlobalsIntro title="Maximum Value">
      Use <code>max</code> prop to cap the value of the badge content
    </GlobalsIntro>
    <GlobalsCodePre :code="MaximumValue" margin-l flex>
      <v-badge content="99" max="99" offset-x="5" offset-y="-1">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge content="100" max="99" offset-x="5" offset-y="-1">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
      <v-badge content="1000" max="999" offset-x="5" offset-y="-1">
        <v-avatar size="48">
          <v-img :src="avatar2" />
        </v-avatar>
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
