<template>
      <!-- <slot name="ccc"></slot> -->

  <button @click="clickc">77888</button>
  <button @click="childClick">aabbb</button>

  <!-- <slot></slot>
  <del>删除内容站中间</del>
  <slot name="left" :strr="str" :isShow="isShow"></slot>

  <slot name="aaa"></slot> -->


  {{ modelValue }}
</template>
<script setup>
// import { getCurrentInstance } from "vue";
const str = ref('rr')
let isShow = true

const { proxy } = getCurrentInstance();

let props = defineProps({
  modelValue: {
    type: Number,
    defineProps: 0,
    required: true,
  },
});
let strr = '77888';
function childClick() {
  proxy.$emit('childClick', 'xx');
};
let clickc = function () {
  console.log('11');
  proxy.$emit('update:modelValue', 66);
};

defineExpose({
    clickc
})
</script>
