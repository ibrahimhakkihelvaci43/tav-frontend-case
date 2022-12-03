<template>
  <div class="filter">
    <div class="filter__top">
      <div class="filter__top-title">Status</div>
      <Button label="Select All" type="link" @onClick="handleClickSelectAll" />
    </div>
    <div class="filter__content">
      <CheckboxGroup v-model:value="value" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { CheckboxOptions } from "../types/components.types";
 
interface Props {
  key: string;
  options: CheckboxOptions;
  modelValue: any;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "onClickSelectAll"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});

const handleClickSelectAll = () => {
  emit("onClickSelectAll", props.key);
};
</script>

<style lang="scss">
.filter {
  max-width: 212px;

  &__top {
    padding-left: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  &__content {
    margin-top: 8px;
  }
}
</style>
