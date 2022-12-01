<template>
  <div class="dropdown">
    <div class="dropdown__top" @click="onClick">
      <div class="dropdown__top-label">Sort By: Status</div>
      <Icon :name="expandIcon" width="18" height="18" fill="#FFFFFF33" />
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

interface Item {
  label: string;
  value: string;
}

interface Props {
  title: string;
  items: Item[];
}

defineProps<Props>();
const emit = defineEmits(["onClickItem"]);

const isOpen = ref(false);

const expandIcon = computed(() => (isOpen.value ? "ExpandLess" : "ExpandMore"));

const onClick = () => {
  isOpen.value = !isOpen.value;
};

const onClickItem = (item: Item) => {
  isOpen.value = false;
  emit("onClickItem", item);
};
</script>

<style lang="less">
.dropdown {
  position: relative;

  &__top {
    display: flex;
    cursor: pointer;

    &-label {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #ffffffd9;
    }
  }

  &__content {
    position: absolute;
    top: calc(100% + 10px);
    background-color: #090010;
    width: 174px;
    border-radius: 8px;
    padding: 8px;
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
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
