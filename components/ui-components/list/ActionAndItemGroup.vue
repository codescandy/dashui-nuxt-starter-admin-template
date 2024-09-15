<script setup>
import { ActionAndItemGroup } from "./__code";
</script>
<template>
  <div id="action-and-item-group">
    <GlobalsIntro title="Action and item group">
      A <code>three-line </code>list with actions. Utilizing <code>v-list-group,</code> easily
      connect actions to your tiles.
    </GlobalsIntro>
    <GlobalsCodePre :code="ActionAndItemGroup" background>
      <v-card class="mx-auto" max-width="374">
        <v-list
          lines="three"
          density="compact"
          select-strategy="classic"
          class="action-item-group-list"
        >
          <v-list-subheader>General</v-list-subheader>

          <v-list-item value="notifications">
            <template #prepend="{ isActive }">
              <v-list-item-action start>
                <VCheckbox :model-value="isActive" color="primary" class="mt-2" />
              </v-list-item-action>
            </template>

            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle
              >Notify me about updates to apps or games that I downloaded</v-list-item-subtitle
            >
          </v-list-item>

          <v-list-item value="sound">
            <template #prepend="{ isActive }">
              <v-list-item-action start>
                <VCheckbox :model-value="isActive" color="primary" class="mt-2" />
              </v-list-item-action>
            </template>

            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle
              >Auto-update apps at any time. Data charges may apply</v-list-item-subtitle
            >
          </v-list-item>

          <v-list-item value="widgets">
            <template #prepend="{ isActive }">
              <v-list-item-action start>
                <VCheckbox :model-value="isActive" color="primary" class="mt-2" />
              </v-list-item-action>
            </template>

            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle
              >Automatically add home screen widgets when downloads complete</v-list-item-subtitle
            >
          </v-list-item>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
