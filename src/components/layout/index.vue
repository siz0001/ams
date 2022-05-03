<script setup>
import Side from '@/components/layout/Side.vue'

const { title } = defineProps({
  title: String
})
</script>

<template>
  <div>
    <div
      class="fixed top-0 bottom-0 left-0 w-[280px] flex-none h-screen bg-[#0076ca] overflow-auto"
    >
      <Side />
    </div>
    <div class="ml-[280px] py-6 px-[50px] flex-1">
      <div class="text-3xl flex items-center">
        청파초등학교<span class="w-2 h-2 mx-2 bg-[#1b53a0]"></span>{{ title }}
      </div>
      <div class="bg-[#666666] h-[1px] mt-6"></div>
      <slot />
    </div>
  </div>
</template>
