<script setup>
import { IconEvents } from "./__code";

const message = ref("Hey!");
const marker = ref(true);
const iconIndex = ref(0);

const toggleMarker = () => {
  marker.value = !marker.value;
};

const clearMessage = () => {
  message.value = "";
};

const resetIcon = () => {
  iconIndex.value = 0;
};

const sendMessage = () => {
  resetIcon();
  clearMessage();
};
</script>

<template>
  <div id="icon-events">
    <GlobalsIntro title="Icon events">
      <code>click:prepend</code>, <code>click:append</code>, <code>click:append-inner</code>, and
      <code>click:clear</code> will be emitted when you click on the respective icon
    </GlobalsIntro>
    <GlobalsCodePre :code="IconEvents">
      <global-text-field
        v-model="message"
        clearable
        type="text"
        label="Message"
        color="primary"
        placeholder="Hey!!"
        clear-icon="tabler-circle-x"
        :append-icon="
          message
            ? $vuetify.locale.isRtl
              ? 'tabler-arrow-big-left-lines'
              : 'tabler-arrow-big-right-lines'
            : 'tabler-microphone'
        "
        :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
        @click:append-inner="toggleMarker"
        @click:append="sendMessage"
        @click:clear="clearMessage"
      />
    </GlobalsCodePre>
  </div>
</template>
