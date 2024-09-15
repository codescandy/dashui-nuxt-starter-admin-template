<script setup>
import { Loader } from "./__code";

const loadings = ref([]);

const load = (i) => {
  loadings.value[i] = true;
  setTimeout(() => {
    loadings.value[i] = false;
  }, 3000);
};
</script>

<template>
  <div id="loaders">
    <GlobalsIntro title="Loaders">
      Using the <code>loading</code> prop, you can notify a user that there is processing taking
      place. The default behavior is to use a <code>v-progress-circular</code> component but this
      can be customized.
    </GlobalsIntro>
    <GlobalsCodePre :code="Loader">
      <v-btn :loading="loadings[0]" :disabled="loadings[0]" color="primary" @click="load(0)">
        Accept Terms
      </v-btn>

      <v-btn :loading="loadings[1]" :disabled="loadings[1]" color="secondary" @click="load(1)">
        Upload
        <v-icon end icon="tabler-cloud-upload" />
      </v-btn>

      <v-btn :loading="loadings[2]" :disabled="loadings[2]" color="success" @click="load(2)">
        Loader slot
        <template #loader>
          <span>Loading...</span>
        </template>
      </v-btn>

      <v-btn :loading="loadings[3]" :disabled="loadings[3]" color="info" @click="load(3)">
        Icon Loader
        <template #loader>
          <span class="custom-loader">
            <v-icon icon="tabler-refresh" />
          </span>
        </template>
      </v-btn>

      <v-btn
        :loading="loadings[4]"
        :disabled="loadings[4]"
        color="warning"
        icon="tabler-cloud-upload"
        @click="load(4)"
      />
    </GlobalsCodePre>
  </div>
</template>

<style lang="scss" scoped>
.custom-loader {
  display: flex;
  animation: loader 1s infinite;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
