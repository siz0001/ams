<script setup>
import Layout from '@/components/layout/index.vue'

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    agency: '청파초등학교',
    userId: 'admin',
    ip: '192.168.0.1',
    loginTime: '2020-01-01 00:00:00',
    logoutTime: '2020-01-01 00:00:00'
  })
}
</script>

<template>
  <Layout title="로그인 이력 현황">
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
          label="ID"
          variant="outlined"
          hide-details="auto"
          shaped
        ></v-text-field>
        <v-btn flat color="black">조회<v-icon>mdi-magnify</v-icon> </v-btn>
      </div>
      <div class="space-x-1">
        <v-btn flat color="white" class="border border-[#bfbfbf]">등록</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">수정</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">삭제</v-btn>
      </div>
    </div>
    <table class="table-basic mt-8">
      <thead>
        <tr>
          <th class="w-[74px]">선택</th>
          <th>기관</th>
          <th>로그인ID</th>
          <th>IP</th>
          <th>로그인 일시</th>
          <th>로그아웃 일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datas" :key="item.id">
          <td class="text-center">
            <input type="checkbox" class="form-checkbox" />
          </td>
          <td class="text-center">{{ item.agency }}</td>
          <td class="text-center">{{ item.userId }}</td>
          <td class="text-center">{{ item.ip }}</td>
          <td class="text-center">{{ item.loginTime }}</td>
          <td class="text-center">{{ item.logoutTime }}</td>
        </tr>
      </tbody>
    </table>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
  </Layout>
</template>
