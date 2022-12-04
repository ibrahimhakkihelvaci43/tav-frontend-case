<template>
  <textarea class="textarea-base" v-model="value" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props =
  defineProps<{
    modelValue: any;
  }>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});
</script>

<style lang="scss">
.textarea-base {
  width: 100%;
  max-width: 100%;
  max-height: 100px;
  background-color: #ffffff1a;
  border-radius: 8px;
  padding: 11px;
  height: 40px;
  outline: none;
  border: none;
  color: #fff;
  border: 1px solid #ffffff1a;
}
</style>
