<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)
const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    ip: '127.0.0.1',
    measuringCode: '001',
    measuringName: '교실1',
    groupId: '12345',
    parentGroup: '1학년',
    childGroup: '2학년',
    createAt: '2020-01-01 00:00:00',
    note: '-'
  })
}
</script>

<template>
  <Layout title="그룹관리">
    <div
      class="mt-[50px] px-10 flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1 justify-between bg-[#f3f9ff] py-6"
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
          variant="outlined"
          hide-details="auto"
          shaped
        ></v-text-field>
        <v-btn flat color="primary">조회<v-icon>mdi-magnify</v-icon> </v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]"
          >초기화
        </v-btn>
      </div>
      <div class="space-x-1">
        <v-btn flat color="white" class="border border-[#bfbfbf]">등록</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">수정</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">삭제</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[980px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>Group ID</th>
            <th>상위 그룹</th>
            <th>하위 그룹</th>
            <th>생성일자</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id" @click="dialog = true">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.groupId }}</td>
            <td class="text-center">{{ item.parentGroup }}</td>
            <td class="text-center">{{ item.childGroup }}</td>
            <td class="text-center">{{ item.createAt }}</td>
            <td class="text-center">{{ item.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
    <v-dialog v-model="dialog">
      <div class="min-w-[600px]">
        <div
          class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]"
        >
          <div class="text-xl text-white font-bold">그룹 관리</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <div class="bg-[#f3f9ff] px-5 flex items-center space-x-2 h-[88px]">
            <v-text-field
              color="primary"
              label="상위그룹"
              variant="outlined"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              color="primary"
              label="하위그룹"
              variant="outlined"
              hide-details="auto"
            ></v-text-field>
          </div>
          <table class="table-basic mt-8">
            <thead>
              <tr>
                <th class="w-[74px]">선택</th>
                <th>아이피</th>
                <th>측정기코드</th>
                <th>측정기명</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in datas.slice(0, 5)" :key="item.id">
                <td class="text-center">
                  <input type="checkbox" class="form-checkbox" />
                </td>
                <td class="text-center">{{ item.ip }}</td>
                <td class="text-center">{{ item.measuringCode }}</td>
                <td class="text-center">{{ item.measuringName }}</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-[30px] flex space-x-2">
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
  </Layout>
</template>
