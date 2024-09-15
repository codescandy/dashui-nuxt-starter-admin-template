<script setup>
import { ItemHeight, DynamicHeight } from "./__code";

const items = Array.from({ length: 1000 }, (k, v) => v + 1);
</script>

<template>
  <div id="item-height">
    <div>
      <GlobalsIntro title="Item Height">
        For lists where the item height is static and uniform for all items, it’s recommended that
        you define a specific <code>item-height</code>. This value is used for
        <code>v-virtual-scroll</code>'s calculations.
      </GlobalsIntro>
      <GlobalsCodePre :code="ItemHeight">
        <v-card class="mx-auto" color="background" max-width="500">
          <v-card-title> Company Employee List </v-card-title>

          <v-divider></v-divider>

          <v-virtual-scroll :items="items" height="320" item-height="48">
            <template v-slot:default="{ item }">
              <v-list-item :title="`Employee Name`" :subtitle="`Badge #${item}`">
                <template v-slot:prepend>
                  <v-icon class="bg-primary" icon="tabler-user" />
                </template>

                <template v-slot:append>
                  <icon-btn icon="tabler-pencil" size="small" variant="tonal" />
                </template>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </GlobalsCodePre>
    </div>
    <div>
      <GlobalsIntro>
        If your items are not of a uniform size, omit the <code>item-height </code>prop to have
        <code>v-virtual-scroll</code> dynamically calculate each item.
      </GlobalsIntro>
      <GlobalsCodePre :code="DynamicHeight">
        <v-virtual-scroll :items="items" height="400">
          <template v-slot:default="{ item, index }">
            <div
              :class="[
                index % 2 === 0 ? 'py-2' : index % 5 == 0 ? 'py-8' : 'py-4',
                index % 2 === 0 ? 'bg-grey-300' : index % 5 === 0 ? 'bg-grey-600' : '',
                'px-2',
              ]"
            >
              Dynamic item {{ item }}
            </div>
          </template>
        </v-virtual-scroll>
      </GlobalsCodePre>
    </div>
  </div>
</template>
