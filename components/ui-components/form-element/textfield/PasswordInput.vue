<script setup>
import { PasswordInput } from "./__code";

const show1 = ref(false);
const show2 = ref(true);
const password = ref("Password");
const confirmPassword = ref("wqfasds");

const rules = {
  required: (value) => !!value || "Required.",
  min: (v) => v.length >= 8 || "Min 8 characters",
};
</script>

<template>
  <div id="password-input">
    <GlobalsIntro title="Password input">
      Using the HTML input <code>type</code> password can be used with an appended icon and callback
      to control the visibility.
    </GlobalsIntro>
    <GlobalsCodePre :code="PasswordInput" margin-l>
      <global-text-field
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />

      <global-text-field
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </GlobalsCodePre>
  </div>
</template>
