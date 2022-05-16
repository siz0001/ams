<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)
const confirm = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    agency: '기관명',
    userId: 'abc',
    name: '홍길동',
    email: 'abc@naver.com',
    phone: '000-0000-0000',
    authority: index % 2 ? '기관사용자' : 'SVR사용자',
    sms: index % 2 ? '전송' : '미전송',
    language: index % 2 ? 'English' : '한국어'
  })
}
</script>

<template>
  <Layout title="사용자관리">
    <div class="mt-[50px] px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="primary">조회<v-icon class="ml-1">mdi-magnify</v-icon> </v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">초기화</v-btn>
      </div>
      <div class="space-x-1">
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="dialog = true">등록</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="dialog = true">수정</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="confirm = true">삭제</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[980px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>기관명</th>
            <th>아이디</th>
            <th>사용자명</th>
            <th>메일주소</th>
            <th>전화번호</th>
            <th>권한등급</th>
            <th>SMS전송</th>
            <th>기본언어</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.agency }}</td>
            <td class="text-center">{{ item.userId }}</td>
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">{{ item.email }}</td>
            <td class="text-center">{{ item.phone }}</td>
            <td class="text-center">{{ item.authority }}</td>
            <td class="text-center">{{ item.sms }}</td>
            <td class="text-center">{{ item.language }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
    <v-dialog v-model="dialog">
      <div class="min-w-[950px]">
        <div class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]">
          <div class="text-xl text-white font-bold">사용자 관리</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <div class="space-y-[10px]">
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="사용자명" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
              <v-text-field color="primary" label="아이디" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
            </div>
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="전화번호" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
              <v-text-field color="primary" label="메일주소" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
            </div>
            <div class="flex items-center space-x-[10px]">
              <select class="form-select flex-1 !h-[56px] !border-[#909090]">
                <option value="">권한등급</option>
              </select>
              <select class="form-select flex-1 !h-[56px] !border-[#909090]">
                <option value="">SMS 알림</option>
              </select>
            </div>
            <div class="flex items-center">
              <select class="form-select !w-[calc(50%-5px)] !h-[56px] !border-[#909090]">
                <option value="">기본언어</option>
              </select>
            </div>
          </div>
          <div class="mt-[30px] flex space-x-[10px]">
            <v-btn color="#1b53a0" variant="outlined" size="x-large" class="flex-1 font-bold">저장</v-btn>
            <v-btn color="#dedede" variant="outlined" size="x-large" class="text-black flex-1 font-bold" @click="dialog = false">취소</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="confirm">
      <div class="w-[466px]">
        <div class="border-[5px] !border-[#1b53a0] p-8 bg-white">
          <div class="text-xl text-center">삭제하겠습니까?</div>
          <div class="flex gap-2 justify-center mt-8">
            <v-btn color="#1b53a0" size="large" class="text-white">확인</v-btn>
            <v-btn size="large" @click="confirm = false">취소</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </Layout>
</template>
