<script setup>
import { ProgressList } from "./__code";

const languageProgress = [
  {
    avatar: "tabler-brand-react",
    title: "React is a JavaScript library for building user interfaces",
    language: "react",
    amount: 90,
  },
  {
    avatar: "tabler-brand-bootstrap",
    title: "Bootstrap is an open source toolkit",
    language: "bootstrap",
    amount: 80,
  },
  {
    avatar: "tabler-brand-vue",
    title: "Vue.js is the Progressive JavaScript Framework",
    language: "vue",
    amount: 65,
  },
  {
    avatar: "tabler-brand-angular",
    title: "Angular implements Functional Programming concepts",
    language: "angular",
    amount: 75,
  },
  {
    avatar: "tabler-brand-javascript",
    title: "JavaScript is the programming language of the Web",
    language: "javascript",
    amount: 70,
  },
];

const resolveStatusColor = {
  react: "info",
  bootstrap: "primary",
  vue: "success",
  angular: "error",
  javascript: "warning",
};
</script>
<template>
  <div id="progress-list">
    <GlobalsIntro title="Progress List" />
    <GlobalsCodePre :code="ProgressList" background>
      <v-card class="mx-auto" max-width="374">
        <v-list lines="two" border>
          <template v-for="(progress, index) of languageProgress" :key="progress.language">
            <v-list-item>
              <template #prepend>
                <VAvatar
                  size="36"
                  rounded
                  variant="tonal"
                  :icon="progress.avatar"
                  :color="resolveStatusColor[progress.language]"
                />
              </template>

              <v-list-item-title>
                {{ progress.title }}
              </v-list-item-title>

              <v-list-item-subtitle class="mt-2">
                <v-progress-linear
                  height="6"
                  rounded
                  :model-value="progress.amount"
                  bg-color="secondary"
                  :color="resolveStatusColor[progress.language]"
                />
              </v-list-item-subtitle>
            </v-list-item>

            <v-divider v-if="index !== languageProgress.length - 1" />
          </template>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
