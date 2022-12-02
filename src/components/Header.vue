<template>
  <div class="header">
    <div class="header__breadcrumb">
      <div
        v-for="(item, index) in breadcrumbs"
        :class="[
          'header__breadcrumb-item',
          {
            'header__breadcrumb-item--active': index === breadcrumbs.length - 1,
          },
        ]"
      >
        {{ item }}
        <span
          v-if="index !== breadcrumbs.length - 1"
          class="header__breadcrumb-seperator"
          >/</span
        >
      </div>
    </div>
    <div class="header__search">
      <Input v-model:modelValue="value" placeholder="Search" size="small">
        <template #prefix>
          <Icon name="Search" width="14" height="14" fill="#FFFFFF66" />
        </template>
      </Input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Icon from "../utils/Icon";

interface Props {
  searchStr: any;
  breadcrumbs: Array<string>;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:searchStr"]);

const value = computed({
  get: () => props.searchStr,
  set: (val) => {
    emit("update:searchStr", val);
  },
});

/** const searchStr = ref(""); const breadcrumbs = ["Dashboard", "Case Study"];

<Header v-model:searchStr="searchStr" :breadcrumbs="breadcrumbs" />
<div>search: {{ searchStr }}</div>
*/
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 31px 20px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__breadcrumb {
    display: flex;

    &-seperator {
      margin: 0 12px;
    }
  }

  &__breadcrumb-item {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;

    &--active {
      color: #ffff;
    }
  }
}
</style>
