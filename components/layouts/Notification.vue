<script setup>
const notification = [
  {
    name: "Rishi Chopra",
    message: "Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.",
    isRead: true,
  },
  {
    name: "Neha Kannned",
    message: "Proin at elit vel est condimentum elementum id in ante. Maecenas et sapien metus.",
    isRead: false,
  },
  {
    name: "Nirmala Chauhan",
    message: "Morbi maximus urna lobortis elit sollicitudin sollicitudieget elit vel pretium.",
    isRead: false,
  },
  {
    name: "Sina Ray",
    message: "Sed aliquam augue sit amet mauris volutpat hendrerit sed nunc eu diam.",
    isRead: false,
  },
];
</script>

<template>
  <v-menu :close-on-content-click="false" height="352" width="348" max-height="352" max-width="348">
    <template #activator="{ props }">
      <icon-btn class="mr-2 ml-1" v-bind="props">
        <v-icon size="25" icon="tabler-bell" />
      </icon-btn>
    </template>
    <v-card height="100%" color="notification-card" rounded="lg">
      <div class="notification-card__header bg-surface rounded-t">
        <v-card-title class="d-flex py-3 align-center justify-space-between">
          <h4 class="text-h4">Notification</h4>
          <icon-btn size="small" icon="tabler-settings" />
        </v-card-title>
        <v-divider />
      </div>

      <v-card-item class="pa-0 ma-0 notification-card__body">
        <template v-for="item in notification" :key="item.name">
          <div :class="`py-2 px-5 ${item.isRead ? 'bg-background' : ''}`">
            <h5 class="text-h5">{{ item.name }}</h5>
            <p class="text-body-1 text-grey-500">
              {{ item.message }}
            </p>
          </div>
          <v-divider />
        </template>
      </v-card-item>
      <div class="notification-card__footer bg-surface rounded-b">
        <v-divider />
        <v-card-actions class="py-3 justify-center">
          <NuxtLink to="/"> View all Notifications </NuxtLink>
        </v-card-actions>
      </div>
    </v-card>
  </v-menu>
</template>
<style scoped lang="scss">
.headerFooter {
  position: fixed;
  width: 100%;
}

.notification-card {
  &__header {
    @extend .headerFooter;
    top: 0;
    z-index: 2;
  }

  &__footer {
    @extend .headerFooter;
    bottom: 0px;
    z-index: 2;
  }

  &__body {
    position: absolute;
    top: 55px;
    padding-bottom: 52px !important;
  }
}
</style>
