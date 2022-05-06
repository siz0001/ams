<script setup>
import menus from '@/data/menu.js'
console.log(menus)
</script>
<template>
  <div class="mt-5">
    <router-link to="/"
      ><img src="/img/areq.png" alt="" class="w-[150px] mx-auto"
    /></router-link>
    <div class="mt-6 px-5">
      <div
        class="flex items-center justify-between text-white border-b border-solid !border-[#268ad2]"
        v-for="item in menus"
        :key="item.href"
      >
        <router-link
          :to="item.href"
          tag="a"
          class="flex flex-1 items-center font-bold h-[60px] pl-3"
        >
          <v-icon class="mr-4" size="18">{{ item.icon }}</v-icon
          >{{ item.title }}
        </router-link>
        <a class="px-3">
          <v-icon size="16">mdi-plus</v-icon>
        </a>
      </div>
    </div>
  </div>
</template>
