<template>
  <q-card square bordered class="q-pa-lg shadow-1">
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input
          square
          filled
          clearable
          v-model="email"
          type="email"
          label="Email"
        />
        <q-input
          square
          filled
          clearable
          v-model="password"
          type="password"
          label="Password"
        />
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn
        unelevated
        color="primary"
        size="lg"
        class="full-width"
        label="Login"
      />
    </q-card-actions>
    <q-card-section class="text-center q-pa-none">
      <p class="text-grey-6">Not registered? Create an Account</p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>
