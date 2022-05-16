<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)

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
  <Layout title="공기살균정화기 관리">
    <div class="mt-[50px] px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="측정기명" placeholder="교실1" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="primary">조회<v-icon class="ml-1">mdi-magnify</v-icon> </v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">초기화</v-btn>
      </div>
      <div class="space-x-1">
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="dialog = true">관리</v-btn>
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
    <v-pagination class="mt-8" rounded="circle" :length="6"></v-pagination
    ><v-dialog v-model="dialog">
      <div class="min-w-[960px]">
        <div class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]">
          <div class="text-xl text-white font-bold">공기살균정화기 관리</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <table class="table-basic">
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
              <tr v-for="item in datas.slice(0, 5)" :key="item.id">
                <td class="text-center">
                  <input type="checkbox" class="form-checkbox" />
                </td>
                <td class="text-center">
                  <input type="text" class="border border-[#c8c8c8] rounded-sm px-2 w-full h-9" :value="item.good" />
                </td>
                <td class="text-center">
                  <input type="text" class="border border-[#c8c8c8] rounded-sm px-2 w-full h-9" :value="item.good" />
                </td>
                <td class="text-center">
                  <input type="text" class="border border-[#c8c8c8] rounded-sm px-2 w-full h-9" :value="item.good" />
                </td>
                <td class="text-center">
                  <select class="form-select !h-9">
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
                <td class="text-center">
                  <select class="form-select !h-9">
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
                <td class="text-center">
                  <select class="form-select !h-9">
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
                <td class="text-center">
                  <select class="form-select !h-9">
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
                <td class="text-center">
                  <select class="form-select !h-9">
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="mt-[30px] flex space-x-[10px]">
            <v-btn color="#1b53a0" variant="outlined" size="x-large" class="flex-1 font-bold"> 저장 </v-btn>
            <v-btn color="#dedede" variant="outlined" size="x-large" class="text-black flex-1 font-bold" @click="dialog = false"> 취소 </v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </Layout>
</template>
