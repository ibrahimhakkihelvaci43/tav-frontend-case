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
      <div v-for="(item, index) in subItems" class="menu-item__sub-item">
        <div
          :key="index"
          class="menu-item__label"
          @click="onClickSubItem(item)"
        >
          {{ item.label }}
        </div>
        <div
          v-if="item.value === activeSubItem"
          class="menu-item__sub-item-active"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Icon from "../utils/Icon";

const isExpanded = ref(false);
const activeSubItem = ref();

interface SubItem {
  label: string;
  value: string;
}

interface Props {
  title: string;
  icon: string;
  subItems: SubItem[];
}

defineProps<Props>();

const expandIcon = computed(() =>
  isExpanded.value ? "ExpandLess" : "ExpandMore"
);

const emit = defineEmits(["onClickSubItem"]);

const onClick = () => {
  isExpanded.value = !isExpanded.value;
};

const onClickSubItem = (item: SubItem) => {
  activeSubItem.value = item.value;
  emit("onClickSubItem", item);
};
</script>

<style lang="less">
.menu-item {
  background-color: #090010;
  max-width: 180px;
  margin: 50px;

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

    &-active {
      width: 4px;
      height: 16px;
      background-color: #c6c7f8;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
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
