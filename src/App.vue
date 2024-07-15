<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Demo from './components/Demo.vue';
import { getCurrentInstance, onMounted } from 'vue';

// import { reactive,ref } from 'vue';

let count = $ref(0);
let obj = reactive({
  name:'123',
  age:'6'
})
let cout2 =0
function click() {
  console.log(num)
  num.value++;
  obj.age++
}
let str = computed({
  set(val){
    count = val
  },
  get(){
    return count
  }

})
const {proxy} = getCurrentInstance();
function handleClick(...args){
  console.log(args,'args')
  proxy.$refs.childRef.clickc()
}

watch(count,(newValue,oldValue)=>{
  console.log(newValue,oldValue,222)
})
let ss = ref('')
function aac(aa){
  console.log(aa,1)
  ss.value = aa
}
let number  =ref(11)
let dynamicSlot = ref('aaa')
function handleChildClick(...args){
  dynamicSlot.value = 'ccc'
  console.log(args,'argsargs')
}

onMounted(()=>{
  init()
})

function init(){
  console.log('init')
}

</script>

<template>
  <component :is="Demo"> </component>
  <!-- <Demo :data="20" ref="childRef" @childClick="handleChildClick" @childCallBack="aac" v-model="number" >
    <pre>放在插槽内的内容</pre>
    <template #left="{strr, isShow}">放在左插槽的内容 {{ strr }}
      <div v-if="isShow">isshow?</div>
    </template>
    <template #[dynamicSlot]>动态插槽</template>

  </Demo> -->

  {{ str }}
  {{ str }}
  <article @click="handleClick" style="border:1px solid red">wenzhangwenzhang</article>
{{ ss }}
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <span>a number</span> 
    <span>{{ num }}</span>
  </div>
  <div>
    {{ obj.age }}
  </div>
  <button type="button" @click="click">add number</button>

  <div>{{ c }}</div>
  <div v-html="htmlStr"></div>
  <div v-if="count === 0">0</div>
  <div v-else-if="count === 1">1</div>
  <div v-else>2</div>
  <button type="button" @click="count++">add count</button>
  222
  {{ cout2 }}
  <button type="button" @click="cout2++">add cout2</button>
</template>

<script>
let num = ref(11);



let c = 123;
var cc = 44;
let htmlStr = '<div style="display:flex;">123321</div>';
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
