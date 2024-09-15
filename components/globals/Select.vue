<script setup>
defineOptions({
  inheritAttrs: false,
});

const elementId = computed(() => {
  const attrs = useAttrs();
  const _elementIdToken = attrs.id || attrs.label;

  return _elementIdToken
    ? `global-select-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}`
    : undefined;
});

const label = computed(() => useAttrs().label);
</script>

<template>
  <div :class="$attrs.class">
    <v-label v-if="label" :for="elementId" class="mb-1 form-label" :text="label" />
    <VSelect
      v-bind="{
        ...$attrs,
        class: null,
        label: undefined,

        id: elementId,
        menuProps: {
          contentClass: [
            'v-select__content',
            $attrs.multiple !== undefined ? 'v-list-select-multiple' : '',
          ],
        },
      }"
    >
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps || {}" />
      </template>
    </VSelect>
  </div>
</template>
