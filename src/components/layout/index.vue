<script setup>
import Side from '@/components/layout/Side.vue'

const { title } = defineProps({
  title: String
})
</script>

<template>
  <div class="min-h-full flex">
    <div
      class="min-h-full w-[280px] flex-none bg-[#0076ca] overflow-auto hidden xl:block"
    >
      <Side />
    </div>
    <div class="w-[calc(100%-280px)] py-6 flex-1 !px-4 sm:!px-8">
      <div class="tex-base lg:text-3xl flex items-center">
        청파초등학교<span class="w-2 h-2 mx-2 bg-[#1b53a0]"></span>{{ title }}
      </div>
      <div class="bg-[#666666] h-[1px] mt-6"></div>
      <slot />
    </div>
  </div>
</template>
