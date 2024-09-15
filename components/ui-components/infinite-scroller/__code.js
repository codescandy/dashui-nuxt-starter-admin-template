export const Mode = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll height="300" mode="manual" @load="load">
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </v-infinite-scroll>
</template>`;

export const Direction = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll  direction="horizontal" @load="load">
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </v-infinite-scroll>
</template>`;

export const Side = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll height="300" side="start" @load="load">
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </v-infinite-scroll>
</template>`;

export const BothSide = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll height="300" side="both" @load="load">
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </v-infinite-scroll>
</template>`;

export const Color = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll
    color="secondary"
    mode="manual"
    height="400"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </v-infinite-scroll>
</template>`;

export const Loading = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll
    height="400"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
    <template v-slot:loading> This is taking a very long time... </template>
  </v-infinite-scroll>
</template>`;

export const LoadMore = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))

      done('ok')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll
    height="400"
    mode="manual"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
    <template v-slot:load-more="{ props }">
      <v-btn icon="tabler-refresh" variant="text" size="small" v-bind="props"></v-btn>
    </template>
  </v-infinite-scroll>
</template>`;

export const Empty = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      done('empty')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll
    height="400"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>

    <template v-slot:empty>
      <v-alert type="info">No more items!</v-alert>
    </template>
  </v-infinite-scroll>
</template>`;

export const Errors = `<script setup>
  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

  const load = ({ done }) => {
    setTimeout(() => {
      done('error')
    }, 1000)
  }
</script>

<template>
  <v-infinite-scroll
    height="400"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>

    <template v-slot:error="{ props }">
      <v-alert type="error">
        <div class="d-flex justify-space-between align-center">
          Something went wrong...
          <v-btn color="white" variant="outlined" size="small" v-bind="props"> Retry </v-btn>
        </div>
      </v-alert>
    </template>
  </v-infinite-scroll>
</template>`;

export const VirtualizedInfiniteScroller = `<script setup>
  const size = ref(300)
  const virtualLength = ref(12)
  const cards = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  const createRange = (length, start) => {
    return Array.from({ length }).map((_, i) => i + start)
  }

  const load = ({ side, done }) => {
    const halfVirtualLength = virtualLength.value / 2
    if (side === 'start') {
      const arr = createRange(halfVirtualLength, cards.value[0] - halfVirtualLength)
      cards.value = [...arr, ...cards.value.slice(0, halfVirtualLength)]
    } else {
      const arr = createRange(halfVirtualLength, cards.value.at(-1) + 1)
      cards.value = [...cards.value.slice(halfVirtualLength), ...arr]
    }

    done('ok')
  }
</script>

<template>
  <v-infinite-scroll ref="infinite" height="500" side="both" @load="load">
    <div>
      <template v-for="card in cards" :key="card">
        <v-sheet
          :color="card % 2 === 0 ? 'primary' : card % 4 === 0 ? 'secondary' : 'warning'"
          :height="size"
          class="d-flex align-center justify-center"
        >
          <div>{{ card }}</div>
        </v-sheet>
      </template>
    </div>
  </v-infinite-scroll>
</template>`;
