<script setup>
import Layout from '@/components/layout/index.vue'

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    agency: '청파초등학교',
    ip: '127.0.0.1',
    group: 'sa',
    measuringCode: '코드',
    measuringName: '-',
    display: '무',
    sterilizer: '-',
    receptionAt: '22.03.22',
    editedAd: '22.03.22',
    createAt: '22.03.22'
  })
}
</script>

<template>
  <Layout title="센서 기간별 현황">
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
        <v-btn flat color="white" class="border border-[#bfbfbf]">등록</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">수정</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">삭제</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[1280px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>기관명</th>
            <th>아이피</th>
            <th>그룹명</th>
            <th>측정기코드</th>
            <th>측정기명</th>
            <th>표시유무</th>
            <th>공기살균정화기</th>
            <th>수신일시</th>
            <th>가동시작일</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.agency }}</td>
            <td class="text-center">{{ item.ip }}</td>
            <td class="text-center">{{ item.group }}</td>
            <td class="text-center">{{ item.measuringCode }}</td>
            <td class="text-center">{{ item.measuringName }}</td>
            <td class="text-center">{{ item.display }}</td>
            <td class="text-center">{{ item.sterilizer }}</td>
            <td class="text-center">{{ item.receptionAt }}</td>
            <td class="text-center">{{ item.editedAd }}</td>
            <td class="text-center">{{ item.createAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="10"></v-pagination>
  </Layout>
</template>
