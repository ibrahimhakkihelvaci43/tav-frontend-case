<template>
  <div class="checkbox-group">
    <Checkbox
      v-for="(item, index) in options"
      :value="item.value"
      @onChange="handleChange"
    >
      <template v-if="item.label">
        {{ item.label }}
      </template>
      <template v-else-if="item.node">
        <component :is="item.node" />
      </template>
    </Checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref, VNode } from "vue";

interface Props {
  options: { label?: string; node?: VNode; value: string }[];
}

defineProps<Props>();

const checkList = ref<Array<string>>([]);
const emit = defineEmits(["update:value"]);

const handleChange = (e: { value: string; checked: boolean }) => {
  if (e.checked) checkList.value.push(e.value);
  else checkList.value = checkList.value.filter((item) => item !== e.value);

  emit("update:value", checkList.value);
};
</script>

<style lang="scss">
.checkbox-group {
  .checkbox-base {
    margin-bottom: 10px;
  }
}
</style>
