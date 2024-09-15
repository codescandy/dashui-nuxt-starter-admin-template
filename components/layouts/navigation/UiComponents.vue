<script setup>
defineProps({
  menuType: {
    type: String,
    default: "vertical",
  },
});

const componentList = [
  {
    title: "Alert",
    to: "alert",
  },
  {
    title: "App Bar",
    to: "app-bar",
  },
  {
    title: "Avatar",
    to: "avatar",
  },
  {
    title: "Badge",
    to: "badge",
  },
  {
    title: "Bottom Navigation",
    to: "bottom-navigation",
  },
  {
    title: "Bottom Sheet",
    to: "bottom-sheet",
  },
  {
    title: "Breadcrumb",
    to: "breadcrumb",
  },
  {
    title: "Buttons",
    to: "buttons",
  },
  {
    title: "Card",
    to: "card",
  },
  {
    title: "Carousel",
    to: "carousel",
  },
  {
    title: "Chips",
    to: "chips",
  },
  {
    title: "Chip Group",
    to: "chip-group",
  },
  {
    title: "Data Iterator",
    to: "data-iterator",
  },
  {
    title: "Data Table",
    to: "data-table",
  },
  {
    title: "Dialogs",
    to: "dialogs",
  },
  {
    title: "Divider",
    to: "divider",
  },
  {
    title: "Expansion Panel",
    to: "expansion-panel",
  },
  // {
  //   title: 'Form Wizard',
  //   to: 'form-wizard'
  // },
  {
    title: "Footer",
    to: "footer",
  },
  {
    title: "Hover",
    to: "hover",
  },
  {
    title: "Image",
    to: "image",
  },
  {
    title: "Infinite Scroller",
    to: "infinite-scroller",
  },
  {
    title: "List",
    to: "list",
  },
  {
    title: "Menus",
    to: "menus",
  },
  {
    title: "Overlays",
    to: "overlays",
  },
  {
    title: "Parallax",
    to: "parallax",
  },
  {
    title: "Pagination",
    to: "pagination",
  },
  {
    title: "Progress Circular",
    to: "progress-circular",
  },
  {
    title: "Progress Linear",
    to: "progress-linear",
  },
  {
    title: "Sheets",
    to: "sheets",
  },
  {
    title: "Skeleton Loader",
    to: "skeleton-loader",
  },
  {
    title: "Slide Group",
    to: "slide-group",
  },
  {
    title: "Snack Bar",
    to: "snack-bar",
  },
  {
    title: "System Bar",
    to: "system-bar",
  },
  {
    title: "Tabs",
    to: "tabs",
  },
  {
    title: "Tables",
    to: "tables",
  },
  {
    title: "Timeline",
    to: "timeline",
  },
  {
    title: "Tooltips",
    to: "tooltips",
  },
  {
    title: "Virtual Scroller",
    to: "virtual-scroller",
  },
];
</script>
<template>
  <template v-if="menuType === 'vertical'">
    <div class="vertical-nav-list__label">UI Components</div>
    <!-- Components -->
    <v-list-group value="components">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Components" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-components" />
          </template>
        </v-list-item>
      </template>

      <v-list-item
        v-for="item in componentList"
        :key="item.to"
        class="vertical-nav-list__group"
        :title="item.title"
        :value="item.to"
        :to="`/components/${item.to}`"
      />
    </v-list-group>

    <!-- Menu Level -->
    <v-list-group value="menu-level">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Menu Level" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-arrow-back" />
          </template>
        </v-list-item>
      </template>

      <v-list-group value="item-1">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Two Level" class="vertical-nav-list__group" />
        </template>

        <v-list-item class="vertical-nav-list__group" title="Nav Item 1" value="nav-item-1" />

        <v-list-item class="vertical-nav-list__group" title="Nav Item 2" value="nav-item-2" />
      </v-list-group>

      <v-list-group value="item-2">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Three Level" class="vertical-nav-list__group" />
        </template>

        <v-list-group value="item-3">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Nav Item 1" class="vertical-nav-list__group" />
          </template>

          <v-list-item
            class="vertical-nav-list__group"
            title="Nav Child Item 1"
            value="nav-child-item-1"
          />
        </v-list-group>

        <v-list-item class="vertical-nav-list__group" title="Nav Item 2" value="nav-item-2" />
      </v-list-group>
    </v-list-group>
  </template>
</template>
