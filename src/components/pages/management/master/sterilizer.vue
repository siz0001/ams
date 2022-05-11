<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    code: 'A001',
    model: 'model name',
    specification: '사양',
    note: '비고'
  })
}
</script>

<template>
  <Layout title="마스터공기살균정화기 관리">
    <div
      class="mt-[50px] px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]"
    >
      <div class="flex items-center space-x-2">
        <v-text-field
          class="w-[220px] bg-white"
          color="primary"
          density="compact"
          label="기관"
          placeholder="청파이엠티"
          variant="outlined"
          hide-details="auto"
          shaped
        ></v-text-field>
        <v-text-field
          class="w-[220px] bg-white"
          color="primary"
          density="compact"
          label="측정기명"
          placeholder="교실1"
          variant="outlined"
          hide-details="auto"
          shaped
        ></v-text-field>
        <v-btn flat color="primary"
          >조회<v-icon class="ml-1">mdi-magnify</v-icon>
        </v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">초기화</v-btn>
      </div>
      <div class="space-x-1">
        <v-btn
          flat
          color="white"
          class="border border-[#bfbfbf]"
          @click="dialog = true"
          >등록</v-btn
        >
        <v-btn flat color="white" class="border border-[#bfbfbf]">수정</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">삭제</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[980px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>공기살균정화기코드</th>
            <th>모델명</th>
            <th>사양</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.code }}</td>
            <td class="text-center">{{ item.model }}</td>
            <td class="text-center">{{ item.specification }}</td>
            <td class="text-center">{{ item.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-dialog v-model="dialog">
      <div class="min-w-[950px]">
        <div
          class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]"
        >
          <div class="text-xl text-white font-bold">
            마스터 공기살균정화기 등록
          </div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <div class="space-y-[10px]">
            <div class="flex items-center space-x-[10px]">
              <v-text-field
                color="primary"
                label="코드"
                variant="outlined"
                hide-details="auto"
                class="flex-1"
              ></v-text-field>
              <v-text-field
                color="primary"
                label="모델명"
                variant="outlined"
                hide-details="auto"
                class="flex-1"
              ></v-text-field>
            </div>
            <div class="flex items-center">
              <v-text-field
                color="primary"
                label="사양"
                variant="outlined"
                hide-details="auto"
                class="flex-1"
              ></v-text-field>
            </div>
            <div class="flex items-center">
              <v-text-field
                color="primary"
                label="비고"
                variant="outlined"
                hide-details="auto"
                class="flex-1"
              ></v-text-field>
            </div>
          </div>
          <div class="mt-[30px] flex space-x-[10px]">
            <v-btn
              color="#1b53a0"
              variant="outlined"
              size="x-large"
              class="flex-1 font-bold"
            >
              저장
            </v-btn>
            <v-btn
              color="#dedede"
              variant="outlined"
              size="x-large"
              class="text-black flex-1 font-bold"
              @click="dialog = false"
            >
              취소
            </v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
  </Layout>
</template>
