<script setup>
defineProps({
  menuType: {
    type: String,
    default: "vertical",
  },
});

const Docs = [
  {
    title: "Environment Setup",
    to: "environment-setup",
    description: "Browse the all documentation",
    icon: "tabler-file-text",
  },

  {
    title: "Theme Configuration",
    to: "theme-configuration",
    description: "Browse the all Configuration",
    icon: "tabler-brush",
  },

  {
    title: `Consume API's`,
    to: "consume-api",
    description: `Browse the all Consume API's`,
    icon: "tabler-api",
  },

  {
    title: "Folder Structure",
    to: "folder-structure",
    description: `Browse the all folder structure`,
    icon: "tabler-folder",
  },

  {
    title: "Changelog",
    to: "changelog",
    description: `See what's new`,
    icon: "tabler-exchange",
  },
];
</script>
<template>
  <template v-if="menuType === 'vertical'">
    <div class="vertical-nav-list__label">Documentation</div>
    <v-list-group value="docs">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Docs" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-brand-vue" />
          </template>
        </v-list-item>
      </template>

      <v-list-item
        v-for="item in Docs"
        :key="item.to"
        class="vertical-nav-list__group"
        :title="item.title"
        :value="item.to"
        :to="`/docs/${item.to}`"
      />
    </v-list-group>
  </template>
</template>
