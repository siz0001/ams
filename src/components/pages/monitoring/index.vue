<script setup>
import Layout from '@/components/layout/index.vue'

const selectMenu = ['전체', '그룹', '1학년', '2학년', '3학년']
const selectMenu2 = ['전체', '그룹', '측정기1', '측정기2', '측정기3']
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
  <Layout title="모니터링">
    <div class="h-[50px] flex items-center justify-end">
      <div class="text-sm flex items-center"><v-icon size="16" class="mr-1">mdi-clock-outline</v-icon>업데이트 시간 : 2022.03.02 16:18</div>
    </div>
    <div class="px-4 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2">
        <v-select :items="selectMenu" label="전체그룹 상위그룹명" hide-details="auto" class="min-w-[200px]"></v-select>
        <v-select :items="selectMenu" label="전체그룹 하위그룹명" hide-details="auto" class="min-w-[200px]"></v-select>
        <v-select :items="selectMenu2" label="전체그룹 측정기명" hide-details="auto" class="min-w-[200px]"></v-select>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-8 mt-[30px]">
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
  </Layout>
</template>
