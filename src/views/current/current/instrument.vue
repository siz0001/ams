<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'
import cn from 'classnames'

const list = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    createAt: '22.03.22'
  })
}
const Measure = [
  {
    id: 0,
    title: 'PM10',
    len: 5,
    src: 'icon_pm10.png',
    value: 90,
    sub: 'ug/㎥',
    sup: 3,
    color: '#2359c4',
    min: 0,
    max: 500
  },
  {
    id: 1,
    title: 'PM2.5',
    len: 3,
    src: 'icon_pm2.5.png',
    value: 100,
    sub: 'ug/㎥',
    sup: 3,
    color: '#2359c4',
    min: 0,
    max: 500
  },
  {
    id: 2,
    title: 'PM1.0',
    len: 5,
    src: 'icon_pm1.0.png',
    value: 120,
    sub: 'ug/㎥',
    sup: 3,
    color: '#01b56e',
    min: 0,
    max: 500
  },
  {
    id: 3,
    title: 'CO2',
    len: 5,
    src: 'icon_co2.png',
    value: 350,
    sub: 'ppm',
    color: '#01b56e',
    min: 0,
    max: 5000
  },
  {
    id: 4,
    title: 'TEMP',
    len: 5,
    src: 'icon_temp.png',
    color: '#2359c4',
    value: 16,
    sub: '℃', //°C
    min: -20,
    max: 80
  },
  {
    id: 5,
    title: 'RH',
    len: 5,
    src: 'icon_rh.png',
    value: 10,
    sub: '%', //°C
    color: '#2359c4',
    min: 0,
    max: 100
  },
  {
    id: 6,
    title: 'HCHO',
    len: 5,
    src: 'icon_hcho.png',
    value: 2,
    sub: 'ppm', //°C
    color: '#ffb43e',
    min: 0,
    max: 5
  },
  {
    id: 7,
    title: 'CO',
    len: 5,
    src: 'icon_co.png',
    value: 15,
    sub: 'ppm',
    color: '#da3539',
    min: 0,
    max: 20
  },
  {
    id: 8,
    title: 'TVOC',
    len: 5,
    src: 'icon_tvoc.png',
    value: 10,
    sub: 'ppm',
    color: '#2359c4',
    min: 0,
    max: 50
  },
  {
    id: 9,
    title: '공기살균정화기',
    len: 5,
    btns: [
      {
        title: '동작 ( 4 )',
        color: '#01b56e'
      },
      {
        title: '정지 ( 1 )',
        color: '#ffb43e'
      },
      {
        title: '고장 ( 1 )',
        color: '#da3539'
      }
    ],
    color: '#2359c4'
  }
]
function minusValue(num) {
  if (num < 10) {
    return 5
  } else if (num < 100) {
    return 10
  } else if (num < 1000) {
    return 15
  }
}
</script>

<template>
  <Layout title="측정기 현황">
    <div class="mt-[50px] px-10 py-6 flex items-center justify-between bg-[#f3f9ff] space-x-2">
      <div class="space-y-1 flex-1">
        <div class="flex flex-1 items-center space-x-2">
          <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
          <input type="date" class="form-input flex-none" />
          <input type="date" class="form-input flex-none" />
          <div class="flex space-x-1">
            <v-btn flat color="white" class="border !h-[40px] border-[#bfbfbf]">1일</v-btn>
            <v-btn flat color="white" class="border !h-[40px] border-[#bfbfbf]">주간</v-btn>
            <v-btn flat color="white" class="border !h-[40px] border-[#bfbfbf]">월간</v-btn>
          </div>
        </div>
        <div>
          <div class="flex space-x-2">
            <select class="form-select">
              <option value="">선택항목</option>
            </select>
            <div class="flex space-x-1 w-[200px] flex-none">
              <v-btn flat color="white" :class="cn(list && '!bg-[#8590c8] text-white', 'flex-1 border !h-[40px] border-[#bfbfbf]')" @click="list = true">그래프</v-btn>
              <v-btn flat color="white" :class="cn(!list && '!bg-[#8590c8] text-white', 'flex-1 border !h-[40px] border-[#bfbfbf]')" @click="list = false">목록</v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none space-x-1">
        <v-btn color="#2359c4" class="text-white !h-[84px] text-base" width="110">조회</v-btn>
        <v-btn class="!h-[84px] text-base" width="110">다운로드</v-btn>
      </div>
    </div>
    <div v-if="list" class="grid grid-cols-12 gap-8 mt-[30px]">
      <div class="space-y-[30px] col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
        <div class="border-[3px] border-[#0075c9] p-[30px] -space-x-[1px]">
          <div class="inline-flex items-center text-xl font-bold">
            <v-icon size="20" color="#0098ff" class="mr-1"> mdi-clipboard-text-search-outline </v-icon>
            장치 현황
          </div>
          <div class="space-y-[2px] mt-5">
            <div class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]">
              <div class="font-bold">측정기</div>
              <div class="text-3xl font-system font-black">10</div>
            </div>
            <div class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]">
              <div class="font-bold">센서</div>
              <div class="text-3xl font-system font-black">9</div>
            </div>
            <div class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]">
              <div class="font-bold">지역화센서</div>
              <div class="text-3xl font-system font-black">5</div>
            </div>
            <div class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]">
              <div class="font-bold">공기살균정화기</div>
              <div class="text-3xl font-system font-black">8</div>
            </div>
          </div>
        </div>

        <div class="border-[3px] border-[#0075c9] p-[30px] -space-x-[1px] bg-[#f7fbfe]">
          <div class="inline-flex items-center text-xl font-bold">
            <v-icon size="20" color="#0098ff" class="mr-1">mdi-chart-line</v-icon>
            공기질 지수 그래프
          </div>
          <div class="mt-5">
            <img src="/img/sample_chart2.jpg" alt="" />
          </div>
          <div class="mt-5 bg-[#f7fbfe]">
            <div class="border !border-blue bg-white px-3 py-1 flex leading-[30px]">
              <div class="flex-1 text-[15px] text-[#2359c4] font-bold">오늘 공기지수 평균</div>
              <div class="text-[15px] font-bold">85</div>
              <div class="ml-2 !bg-blue text-white w-[52px] text-center">좋음</div>
            </div>
            <div class="border-b !border-[#ebeff3] px-3 py-1 flex leading-[30px]">
              <div class="flex-1 text-[15px] font-bold">1주전 공기지수 평균</div>
              <div class="text-[15px] font-bold">82</div>
              <div class="ml-2 !bg-blue text-white w-[52px] text-center"></div>
            </div>
            <div class="border-b !border-[#ebeff3] px-3 py-1 flex leading-[30px]">
              <div class="flex-1 text-[15px] font-bold">2주전 공기지수 평균</div>
              <div class="text-[15px] font-bold">85</div>
              <div class="ml-2 !bg-blue text-white w-[52px] text-center"></div>
            </div>
            <div class="border-b !border-[#ebeff3] px-3 py-1 flex leading-[30px]">
              <div class="flex-1 text-[15px] font-bold">3주전 공기지수 평균</div>
              <div class="text-[15px] font-bold">78</div>
              <div class="ml-2 !bg-green text-white w-[52px] text-center"></div>
            </div>
          </div>
          <div class="text-base font-bold mt-[30px]">지수등급</div>
          <div class="flex mt-3">
            <div class="flex-1 !bg-blue text-center text-xs leading-[35px] text-white">좋음</div>
            <div class="flex-1 !bg-green text-center text-xs leading-[35px] text-white">보통</div>
            <div class="flex-1 !bg-yellow text-center text-xs leading-[35px] text-white">나쁨</div>
            <div class="flex-1 !bg-red text-center text-xs leading-[35px] text-white">매우나쁨</div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap border-t-2 border-l-2 !border-[#d7d7d7] col-span-12 md:col-span-6 lg:col-span-8 2xl:col-span-9">
        <div class="border-b-2 border-r-2 !border-[#d7d7d7] min-h-[260px] w-full lg:w-1/2 2xl:w-1/4" v-for="item of Measure" :key="item.key">
          <div class="flex items-center justify-between px-7 h-[72px] border-b-2 border-[#d8d8d8]">
            <div class="flex text-xl font-black">{{ item.title }}</div>
            <div class="inline-flex items-center justify-center w-[30px] h-[30px] text-sm text-white bg-black rounded-full">
              {{ item.len }}
            </div>
          </div>
          <div class="px-5 pb-8" v-if="!item.btns">
            <div class="h-[142px] flex items-center justify-center" v-if="item.src">
              <img :src="`/img/${item.src}`" alt="" />
            </div>
            <div class="text-4xl leading-0 font-black text-center" :style="{ color: item.color }" v-if="item.value">
              <span>{{ item.value }}</span>
              <sub class="font-normal" v-if="item.sub">{{ item.sub }}</sub>
            </div>
            <div class="h-[10px] bg-[#eef2f8] relative mt-5" v-if="item.min !== undefined">
              <div
                class="absolute left-0 h-[10px]"
                :style="{
                  width: item.value,
                  backgroundColor: item.color,
                  width: (item.value / item.max) * 100 + '%'
                }"
              ></div>
            </div>
            <div class="flex tex-xs relative h-6" v-if="item.min !== undefined">
              <div class="text-[#161718] absolute top-0 left-0">
                {{ item.min }}
              </div>
              <div class="text-[#161718] absolute top-0 right-0">
                {{ item.max }}
              </div>
              <div
                class="absolute"
                :style="{
                  color: item.color,
                  left: `calc(${(item.value / item.max) * 100}% - ${minusValue(item.value)}px)`
                }"
              >
                {{ item.value }}
              </div>
            </div>
          </div>
          <div class="flex flex-col h-[calc(100%-72px)] justify-center px-8 space-y-2" v-else>
            <v-btn v-for="(btn, key) of item.btns" :key="key" :color="btn.color" class="w-full text-white text-base !h-[50px]">{{ btn.title }}</v-btn>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="overflow-x-auto">
      <div class="flex items-center justify-center space-x-[15px] pt-[50px] pb-[30px]">
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
