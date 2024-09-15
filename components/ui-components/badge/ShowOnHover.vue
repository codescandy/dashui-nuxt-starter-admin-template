<script setup>
import { ShowOnHover } from "./__code";

const badgeHover = ref();
const showBadgeOnHover = useElementHover(badgeHover);
</script>

<template>
  <div id="show-on-hover">
    <GlobalsIntro title="Show on hover">
      You can do many things with v-isibility control, for example, show badge on hover.
    </GlobalsIntro>
    <GlobalsCodePre :code="ShowOnHover" margin-l flex>
      <v-badge content="5" transition="scale-transition" :model-value="showBadgeOnHover">
        <v-icon ref="badgeHover" size="25" icon="tabler-brand-vue" />
      </v-badge>
    </GlobalsCodePre>
  </div>
</template>
