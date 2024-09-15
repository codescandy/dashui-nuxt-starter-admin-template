<script setup>
defineProps({
  menuType: {
    type: String,
    default: "vertical",
  },
});

const router = useRouter();

const Pages = [
  {
    title: "Profile",
    to: "profile",
  },
  {
    title: "Settings",
    to: "settings",
  },
  {
    title: "Pricing",
    to: "pricing",
  },
  {
    title: "404 Error",
    to: "error-404",
  },
];

const Authentication = [
  {
    title: "Sign In",
    to: "sign-in",
  },
  {
    title: "Sign Up",
    to: "sign-up",
  },
  {
    title: "Forget Password",
    to: "forget-password",
  },
];
</script>
<template>
  <template v-if="menuType === 'vertical'">
    <div class="vertical-nav-list__label">Layouts & Pages</div>
    <!-- Pages -->
    <v-list-group value="pages">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Pages" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-page-break" />
          </template>
        </v-list-item>
      </template>

      <v-list-item
        v-for="item in Pages"
        :key="item.to"
        class="vertical-nav-list__group"
        :title="item.title"
        :value="item.to"
        :to="`/${item.to}`"
      />
    </v-list-group>

    <!-- Authentication -->
    <v-list-group value="authentication">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Authentication" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-lock" />
          </template>
        </v-list-item>
      </template>

      <v-list-item
        v-for="item in Authentication"
        :key="item.to"
        class="vertical-nav-list__group"
        :title="item.title"
        :value="item.to"
        :to="`/${item.to}`"
      />
    </v-list-group>

    <!-- Layouts -->
    <v-list-group value="layouts">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Layouts" class="vertical-nav-list__item py-2">
          <template #prepend>
            <v-icon icon="tabler-layout-2" />
          </template>
        </v-list-item>
      </template>

      <v-list-item title="Default" class="vertical-nav-list__group" @click="router.push('/')" />
    </v-list-group>
  </template>
</template>
