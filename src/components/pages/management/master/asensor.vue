<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    organization: '-',
    sensor: '-',
    sensorEn: '-',
    use: '유',
    good: 60,
    usually: 30,
    bad: 40,
    veryBad: 50
  })
}
</script>

<template>
  <Layout title="기관 마스터 센서 관리">
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
        <v-btn flat color="white" class="border border-[#bfbfbf]"
          >초기화
        </v-btn>
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
            <th>기관명</th>
            <th>센서명</th>
            <th>센서명(영문)</th>
            <th>사용유무</th>
            <th>좋음</th>
            <th>보통</th>
            <th>나쁨</th>
            <th>매우나쁨</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.organization }}</td>
            <td class="text-center">{{ item.sensor }}</td>
            <td class="text-center">{{ item.sensorEn }}</td>
            <td class="text-center">{{ item.use }}</td>
            <td class="text-center">{{ item.good }}</td>
            <td class="text-center">{{ item.usually }}</td>
            <td class="text-center">{{ item.bad }}</td>
            <td class="text-center">{{ item.veryBad }}</td>
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
          <div class="text-xl text-white font-bold">기관 센서 등록</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <table class="table-basic">
            <thead>
              <tr>
                <th class="w-[74px]">선택</th>
                <th>센서명</th>
                <th>사용유무</th>
                <th>좋음</th>
                <th>보통</th>
                <th>나쁨</th>
                <th>아주나쁨</th>
                <th>추가</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in datas.slice(0, 5)" :key="item.id">
                <td class="text-center">
                  <input type="checkbox" class="form-checkbox" />
                </td>
                <td class="text-center">
                  <select
                    class="appearance-none w-full h-9 border border-[#c8c8c8] rounded-sm px-[10px] bg-select-bg bg-search bg-13"
                  >
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
                <td class="text-center">
                  <select
                    class="appearance-none w-full h-9 border border-[#c8c8c8] rounded-sm px-[10px] bg-select-bg bg-search bg-13"
                  >
                    <option value="1">유</option>
                    <option value="2">무</option>
                  </select>
                </td>
                <td class="text-center">
                  <input
                    type="text"
                    class="border border-[#c8c8c8] rounded-sm text-center w-[70px] h-9"
                    :value="item.good"
                  />
                </td>
                <td class="text-center">
                  <input
                    type="text"
                    class="border border-[#c8c8c8] rounded-sm text-center w-[70px] h-9"
                    :value="item.usually"
                  />
                </td>
                <td class="text-center">
                  <input
                    type="text"
                    class="border border-[#c8c8c8] rounded-sm text-center w-[70px] h-9"
                    :value="item.bad"
                  />
                </td>
                <td class="text-center">
                  <input
                    type="text"
                    class="border border-[#c8c8c8] rounded-sm text-center w-[70px] h-9"
                    :value="item.veryBad"
                  />
                </td>
                <td class="text-center">
                  <a class="inline-block cursor-pointer p-2">
                    <v-icon>mdi-plus</v-icon>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
  </Layout>
</template>
