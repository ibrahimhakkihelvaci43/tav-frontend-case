<template>
  <div class="checkbox-group">
    <div v-for="(item, index) in options" class="checkbox-group__checkbox-base">
      <input
        v-model="value"
        class="checkbox-group__checkbox-base__checkbox"
        type="checkbox"
        :id="item.value"
        :value="item.value"
      />
      <label :for="item.value">
        <template v-if="item.label">
          {{ item.label }}
        </template>
        <template v-else-if="item.node">
          <component :is="item.node" />
        </template>
      </label>
    </div>
  </div>
</template> 

<script setup lang="ts">
import { ref, VNode, computed } from "vue";
import { CheckboxOptions } from "../utils/types";

interface Props {
  options: CheckboxOptions;
  value: any;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:value"]);

const value = computed({
  get: () => props.value,
  set: (val) => {
    emit("update:value", val);
  },
});
</script>

<style lang="scss">
.checkbox-group {
  &__checkbox-base {
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
}
</style>
