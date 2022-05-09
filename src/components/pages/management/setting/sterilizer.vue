<script setup>
import Layout from '@/components/layout/index.vue'

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    agency: '청파초등학교',
    measuring: '교실1',
    sterilizer: `A${String(index).padStart(3, '0')}`,
    everyone: 'ON',
    operation: '자동',
    fan: 5,
    forced: 'ON',
    sterilization: 'ON'
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
        <v-btn flat color="white" class="border border-[#bfbfbf]">관리</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[980px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>기관명</th>
            <th>측정기명</th>
            <th>공기살균정화기코드</th>
            <th>전원</th>
            <th>동작모드</th>
            <th>팬속도</th>
            <th>강제송풍</th>
            <th>살균</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.agency }}</td>
            <td class="text-center">{{ item.measuring }}</td>
            <td class="text-center">{{ item.sterilizer }}</td>
            <td class="text-center">{{ item.everyone }}</td>
            <td class="text-center">{{ item.operation }}</td>
            <td class="text-center">{{ item.fan }}</td>
            <td class="text-center">{{ item.forced }}</td>
            <td class="text-center">{{ item.sterilization }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination>
  </Layout>
</template>
