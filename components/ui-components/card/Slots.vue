<script setup>
import { Slots } from "./__code";
import blandLogo from "/images/brand/logo/brand-logo.png";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
</script>

<template>
  <div id="slots">
    <GlobalsIntro title="Slots">
      The <code>v-card </code> component provides slots that enable you to customize content created
      by its props or to add additional content.
      <br />
      Slots give you greater control to customize the content of the
      <code>v-card </code> component while still taking advantage of the easy-to-use props.
    </GlobalsIntro>

    <GlobalsIntro title="Avatar and icon">
      You can use the <code>prepend-avatar</code>, <code>append-avatar</code>,
      <code>prepend-icon</code>and <code>append-icon</code> props or the prepend and append slots to
      place a <code>v-icon</code> that automatically injects the designated icon.
    </GlobalsIntro>
    <GlobalsCodePre :code="Slots">
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-card
            class="mx-auto ma-2"
            max-width="344"
            variant="outlined"
            title="Icons"
            subtitle="prepend-icon and append-icon"
            prepend-icon="tabler-user"
            append-icon="tabler-check"
          >
            <v-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
            >
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
            class="mx-auto ma-2"
            max-width="344"
            title="Icons"
            variant="tonal"
            subtitle="prepend and append"
          >
            <template #prepend>
              <v-icon icon="tabler-user" color="primary"></v-icon>
            </template>
            <template #append>
              <v-icon icon="tabler-check" color="success"></v-icon>
            </template>
            <v-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
            >
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
            class="mx-auto ma-2"
            max-width="344"
            title="Avatars"
            color="warning"
            subtitle="prepend-avatar and append-avatar"
            :prepend-avatar="blandLogo"
            :append-avatar="avatar1"
          >
            <v-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
            >
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card class="mx-auto ma-2" max-width="344" color="primary">
            <v-card-item>
              <template #prepend>
                <v-avatar color="white">
                  <v-icon color="primary" icon="tabler-alarm"></v-icon>
                </v-avatar>
              </template>
              <template #append>
                <v-avatar size="30">
                  <v-img :src="avatar3" alt="John"></v-img>
                </v-avatar>
              </template>
              <v-card-title class="text-white"> Avatars </v-card-title>
              <v-card-subtitle class="text-white"> prepend and append </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-white"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
