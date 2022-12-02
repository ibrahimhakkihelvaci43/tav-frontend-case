<template>
  <div v-if="visible" class="modal">
    <div class="modal__content">
      <div class="modal__title">
        {{ title }}
      </div>

      <slot />

      <Icon
        class="modal__close"
        name="Close"
        width="24"
        height="24"
        fill="#ffffff66"
        @click="onClose"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../utils/Icon";

interface Props {
  title: string;
  visible: boolean;
}

defineProps<Props>();

const emit = defineEmits(["update:visible"]);

const onClose = () => {
  emit("update:visible", false);
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  &__content {
    width: 445px;
    position: relative;
    background: #160d1c;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 24px 32px 32px 24px;
  }

  &__close {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
  }
}
</style>
