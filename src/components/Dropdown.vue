<template>
  <div
    v-click-outside="onClose"
    :class="[
      'dropdown',
      {
        'dropdown--form-item': isFormItem,
      },
    ]"
  >
    <div class="dropdown__top" @click="onClick">
      <div
        :class="[
          'dropdown__top-label',
          {
            'dropdown__top-label--selected': selectedItem,
          },
        ]"
      >
        <template v-if="isFormItem">
          {{ selectedItem?.label ?? placeholder }}</template
        >
        <template v-else>
          {{ placeholder }} {{ selectedItem?.label }}
        </template>
      </div>
      <Icon
        v-if="!isFormItem"
        :name="expandIcon"
        width="18"
        height="18"
        fill="#FFFFFF33"
      />
    </div>
    <div v-if="isOpen" class="dropdown__content">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="dropdown__item"
        @click="onClickItem(item)"
      >
        <span class="dropdown__item-label">
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../utils/Icon";
import { ref, computed } from "vue";
import { IListItem } from "../types/components.types";

interface Props {
  placeholder?: string;
  items: IListItem[];
  isFormItem?: boolean;
}

defineProps<Props>();
const emit = defineEmits(["onClickItem"]);

const isOpen = ref(false);
const selectedItem = ref<IListItem>();

const expandIcon = computed(() => (isOpen.value ? "ExpandLess" : "ExpandMore"));

const onClick = () => {
  isOpen.value = !isOpen.value;
};

const onClickItem = (item: IListItem) => {
  selectedItem.value = item;
  emit("onClickItem", item);
  onClose();
};

const onClose = () => {
  isOpen.value = false;
};
</script>

<style lang="scss">
.dropdown {
  $a: &;
  position: relative;

  &__top {
    display: flex;
    cursor: pointer;

    &-label {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: #ffffffd9;
    }
  }

  &__content {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background-color: #090010;
    width: 174px;
    border-radius: 8px;
    padding: 8px;
    z-index: 99999;
  }

  &__item {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;

    &-label {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    &:hover {
      background: #ffffff1a;
    }
  }

  &--form-item {
    #{$a}__top {
      height: 40px;
      background: #ffffff1a;
      border: 1px solid #ffffff1a;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 0 16px;

      &-label {
        font-size: 14px;
        color: #ffffff33;

        &--selected {
          color: #fff !important;
        }
      }
    }

    #{$a}__content {
      width: 100%;
    }
  }
}
</style>
