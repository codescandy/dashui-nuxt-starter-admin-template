<script setup>
import { Divider, DividerSlot } from "./__code";
</script>

<template>
  <div id="divider">
    <div>
      <GlobalsIntro title="Divider">
        Breadcrumbs separator can be set using divider property.
      </GlobalsIntro>
      <GlobalsCodePre :code="Divider">
        <v-breadcrumbs divider="-" density="compact" :items="['Home', 'Library', 'Data']" />
      </GlobalsCodePre>
    </div>

    <div>
      <GlobalsIntro> To customize the divider, use the divider slot. </GlobalsIntro>
      <GlobalsCodePre :code="DividerSlot">
        <v-breadcrumbs density="compact" :items="['Home', 'Library', 'Data']">
          <template #divider>
            <v-icon icon="tabler-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </GlobalsCodePre>
    </div>
  </div>
</template>
