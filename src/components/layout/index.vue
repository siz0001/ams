<script setup>
import { ref } from 'vue'
import Side from '@/components/layout/Side.vue'

const dialog = ref(false)

const { title } = defineProps({
  title: String
})

function fullscreen() {
  if (!document.fullscreenElement) {
    document.querySelector('#app').requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>

<template>
  <div class="min-h-full flex">
    <div
      class="min-h-full w-[280px] flex-none bg-[#0076ca] overflow-auto hidden xl:block"
    >
      <Side />
    </div>
    <div class="bg-white w-[calc(100%-280px)] py-6 flex-1 !px-4 sm:!px-8">
      <div class="flex items-center justify-between">
        <div class="tex-base lg:text-3xl">
          청파초등학교<span class="w-2 h-2 mx-2 bg-[#1b53a0]"></span>{{ title }}
        </div>
        <div class="flex items-center">
          <!-- <v-btn color="indigo" icon="mdi-fullscreen"></v-btn>
          <v-btn color="primary" icon="mdi-account-circle-outline"></v-btn> -->
          <a class="px-2 cursor-pointer" @click="fullscreen">
            <v-icon>mdi-fullscreen</v-icon>
          </a>
          <a class="px-2 cursor-pointer" @click="dialog = true">
            <v-icon>mdi-account-circle-outline</v-icon>
          </a>
        </div>
      </div>
      <div class="bg-[#666666] h-[1px] mt-6"></div>
      <slot />
    </div>
    <v-dialog v-model="dialog">
      <div class="min-w-[950px]">
        <div
          class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]"
        >
          <div class="text-xl text-white font-bold">정보확인</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[45px]">
          <div class="space-y-[10px]">
            <div class="flex">
              <v-text-field
                color="primary"
                label="기관명"
                variant="outlined"
                hide-details="auto"
                class="w-1/2 flex-none"
              ></v-text-field>
            </div>
            <div class="flex">
              <v-text-field
                color="primary"
                label="기관코드"
                variant="outlined"
                hide-details="auto"
                class="w-1/2 flex-none"
              ></v-text-field>
            </div>
            <div class="flex">
              <v-text-field
                color="primary"
                label="아이디"
                variant="outlined"
                hide-details="auto"
                class="w-1/2 flex-none"
              ></v-text-field>
            </div>
            <div class="flex items-center space-x-1">
              <v-text-field
                color="primary"
                label="비밀번호"
                variant="outlined"
                hide-details="auto"
                type="password"
              ></v-text-field>
              <v-btn color="#1b53a0" size="large" class="text-white"
                >비밀번호 변경</v-btn
              >
            </div>
            <div class="flex space-x-1">
              <v-text-field
                color="primary"
                label="이름"
                variant="outlined"
                hide-details="auto"
                type="password"
              ></v-text-field>
              <v-text-field
                color="primary"
                label="휴대전화"
                variant="outlined"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="flex items-center">
              <v-text-field
                color="primary"
                label="이메일 주소"
                variant="outlined"
                hide-details="auto"
              ></v-text-field>
              <span class="px-2">@</span>
              <v-select
                label="gmail.com"
                hide-details="auto"
                class="min-w-[200px] flex-none"
              ></v-select>
              <v-text-field
                color="primary"
                label="직접입력"
                variant="outlined"
                hide-details="auto"
                class="ml-1"
              ></v-text-field>
            </div>
            <div class="flex">
              <v-select
                label="언어선택"
                hide-details="auto"
                class="w-1/2 flex-none"
              ></v-select>
            </div>
            <div class="pt-[20px]">
              <v-btn
                width="100%"
                color="#1b53a0"
                variant="outlined"
                size="x-large"
                >저장</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
