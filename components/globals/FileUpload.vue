<template>
  <ClientOnly>
    <div class="flex-grow-1" :class="$attrs.class">
      <v-label v-if="label" :for="elementId" class="mb-1 form-label" :text="label" />

      <DropZone
        v-bind="{
          ...$attrs,
          id: elementId,
        }"
      >
        <template v-slot:message>
          <v-icon icon="tabler-upload" />
          <p class="text-body-1">Drop files here to upload</p>
        </template>
      </DropZone>
    </div>
  </ClientOnly>
</template>

<script setup>
import DropZone from "dropzone-vue";

const elementId = computed(() => {
  const attrs = useAttrs();
  const _elementIdToken = attrs.id || attrs.label;

  return _elementIdToken
    ? `global-text-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}`
    : undefined;
});

const label = computed(() => useAttrs().label);
</script>

<style scoped lang="scss">
.dropzone__box {
  min-height: 150px;
  align-items: center;
  border-radius: 8px;
  border-color: rgba(var(--v-border-color), 0.3);

  &:hover {
    border-color: rgba(var(--v-border-color), 0.6);
  }
}
</style>
