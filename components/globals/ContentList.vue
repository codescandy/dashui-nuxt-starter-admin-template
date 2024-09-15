<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  if (!route.hash) {
    fetchHash(props.list[0].to);
  }
});

const fetchHash = (hash) => {
  router.replace({ path: route.path, hash: `#${hash}` });
};

const updateHash = (hash) => {
  if (route.hash !== `#${hash}`) {
    fetchHash(hash);
  }
};
</script>

<template>
  <div class="content-wrapper">
    <h6 class="px-4 mb-2 text-h6">CONTENTS</h6>
    <ul class="content-list">
      <li v-for="(item, idx) in list" :key="idx" class="py-1">
        <p
          class="content-item-tag text-body-1 px-6 py-1"
          :class="{ active: route.hash === `#${item.to}` }"
          @click="updateHash(item.to)"
        >
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.content-wrapper {
  height: calc(100vh - 10rem);
  overflow-y: auto;
  position: sticky;
  top: 8rem;
}
.content-list {
  list-style: none;
}

.content-item-tag {
  border-left: 2px solid transparent;
  text-decoration: none;
  cursor: pointer;
  color: rgb(var(--v-theme-grey-600));
  font-size: 0.8125rem !important;

  &.active {
    background: transparent;
    border-color: rgb(var(--v-theme-primary));
    font-weight: bold;
    color: rgb(var(--v-theme-primary));
  }

  &:hover {
    font-weight: bold;
    color: rgb(var(--v-theme-primary));
  }
}
</style>
