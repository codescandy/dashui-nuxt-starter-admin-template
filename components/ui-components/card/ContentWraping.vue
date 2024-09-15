<script setup>
import { ContentWraping } from "./__code";
import card2 from "/images/components/card/2.jpg";

const messages = [
  {
    from: "You",
    message: "Sure, I'll see you later.",
    time: "10:42am",
    color: "primary",
  },
  {
    from: "John Doe",
    message: "Yeah, sure. Does 1:00pm work?",
    time: "10:37am",
    color: "error",
  },
  {
    from: "You",
    message: "Did you still want to grab lunch today?",
    time: "9:47am",
    color: "info",
  },
];
</script>

<template>
  <div id="content-wraping">
    <GlobalsIntro title="Content wraping ">
      The <code>v-card</code> component is useful for wrapping content.
    </GlobalsIntro>
    <GlobalsCodePre :code="ContentWraping">
      <v-row justify="space-around">
        <v-card width="400" color="background">
          <v-img height="200" :src="card2" cover class="text-white">
            <v-toolbar color="rgba(0, 0, 0, 0.5)" theme="dark">
              <template #prepend>
                <icon-btn class="ml-2" icon="tabler-menu-2" />
              </template>

              <v-toolbar-title class="text-h5"> Messages </v-toolbar-title>

              <template #append>
                <icon-btn icon="tabler-dots-vertical" />
              </template>
            </v-toolbar>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">Today</div>

            <v-timeline density="compact" align="start">
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
