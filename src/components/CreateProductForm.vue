<template>
  <div class="create-product-form">
    <div class="create-product-form__content">
      <div class="create-product-form__item">
        <div class="create-product-form__label">
          <span class="create-product-form__label-req">*</span>
          Product Name
        </div>
        <Input v-model="createProductModel.name" />
      </div>
      <div class="create-product-form__item">
        <div class="create-product-form__label">
          <span class="create-product-form__label-req">*</span>
          Description
        </div>
        <TextArea v-model="createProductModel.description" />
      </div>
      <div class="create-product-form__item">
        <div class="create-product-form__label">
          <span class="create-product-form__label-req">*</span>
          Select Status
        </div>
        <Dropdown
          placeholder="Select.."
          :isFormItem="true"
          :items="statusList"
          @onClickItem="handleClickDropdownItem"
        />
      </div>
      <div class="create-product-form__item">
        <div class="create-product-form__label">
          <span class="create-product-form__label-req">*</span>
          Select Tags
        </div>
        <CheckboxGroup
          v-model:value="createProductModel.tags"
          :options="tags"
          :horizontal="true"
        />
      </div>
    </div>
    <div class="create-product-form__actions">
      <Button
        label="Cancel"
        type="secondary"
        :fullWidth="true"
        @onClick="handleCancel"
      />
      <Button label="Save" :fullWidth="true" @onClick="handleSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from "vue";
import { IDropdownItem } from "../types/components.types";
import { IProduct } from "../types/data.types";

const createProductModel = reactive<IProduct>({
  key: 0,
  name: "",
  description: "",
  status: "",
  tags: [],
});

const emit = defineEmits(["onSubmit", "onClickCancel"]);

const statusList = [
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Pending",
    value: "pending",
  },
];

const tags = [
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "UI",
    value: "ui",
  },
  {
    label: "Bug",
    value: "bug",
  },
];

const handleClickDropdownItem = (item: IDropdownItem) => {
  createProductModel.status = item.value;
};

const checkForm = () => {
  let emptyCount = 0;
  let formData: any = toRaw(createProductModel);

  for (let key in formData) {
    let value = formData[key];

    if (typeof value === "string") {
      if (value === "") emptyCount += 1;
    } else if (typeof value === "object") {
      if (value.length < 1) emptyCount += 1;
    }
  }

  return emptyCount === 0 ? true : false;
};

const handleSubmit = () => {
  let isValid = checkForm();

  if (isValid) {
    const formData = {
      ...createProductModel,
      key: Math.floor(Math.random() * 1000),
    };

    emit("onSubmit", formData);
  } else {
    alert("Please Fill All Fields");
  }
};

const handleCancel = () => {
  emit("onClickCancel");
};
</script>

<style lang="scss">
.create-product-form {
  width: 100%;

  &__content {
    margin-bottom: 49px;
  }

  &__item {
    margin-bottom: 16px;
  }

  &__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;

    &-req {
      color: #ff0000;
    }
  }

  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>
