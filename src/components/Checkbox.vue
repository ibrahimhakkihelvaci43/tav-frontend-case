<template>
  <div class="checkbox-base">
    <input
      v-model="checked"
      class="checkbox-base__checkbox"
      type="checkbox"
      :id="value"
      @change="handleChange"
    />
    <label :for="value">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props =
  defineProps<{
    modelValue?: any;
    value: string;
  }>();

const emit = defineEmits(["update:modelValue", "onChange"]);

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emit("onChange", { value: props.value, checked: target.checked });
};

const checked = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});
</script>

<style lang="scss">
.checkbox-base {
  &__checkbox {
    position: absolute;
    opacity: 0;

    & + label {
      display: inline-block;
      position: relative;
      cursor: pointer;
      line-height: 20px;
      padding-left: 26px;

      &:before {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        content: "";
        background: transparent;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        transition: 200ms ease-in-out all;
        background-color: #160d1c;
        border-radius: 2px;
        border: 1px solid #fff;
      }

      &:after {
        position: absolute;
        display: block;
        top: 3px;
        left: 6px;
        content: "";
        width: 3px;
        height: 7px;
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        transform: rotate(45deg);
        transition: 200ms ease-in-out all;
      }
    }

    &:checked {
      & + label {
        &:before {
          background: #160d1c;
          box-shadow: none;
          border: none;
        }
        &:after {
          border-color: white;
        }
      }
    }
  }
}
</style>
