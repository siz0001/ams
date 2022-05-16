<script setup>
import Layout from '@/components/layout/index.vue'

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    asensor: '청파초등학교',
    measuring: '1234',
    sensor: 'sa',
    notification: '알림내용',
    ip: '127.0.0.1',
    disability: '장애',
    createAt: '22.03.22',
    updateAt: '22.03.22',
    registrant: '홍길동/홍길동',
    status: '발생'
  })
}
</script>

<template>
  <Layout title="실시간 장애 현황">
    <div class="mt-[50px] px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="측정기명" placeholder="교실1" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="primary">조회<v-icon class="ml-1">mdi-magnify</v-icon> </v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">초기화</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[980px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>기관</th>
            <th>측정기</th>
            <th>센서</th>
            <th>알림내용</th>
            <th>IP</th>
            <th>장애등급</th>
            <th>발생일시</th>
            <th>해제일시</th>
            <th>등록자/해제자</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.asensor }}</td>
            <td class="text-center">{{ item.measuring }}</td>
            <td class="text-center">{{ item.sensor }}</td>
            <td class="text-center">{{ item.notification }}</td>
            <td class="text-center">{{ item.ip }}</td>
            <td class="text-center">{{ item.disability }}</td>
            <td class="text-center">{{ item.createAt }}</td>
            <td class="text-center">{{ item.updateAt }}</td>
            <td class="text-center">{{ item.registrant }}</td>
            <td class="text-center">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
  </Layout>
</template>
