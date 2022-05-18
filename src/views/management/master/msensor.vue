<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)
const confirm = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    sensor: '-',
    sensorEn: '-',
    model: '모델명',
    code: '코드',
    note: '비고'
  })
}
</script>

<template>
  <Layout title="마스터 센서 관리">
    <div class="mt-[50px] px-10 flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1 justify-between bg-[#f3f9ff] py-6">
      <div class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="primary">조회<v-icon>mdi-magnify</v-icon> </v-btn>
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
            <th>센서명</th>
            <th>센서명(영문)</th>
            <th>모델명</th>
            <th>코드</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.sensor }}</td>
            <td class="text-center">{{ item.sensorEn }}</td>
            <td class="text-center">{{ item.model }}</td>
            <td class="text-center">{{ item.code }}</td>
            <td class="text-center">{{ item.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
    <v-dialog v-model="dialog">
      <div class="min-w-[950px]">
        <div class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]">
          <div class="text-xl text-white font-bold">마스터 센서 관리</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <div class="space-y-[10px]">
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="센서명" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
              <v-text-field color="primary" label="센서명(영문)" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
            </div>
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="모델명" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
              <v-text-field color="primary" label="코드" variant="outlined" hide-details="auto" class="flex-1" type="password"></v-text-field>
            </div>
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="비고" variant="outlined" hide-details="auto" class="w-[calc(50%-5px)] flex-none" type="password"></v-text-field>
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
