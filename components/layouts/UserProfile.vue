<script setup>
import avatar1 from "/images/avatar/avatar-1.jpg";

const itemList = [
  {
    name: "Edit Profile",
    icon: "tabler-user",
    value: "edit-profile",
  },
  {
    name: "Activity Log",
    icon: "tabler-activity",
    value: "activity-log",
  },
  {
    name: "Settings",
    icon: "tabler-settings",
    value: "settings",
  },
  {
    name: "Sign Out",
    icon: "tabler-power",
    value: "sign-out",
  },
];
</script>

<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-badge
        dot
        location="bottom right"
        offset-x="3"
        offset-y="3"
        color="success"
        bordered
        v-bind="props"
      >
        <v-avatar class="cursor-pointer">
          <VImg :src="avatar1" />
        </v-avatar>
      </v-badge>
    </template>
    <v-list>
      <div class="px-4 pt-2">
        <h5 class="text-h5">John E. Grainger</h5>
        <NuxtLink class="text-body-2" to="/">View my profile</NuxtLink>
        <v-divider class="my-2" />
      </div>
      <v-list-item v-for="item in itemList" :key="item.value" :value="item.value">
        <template #prepend>
          <v-icon :icon="item.icon" size="small" />
        </template>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
