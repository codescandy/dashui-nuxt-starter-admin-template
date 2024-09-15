<script setup>
const { requiredValidator } = useValidators();

const refVForm = ref();
const isPasswordVisible = ref(false);
const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const errors = ref({
  email: undefined,
  password: undefined,
});

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) alert("Welcome");
  });
};
</script>
<template>
  <v-card elevation="4">
    <v-card-item class="pa-6">
      <div class="mb-6">
        <NuxtLink to="/" class="d-flex mb-2">
          <img src="/images/brand/logo/logo-light.svg" height="30px" />
        </NuxtLink>
        <p class="text-body-1">Please enter your user information.</p>
      </div>

      <v-form ref="refVForm" @submit.prevent="onSubmit">
        <GlobalsTextField
          v-model="email"
          label="Username or email"
          type="email"
          autofocus
          placeholder="Email address here"
          :rules="[requiredValidator]"
          :error-messages="errors.email"
          class="mb-3"
        />

        <GlobalsTextField
          v-model="password"
          label=" Password"
          placeholder="************"
          :rules="[requiredValidator]"
          :type="isPasswordVisible ? 'text' : 'password'"
          :error-messages="errors.password"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          class="mb-3"
        />

        <v-checkbox v-model="rememberMe" label="Remember me" class="mb-4" />

        <v-btn type="submit" block> Sign in </v-btn>
        <div class="mt-4 d-flex align-center justify-space-between ga-2 flex-wrap">
          <NuxtLink to="sign-up" class="font-weight-5 text-primary"> Create An Account </NuxtLink>
          <NuxtLink to="forget-password" class="font-weight-5"> Forgot your password? </NuxtLink>
        </div>
      </v-form>
    </v-card-item>
  </v-card>
</template>
