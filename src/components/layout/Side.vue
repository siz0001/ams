<script setup>
import menus from '@/data/menu.js'
import cn from 'classnames'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function activeClass({ href, key }) {
  return cn(
    { 'bg-[#1b53a0] border border-white': route.path.includes(href || key) },
    'flex flex-1 items-center font-bold h-[60px] pl-3'
  )
}

onMounted(() => {
  const btns = document.querySelectorAll('.toggleBtn')
  for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click', function () {
      const btn = btns[index].className.includes('active')
      btns[index].classList.toggle('active')
      btns[index].children[0].className = cn(
        btn ? 'mdi-plus' : 'mdi-minus',
        'mdi v-icon notranslate v-theme--myCustomLightTheme'
      )
      this.parentElement.parentElement.querySelector('.childMenu').className =
        cn(btn ? 'hidden' : 'block', 'bg-white mb-[10px] childMenu')
    })
  }
})
</script>
<template>
  <div class="mt-5">
    <router-link to="/"
      ><img src="/img/areq.png" alt="" class="w-[150px] mx-auto"
    /></router-link>
    <div class="mt-6 px-5">
      <div
        class="text-white border-b border-solid !border-[#268ad2] relative"
        v-for="item in menus"
        :key="item.key"
      >
        <div
          class="flex items-center justify-between"
          :class="activeClass(item)"
        >
          <router-link
            v-if="item.children === undefined"
            tag="a"
            class="flex-1"
            :to="item.href"
          >
            <v-icon class="mr-4" size="18">{{ item.icon }}</v-icon>
            {{ item.title }}
          </router-link>
          <span v-else class="flex-1">
            <v-icon class="mr-4" size="18">{{ item.icon }}</v-icon>
            {{ item.title }}
          </span>
          <a class="p-3 cursor-pointer toggleBtn" v-if="item.children">
            <v-icon size="16">mdi-plus</v-icon>
          </a>
        </div>
        <div class="bg-white mb-[10px] hidden childMenu">
          <div
            class="flex items-center border-b !border-[#3b92e5] px-5 py-4 last:border-0"
            v-for="children of item.children"
            :key="children.key"
          >
            <div class="flex-none text-base w-[90px] font-bold text-[#3b92e5]">
              {{ children.title }}
            </div>
            <div class="space-y-1">
              <div v-for="inner of children.children">
                <router-link
                  :to="`/${item.key}/${children.key}${inner.href}`"
                  class="router-link"
                  >{{ inner.title }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
