<script setup>
import Dashboard from "./Dashboard.vue";
import LayoutAndPage from "./LayoutAndPage.vue";
import UiComponents from "./UiComponents.vue";
import Docs from "./Docs.vue";

defineProps({
  isVertical: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <v-list v-if="isVertical" class="vertical-nav-list">
    <dashboard />
    <layout-and-page />
    <ui-components />
    <docs />
  </v-list>
</template>

<style lang="scss">
@use "@configured-variables" as variable;

.vertical-nav-list {
  &__label {
    color: rgb(var(--v-theme-grey-400));
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08rem;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
  }

  &__group {
    &.v-list-item {
      padding-inline-start: calc(40px + var(--indent-padding) / 6) !important;
      padding: 0.25rem 0px;
    }
  }

  &__item {
    &.v-list-item {
      .v-list-item-title {
        margin-left: variable.$spacer * 2;
      }
    }
  }
}
</style>
