<script setup>
import Layout from '@/components/layout/index.vue'

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    code: 'EDU12345A',
    asensor: '청파초등학교',
    user: 'sa',
    pass: '1234',
    host: '127.0.0.1',
    database: 'TEST_DB',
    port: '5440',
    note: '비고'
  })
}
</script>

<template>
  <Layout title="Local 서버 관리">
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
        <v-btn flat color="primary">조회<v-icon>mdi-magnify</v-icon> </v-btn>
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
            <th>기관코드</th>
            <th>기관명</th>
            <th>사용자</th>
            <th>암호</th>
            <th>호스트</th>
            <th>테이터베이스</th>
            <th>포트</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.code }}</td>
            <td class="text-center">{{ item.asensor }}</td>
            <td class="text-center">{{ item.user }}</td>
            <td class="text-center">{{ item.pass }}</td>
            <td class="text-center">{{ item.host }}</td>
            <td class="text-center">{{ item.database }}</td>
            <td class="text-center">{{ item.port }}</td>
            <td class="text-center">{{ item.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
  </Layout>
</template>
