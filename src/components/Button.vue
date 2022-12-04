<template>
  <button
    :class="[
      'button-base',
      `button-base--${type}`,
      { 'button-base--full-width': fullWidth },
    ]"
    @click="emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  type?: "primary" | "secondary" | "link";
  fullWidth?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "primary",
});

const emit = defineEmits(["onClick"]);
</script>

<style lang="scss">
.button-base {
  height: 40px;
  min-width: 123px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  padding: 11px;

  &:focus {
    outline: none;
  }

  &--full-width {
    width: 100%;
  }

  &--primary {
    background-color: #c6c7f8;
    color: #1c1c1c;
    border: 1px solid #0000001a;
  }

  &--secondary {
    background-color: #ffffff1a;
    color: #fff;
    border: 1px solid #ffffff1a;
  }

  &--link {
    height: unset;
    background-color: unset;
    font-weight: 400;
    font-size: 12px;
    color: #b2b3df;
    padding: 0;
    min-width: unset;
  }
}
</style>
