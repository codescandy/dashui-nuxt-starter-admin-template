<script setup>
import profileCover from "/images/background/profile-cover.jpg";
import checkedMark from "/images/background/checked-mark.svg";
import avatar11 from "/images/avatar/avatar-11.jpg";

const navList = [
  {
    name: "Overview",
    to: "profile-overview",
  },
  {
    name: "Project",
    to: "profile-project",
  },
  {
    name: "Files",
    to: "profile-files",
  },
  {
    name: "Team",
    to: "profile-team",
  },
  {
    name: "Followers",
    to: "profile-followers",
  },
  {
    name: "Activity",
    to: "profile-activity",
  },
];
</script>

<template>
  <v-card class="apps-user-profile mb-5">
    <!-- bg -->
    <div class="apps-user-profile__background pa-16" :style="`background: url(${profileCover});`" />
    <!-- profile -->
    <div>
      <div class="pa-4 d-flex align-center justify-space-between flex-wrap ga-2">
        <div class="d-flex ga-2 flex-wrap">
          <div class="apps-user-profile__avatar-wrapper mt-n12">
            <img :src="checkedMark" class="apps-user-profile__avatar-wrapper__lable-img mr-2" />
            <v-badge bordered color="success" location="bottom end" :offset-x="15" :offset-y="18">
              <v-avatar size="120">
                <v-img :src="avatar11" />
              </v-avatar>
            </v-badge>
          </div>
          <div>
            <h2 class="text-h2">Jitu Chauhan</h2>
            <p class="text-body-1">@imjituchauhan</p>
          </div>
        </div>
        <v-btn variant="outlined"> Edit Profile </v-btn>
      </div>
      <v-divider />
      <ul class="apps-user-profile__nav-list px-4 d-flex">
        <li
          v-for="(item, idx) in navList"
          :key="item.name"
          :class="`apps-user-profile__nav-list__item py-4 mx-4 ${idx === 0 ? 'active' : ''}`"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.apps-user-profile {
  &__background {
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }

  &__avatar-wrapper {
    position: relative;

    &__lable-img {
      position: absolute;
      width: 24px;
      height: 24px;
      right: 0;
      z-index: 1;
    }
  }

  &__nav-list {
    overflow-x: auto;

    &__item {
      border-top: 2px solid transparent;

      &:hover,
      &.active {
        cursor: pointer;
        background: transparent;
        border-color: rgba(var(--v-theme-primary));
      }
    }
  }
}
</style>
