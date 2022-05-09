<script setup>
import Layout from '@/components/layout/index.vue'

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
  </Layout>
</template>
