<template>
  <div :class="['status-tag', `status-tag--${type}`]">
    <div class="status-tag__dot" />
    <div class="status-tag__label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { camelCaseToTitle } from "../utils/formatters";

interface Props {
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "completed",
});

const label = computed(() => camelCaseToTitle(props.type));
</script>

<style lang="scss">
.status-tag {
  $a: &;
  display: flex;
  align-items: center;

  &__label {
    font-weight: 400;
    line-height: 18px;
    margin-left: 5px;
  }

  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }

  &--completed {
    #{$a}__label {
      color: #4aa785;
    }

    #{$a}__dot {
      background-color: #a1e3cb;
    }
  }

  &--pending {
    #{$a}__label {
      color: #59a8d4;
    }

    #{$a}__dot {
      background-color: #59a8d4;
    }
  }

  &--in-progress {
    #{$a}__label {
      color: #8a8cd9;
    }

    #{$a}__dot {
      background-color: #8a8cd9;
    }
  }
}
</style>
