<template>
  <div class="menu-item">
    <div class="menu-item__top" @click="onClick">
      <div class="menu-item__icon-wrapper">
        <Icon :name="expandIcon" width="18" height="18" fill="#FFFFFF33" />
      </div>
      <span class="menu-item__icon-wrapper">
        <Icon :name="icon" width="18" height="18" fill="#ffff" />
      </span>

      <span class="menu-item__label">{{ title }}</span>
    </div>
    <div v-if="isExpanded" class="menu-item__content">
      <div
        v-for="(item, index) in subItems"
        :class="[
          'menu-item__sub-item',
          {
            'menu-item__sub-item--active': item.value === activeSubItem,
          },
        ]"
      >
        <div
          :key="index"
          class="menu-item__label"
          @click="onClickSubItem(item)"
        >
          {{ item.label }}
        </div>
        <div
          v-if="item.value === activeSubItem"
          class="menu-item__sub-item-dot"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ISubItem } from "../types/components.types";
import Icon from "../utils/Icon";

const isExpanded = ref(false);
const activeSubItem = ref();

interface Props {
  parent: string;
  title: string;
  icon: string;
  subItems: ISubItem[];
}

const props = defineProps<Props>();

const expandIcon = computed(() =>
  isExpanded.value ? "ExpandLess" : "ExpandMore"
);

const emit = defineEmits(["onClickSubItem"]);

const onClick = () => {
  isExpanded.value = !isExpanded.value;
};

const onClickSubItem = (item: ISubItem) => {
  activeSubItem.value = item.value;
  emit("onClickSubItem", { parent: props.parent, route: item.value });
};
</script>

<style lang="scss">
.menu-item {
  $a: &;
  background-color: #090010;

  &__label {
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  &__top {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding-left: 10px;
  }

  &__content {
    margin-top: 7px;
  }

  &__sub-item {
    position: relative;
    padding: 4px 0 4px 52px;
    border-radius: 8px;
    cursor: pointer;

    &-dot {
      width: 4px;
      height: 16px;
      background-color: #c6c7f8;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }

    &--active {
      background: rgba(255, 255, 255, 0.1);

      #{$a}__label {
        font-weight: 700;
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__icon-wrapper {
    width: 18px;
    height: 24px;
  }
}
</style>
