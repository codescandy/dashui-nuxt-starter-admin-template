<script setup>
import brandLogo1 from "/images/brand/other-brand-logo/1.svg";
import brandLogo2 from "/images/brand/other-brand-logo/2.svg";
import brandLogo3 from "/images/brand/other-brand-logo/3.svg";
import brandLogo4 from "/images/brand/other-brand-logo/4.svg";
import brandLogo5 from "/images/brand/other-brand-logo/5.svg";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
import avatar5 from "/images/avatar/avatar-5.jpg";
import avatar6 from "/images/avatar/avatar-6.jpg";
import avatar7 from "/images/avatar/avatar-7.jpg";
import avatar8 from "/images/avatar/avatar-8.jpg";
import avatar9 from "/images/avatar/avatar-9.jpg";
import avatar10 from "/images/avatar/avatar-10.jpg";
import avatar11 from "/images/avatar/avatar-11.jpg";
import avatar12 from "/images/avatar/avatar-12.jpg";
import avatar13 from "/images/avatar/avatar-13.jpg";
import avatar14 from "/images/avatar/avatar-14.jpg";
import avatar15 from "/images/avatar/avatar-15.jpg";
import carousel1 from "/images/components/carousel/1.jpg";

const { uuid } = useComposables();

const projectContributorData = [
  {
    id: uuid(),
    brand_logo: brandLogo1,
    project: "Slack Figma Design UI",
    desc: "Project description and details about...",
    avatar: [avatar1, avatar2, avatar3],
  },
  {
    id: uuid(),
    brand_logo: brandLogo2,
    project: "Design 3d Character",
    desc: "Project description and details about...",
    avatar: [avatar4, avatar5, avatar6],
  },
  {
    id: uuid(),
    brand_logo: brandLogo3,
    project: "Github Development",
    desc: "Project description and details about...",
    avatar: [avatar7, avatar8, avatar9],
  },
  {
    id: uuid(),
    brand_logo: brandLogo4,
    project: "Project Management",
    desc: "Project description and details about...",
    avatar: [avatar10, avatar11, avatar12],
  },
  {
    id: uuid(),
    brand_logo: brandLogo5,
    project: "Dropbox Design System",
    desc: "Project description and details about...",
    avatar: [avatar13, avatar14, avatar15],
  },
];

const menuList = [
  { title: "Action" },
  { title: "Another Action" },
  { title: "Something elese here" },
];

const myTeamData = [
  {
    id: uuid(),
    name: "Dianna Smiley",
    profile: "UI / UX Designer",
    image: avatar1,
  },
  {
    id: uuid(),
    name: "Anne Brewer",
    profile: "Senior UX Designer",
    image: avatar2,
  },
  {
    id: uuid(),
    name: "Richard Christmas",
    profile: "Front-End Engineer",
    image: avatar3,
  },
  {
    id: uuid(),
    name: "Nicholas Binder",
    profile: "Content Marketing Manager",
    image: avatar4,
  },
];

const activityFeed = [
  {
    id: uuid(),
    name: "Dianna Smiley",
    desc: "Just create a new Project in Dashui...",
    image: avatar11,
    lastSeen: "2m ago",
  },
  {
    id: uuid(),
    name: "Irene Hargrove",
    desc: "Comment on Bootstrap Tutorial Says Hi, I m irene...",
    image: avatar12,
    lastSeen: "1hour ago",
  },
  {
    id: uuid(),
    name: "Trevor Bradley",
    desc: "Comment on Bootstrap Tutorial Says Hi, I m irene...",
    image: avatar13,
    lastSeen: "2month ago",
  },
];
</script>
<template>
  <v-row>
    <v-col cols="12" lg="6">
      <v-card>
        <v-card-title>
          <h4 class="text-h4">About Me</h4>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <h5 class="text-h5">Bio</h5>
          <p class="text-body-1 mt-2 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse var ius enim in
            eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat.
          </p>

          <v-row>
            <v-col cols="12">
              <h5 class="text-h5 text-uppercase">Position</h5>
              <p class="text-body-1">Theme designer at Gumroad.</p>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="text-h5 text-uppercase">Phone</h5>
              <p class="text-body-1">+32112345689</p>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="text-h5 text-uppercase">Date of Birth</h5>
              <p class="text-body-1">01.10.1997</p>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="text-h5 text-uppercase">Email</h5>
              <p class="text-body-1">Dashui@gmail.com</p>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="text-h5 text-uppercase">Location</h5>
              <p class="text-body-1">Ahmedabad, India</p>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>

    <v-col cols="12" lg="6">
      <v-card>
        <v-card-title>
          <h4 class="text-h4">Projects Contributions</h4>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <div
            v-for="(item, idx) in projectContributorData"
            :key="item.id"
            :class="`d-flex align-center justify-space-between ga-2 flex-wrap ${
              idx !== projectContributorData.length - 1 ? 'mb-4' : ''
            }`"
          >
            <div class="d-flex ga-2 align-center">
              <v-avatar :image="item.brand_logo" />
              <div>
                <NuxtLink to="/" class="text-h5"> {{ item.project }}</NuxtLink>
                <p class="text-body-1 text-grey-500">{{ item.desc }}</p>
              </div>
            </div>
            <div class="d-flex align-center ga-2">
              <div class="v-avatar-group">
                <v-avatar v-for="image in item.avatar" size="32" :key="image" :image="image" />
              </div>
              <v-menu location="start">
                <template v-slot:activator="{ props }">
                  <icon-btn icon="tabler-dots-vertical" v-bind="props" size="small" />
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in menuList" :key="i" :value="item.title">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" lg="6">
      <v-card>
        <v-card-title class="d-flex align-center justify-space-between">
          <div class="d-flex ga-2 align-center">
            <v-avatar :image="avatar10" />
            <div>
              <h5 class="text-h5">Jitu Chauhan</h5>
              <p class="text-body-1">19 minutes ago</p>
            </div>
          </div>

          <v-menu location="start">
            <template v-slot:activator="{ props }">
              <icon-btn icon="tabler-dots-vertical" v-bind="props" size="small" />
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in menuList" :key="i" :value="item.title">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>

        <v-card-item class="pt-0">
          <p class="text-body-1 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse var ius enim in
            eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat.
          </p>
          <v-img :src="carousel1" class="rounded" />
          <div class="d-flex align-center ga-2 my-4 flex-wrap">
            <span class="text-body-1 d-flex align-center ga-1">
              <v-icon icon="tabler-heart" />
              20 Like
            </span>
            <span class="text-body-1 d-flex align-center ga-1">
              <v-icon icon="tabler-message" />
              12 Comment
            </span>
            <span class="text-body-1 d-flex align-center ga-1">
              <v-icon icon="tabler-share" />
              Share
            </span>
          </div>
          <div class="mb-4">
            <v-divider />
            <div class="d-flex align-center ga-2">
              <div class="v-avatar-group py-4">
                <v-avatar size="32" :image="avatar11" />
                <v-avatar size="32" :image="avatar12" />
                <v-avatar size="32" :image="avatar13" />
              </div>
              <p class="text-body-1">You and 20 more liked this</p>
            </div>

            <v-divider />
          </div>
          <div class="d-flex align-center ga-2 flex-wrap">
            <v-avatar :image="avatar11" />
            <GlobalsTextField class="flex-grow-1" />
            <v-btn> Post </v-btn>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card class="mb-5">
        <v-card-title>
          <h4 class="text-h4">My Team</h4>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <div
            v-for="(item, idx) in myTeamData"
            :key="item.id"
            :class="`d-flex align-center justify-space-between ga-2 flex-wrap ${
              idx !== myTeamData.length - 1 ? 'mb-4' : ''
            }`"
          >
            <div class="d-flex ga-2 align-center">
              <v-avatar :image="item.image" />
              <div>
                <NuxtLink to="/" class="text-h5"> {{ item.name }}</NuxtLink>
                <p class="text-body-1 text-grey-500">{{ item.profile }}</p>
              </div>
            </div>

            <div>
              <icon-btn>
                <v-icon icon="tabler-phone-call" />
                <v-tooltip activator="parent" location="top"> Call </v-tooltip>
              </icon-btn>
              <icon-btn>
                <v-icon icon="tabler-video" />
                <v-tooltip activator="parent" location="top"> Video </v-tooltip>
              </icon-btn>
            </div>
          </div>
        </v-card-item>
      </v-card>

      <v-card>
        <v-card-title>
          <h4 class="text-h4">Activity Feed</h4>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <div
            v-for="(item, idx) in activityFeed"
            :key="item.id"
            :class="`${idx !== activityFeed.length - 1 ? 'mb-4' : ''}`"
          >
            <div class="d-flex ga-2">
              <v-avatar :image="item.image" />
              <div>
                <NuxtLink to="/" class="text-h5"> {{ item.name }}</NuxtLink>
                <p class="text-body-1 text-grey-500 mb-1">{{ item.desc }}</p>
                <p class="text-body-2">{{ item.lastSeen }}</p>
              </div>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
