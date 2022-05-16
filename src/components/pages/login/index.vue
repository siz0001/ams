<script setup>
import { ref } from 'vue'

const dialog = ref(false)
</script>

<template>
  <div class="max-w-[1620px] mx-auto min-h-screen p-0 bg-[url('/img/bg.jpg')] bg-no-repeat bg-top overflow-auto after:h-[350px] after:absolute after:top-0 after:left-0 after:right-0 after:bg-[#0076ca] after:-z-10">
    <div class="mt-[60px] after:w-[10px] px-10 after:h-[20px] after:bg-black leading-0">
      <img src="/img/chungpa.png" alt="" />
    </div>
    <div class="max-w-[614px] mx-auto rounded-2xl mt-[29px]">
      <div class="h-[214px] border-t-2 border-r-2 border-l-2 border-white rounded-t-2xl py-[50px] px-[80px] pb-0">
        <div class="text-[36px] text-[#1b53a0] mb-[5px]">CP-AMS</div>
        <div class="flex items-center justify-between">
          <div class="text-[65px] text-white font-bold">Login</div>
          <div class=""><img src="/img/areq.png" alt="" /></div>
        </div>
      </div>
      <div class="px-[80px] pt-[30px] border-2 border-t-0 !border-[#e2e2e2] rounded-b-2xl bg-white">
        <div class="space-y-4">
          <v-text-field color="primary" label="CODE" variant="outlined" hide-details="auto" shaped></v-text-field>
          <v-text-field color="primary" label="ID" variant="outlined" hide-details="auto" shaped></v-text-field>
          <v-text-field color="primary" type="password" label="PW" variant="outlined" hide-details="auto" shaped></v-text-field>
        </div>
        <div class="flex justify-center">
          <v-checkbox label="정보 저장" hide-details="auto" color="primary"></v-checkbox>
        </div>
        <div class="text-center">
          <v-btn width="300" color="primary" size="x-large" rounded="pill" @click="$router.push('/management/user/institutional')">로그인</v-btn>
        </div>
        <div class="text-center my-12">
          <a class="text-[#222222] text-base cursor-pointer" @click="dialog = true">아이디/패스워드 찾기</a>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog">
      <div class="min-w-[892px] drop-shadow-2xl">
        <div class="bg-white p-[60px] relative">
          <div class="text-4xl font-black text-center">아이디 / 패스워드 찾기</div>
          <a class="absolute right-5 top-5 cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon color="black">mdi-close</v-icon>
          </a>
          <div class="flex gap-8 mt-10">
            <div class="space-y-[10px] flex-1">
              <div class="bg-[#0076ca] rounded-b-md h-[130px] leading-[130px] text-center text-white font-bold text-xl">아이디</div>
              <v-text-field color="primary" label="기관코드" variant="outlined" hide-details="auto" shaped></v-text-field>
              <v-text-field color="primary" label="사용자명" variant="outlined" hide-details="auto" shaped></v-text-field>
              <v-text-field color="primary" label="휴대전화 번호" variant="outlined" hide-details="auto" shaped></v-text-field>
              <div class="text-right font-bold">‘-’ 를 빼고 숫자만 입력해주세요 (예:01012341234)</div>
              <v-btn width="100%" color="#1b53a0" variant="outlined" size="x-large" class="flex-1 font-bold !mt-[114px] !h-[84px]">아이디 찾기</v-btn>
            </div>
            <div class="space-y-[10px] flex-1">
              <div class="bg-[#1b53a0] rounded-b-md h-[130px] leading-[130px] text-center text-white font-bold text-xl">패스워드</div>
              <v-text-field color="primary" label="기관코드" variant="outlined" hide-details="auto" shaped></v-text-field>
              <v-text-field color="primary" label="아이디" variant="outlined" hide-details="auto" shaped></v-text-field>
              <v-text-field color="primary" label="사용자명" variant="outlined" hide-details="auto" shaped></v-text-field>
              <v-text-field color="primary" label="휴대전화 번호" variant="outlined" hide-details="auto" shaped></v-text-field>
              <div class="text-right font-bold">‘-’ 를 빼고 숫자만 입력해주세요 (예:01012341234)</div>
              <v-btn width="100%" color="#1b53a0" variant="outlined" size="x-large" class="flex-1 font-bold !mt-12 !h-[84px]">비밀번호 찾기</v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
