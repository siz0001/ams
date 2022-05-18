<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)
const confirm = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    agency: '청파초등학교',
    IP: '127.0.0.1',
    measuring: '측정기명',
    co2: '코드',
    pm10: '코드',
    pm25: '코드',
    pm01: '코드',
    temp: '코드',
    rh: '코드',
    hcho: '코드',
    co: '코드',
    tvoc: '코드',
    air: '코드'
  })
}
</script>

<template>
  <Layout title="측정기 센서 관리">
    <div class="mt-[50px] px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="측정기명" placeholder="교실1" variant="outlined" hide-details="auto" shaped></v-text-field>
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
      <table class="table-basic mt-8 min-w-[1280px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>기관명</th>
            <th>아이피</th>
            <th>측정기명</th>
            <th>CO2</th>
            <th>PM10</th>
            <th>PM25</th>
            <th>PM01</th>
            <th>TEMP</th>
            <th>RH</th>
            <th>HCHO</th>
            <th>CO</th>
            <th>TVOC</th>
            <th>공기살균정화기</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.agency }}</td>
            <td class="text-center">{{ item.IP }}</td>
            <td class="text-center">{{ item.measuring }}</td>
            <td class="text-center">{{ item.co2 }}</td>
            <td class="text-center">{{ item.pm10 }}</td>
            <td class="text-center">{{ item.pm25 }}</td>
            <td class="text-center">{{ item.pm01 }}</td>
            <td class="text-center">{{ item.temp }}</td>
            <td class="text-center">{{ item.rh }}</td>
            <td class="text-center">{{ item.hcho }}</td>
            <td class="text-center">{{ item.co }}</td>
            <td class="text-center">{{ item.tvoc }}</td>
            <td class="text-center">{{ item.air }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
    <v-dialog v-model="dialog">
      <div class="min-w-[950px]">
        <div class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]">
          <div class="text-xl text-white font-bold">측정기 센서 등록</div>
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
