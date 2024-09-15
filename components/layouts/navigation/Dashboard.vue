<script setup>
defineProps({
  menuType: {
    type: String,
    default: "vertical",
  },
});

const Dashboard = [
  {
    title: "Project",
    to: "",
  },
];
</script>
<template>
  <template v-if="menuType === 'vertical'">
    <v-list-group value="dashboard" color="primary">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Dashboard" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-home" />
          </template>
        </v-list-item>
      </template>

      <v-list-item
        v-for="item in Dashboard"
        :key="item.to"
        class="vertical-nav-list__group"
        :title="item.title"
        :to="`/${item.to}`"
      />
    </v-list-group>
  </template>
</template>
