<template>
  <div :class="['input-base', `input-base--${size}`]">
    <div v-if="hasPrefix" class="input-base__prefix">
      <slot name="prefix" />
    </div>
    <input v-model="value" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: any;
    placeholder?: string;
    size?: "small" | "middle" | "large";
  }>(),
  {
    size: "middle",
  }
);

const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

const hasPrefix = computed(() => !!slots["prefix"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});
</script>

<style lang="scss">
.input-base {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff1a;
  border-radius: 8px;
  padding: 8px;

  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background-color: unset;
    color: #fff;

    &::placeholder {
      color: #ffffff66;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__prefix {
    margin-right: 6px;
  }

  &--small {
    height: 28px;
  }

  &--medium {
    height: 40px;
  }

  &--large {
    height: 60px;
  }
}
</style>
