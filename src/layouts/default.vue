<template>
  <div class="default-layout">
    <div class="default-layout__sidebar">
      <img class="default-layout__logo" src="../assets/tav-logo.png" />
      <div class="default-layout__links">
        <div class="default-layout__links-label">Pages</div>
        <MenuItem
          v-for="(item, index) in menuItemProps"
          v-bind="item"
          :breadcrumbs="breadcrumbs"
          @onClickSubItem="handleClickMenuItem"
        />
      </div>

      <div class="default-layout__filters">
        <ProductFilters
          v-if="breadcrumbs[breadcrumbs.length - 1] === 'case-study'"
        />
      </div>
    </div>
    <div class="default-layout__content">
      <Header v-model:searchStr="store.searchStr" :breadcrumbs="breadcrumbs" />
      <div class="default-layout__views">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
import { useProductStore } from "../stores/products";

const store = useProductStore();
const router = useRouter();
const route = useRoute();

const menuItemProps = [
  {
    parent: "dashboards",
    title: "Dashboards",
    icon: "AccountBox",
    subItems: [
      {
        label: "Aviation",
        value: "aviation",
      },
      {
        label: "Case Study",
        value: "case-study",
      },
      {
        label: "Planes",
        value: "planes",
      },
      {
        label: "Ground Handling",
        value: "ground-handling",
      },
    ],
  },
];

const breadcrumbs = computed(() => route.path.split("/").filter(Boolean));

const handleClickMenuItem = (item: { parent: string; route: string }) => {
  router.push(`/${item.parent}/${item.route}`);
};
</script>

<style lang="scss">
.default-layout {
  height: 100vh;
  display: flex;

  &__sidebar {
    width: 212px;
    height: 100%;
    border-right: 1px solid #ffffff1a;
    padding: 21px 16px 21px 16px;
  }

  &__content {
    height: auto;
    width: calc(100% - 212px);
    overflow: auto;
  }

  &__logo {
    height: 52px;
    width: 165px;
  }

  &__links {
    margin-top: 12px;

    &-label {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff66;
      margin-bottom: 12px;
    }
  }

  &__views {
    padding: 32px 32px 32px 36px;
  }

  &__filters {
    margin-top: 24px;
  }
}
</style>
