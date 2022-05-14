<script setup>
import Layout from '@/components/layout/index.vue'

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    createAt: '22.03.22'
  })
}
</script>

<template>
  <Layout title="센서 평균 현황">
    <div
      class="mt-[50px] px-10 py-6 flex items-center justify-between bg-[#f3f9ff] space-x-2"
    >
      <div class="space-y-1 flex-1">
        <div class="flex flex-1 items-center space-x-2">
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
          <input type="date" class="form-input flex-none" />
          <input type="date" class="form-input flex-none" />
          <div class="flex space-x-1">
            <v-btn flat color="white" class="border !h-[40px] border-[#bfbfbf]"
              >1일</v-btn
            >
            <v-btn flat color="white" class="border !h-[40px] border-[#bfbfbf]"
              >주간</v-btn
            >
            <v-btn flat color="white" class="border !h-[40px] border-[#bfbfbf]"
              >월간</v-btn
            >
          </div>
        </div>
        <div>
          <div class="flex space-x-2">
            <select class="form-select">
              <option value="">선택항목</option>
            </select>
            <div class="flex space-x-1 w-[200px] flex-none">
              <v-btn
                flat
                color="white"
                class="flex-1 border !h-[40px] border-[#bfbfbf]"
              >
                그래프
              </v-btn>
              <v-btn
                flat
                color="white"
                class="flex-1 border !h-[40px] border-[#bfbfbf] !bg-[#8590c8] text-white"
              >
                목록
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[110px] flex-none">
        <v-btn
          color="#2359c4"
          class="text-white !h-[84px] text-base"
          width="100%"
          >조회</v-btn
        >
      </div>
    </div>
    <div
      class="flex items-center justify-center space-x-[15px] pt-[50px] pb-[30px]"
    >
      <div class="flex items-center">
        <input type="checkbox" class="form-checkbox" id="check1" />
        <label for="check1" class="text-base ml-2 cursor-pointer">현재</label>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="form-checkbox" id="check2" />
        <label for="check2" class="text-base ml-2 cursor-pointer">최대</label>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="form-checkbox" id="check3" />
        <label for="check3" class="text-base ml-2 cursor-pointer">평균</label>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="form-checkbox" id="check4" />
        <label for="check4" class="text-base ml-2 cursor-pointer">취소</label>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic min-w-[1440px]">
        <thead>
          <tr>
            <th>기준일자</th>
            <th>측정기</th>
            <th>그룹</th>
            <th>값기준</th>
            <th>CO2</th>
            <th>PM10</th>
            <th>PM2.5</th>
            <th>PM0.1</th>
            <th>TEMP</th>
            <th>RH</th>
            <th>HCHO</th>
            <th>CO</th>
            <th>TVOC</th>
            <th>공기살균정화기</th>
            <th>수신일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">{{ item.createAt }}</td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="10"></v-pagination>
  </Layout>
</template>
