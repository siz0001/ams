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
</script>

<template>
  <Layout title="센서 평균 현황">
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
      <div class="w-[110px] flex-none">
        <v-btn color="#2359c4" class="text-white !h-[84px] text-base" width="100%">조회</v-btn>
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
      <div class="flex flex-wrap border-t-2 border-l-2 !border-[#d7d7d7] col-span-12 md:col-span-8 lg:col-span-8 2xl:col-span-9">
        <div class="border-b-2 border-r-2 !border-[#d7d7d7] min-h-[260px] w-full 2xl:w-1/2" v-for="item in [1, 2, 3, 4]" :key="item">
          <div class="flex flex-1 items-center pt-5 px-[30px]">
            <div class="inline-flex items-center !bg-[#2359c4] text-white px-6 font-bold rounded-b-lg h-10">좋음</div>
            <div class="flex-1 text-xl font-bold ml-3">그룹명/측정기 명</div>
            <div class="w-[30px] h-[30px] rounded-[30px] bg-[#161718] text-white text-center leading-[30px]">5</div>
          </div>
          <div class="px-[30px] pb-[30px] mt-4">
            <div class="bg-[#f5f7f9] px-5 py-4">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center">
                    <img src="/img/icon_pm10_sm.png" alt="" />
                    <div class="flex-1 text-xl ml-2 font-bold">PM10: <span class="!text-blue">좋음</span></div>
                    <div class="text-xl font-black !text-blue">50<sub>ug/㎥</sub></div>
                  </div>
                  <div class="mt-2 h-[15px] relative bg-[#e3e3e3]">
                    <div class="absolute h-[15px] bg-gradient-to-r from-blue to-[#00c0fa]" :style="{ width: '100px' }"></div>
                    <div
                      class="absolute left-0 right-0 h-[15px] bg-repeat-x"
                      :style="{
                        backgroundImage: 'url(/img/bg-line.png)'
                      }"
                    ></div>
                  </div>
                  <div class="flex relative mt-1 h-4">
                    <div class="text-xs text-[#b8babb] absolute left-0">0</div>
                    <div class="text-xs text-[#b8babb] absolute left-[20%]">100</div>
                    <div class="text-xs text-[#b8babb] absolute left-[60%]">300</div>
                    <div class="text-xs text-[#b8babb] absolute right-0">500</div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center">
                    <img src="/img/icon_pm2.5_sm.png" alt="" />
                    <div class="flex-1 text-xl ml-2 font-bold">PM10: <span class="text-green">보통</span></div>
                    <div class="text-xl font-black text-green">50<sub>ug/㎥</sub></div>
                  </div>
                  <div class="mt-2 h-[15px] relative bg-[#e3e3e3]">
                    <div class="absolute h-[15px] bg-gradient-to-r from-green to-[#89d9d1]" :style="{ width: '100px' }"></div>
                    <div
                      class="absolute left-0 right-0 h-[15px] bg-repeat-x"
                      :style="{
                        backgroundImage: 'url(/img/bg-line.png)'
                      }"
                    ></div>
                  </div>
                  <div class="flex relative mt-1 h-4">
                    <div class="text-xs text-[#b8babb] absolute left-0">0</div>
                    <div class="text-xs text-[#b8babb] absolute left-[20%]">100</div>
                    <div class="text-xs text-[#b8babb] absolute left-[60%]">300</div>
                    <div class="text-xs text-[#b8babb] absolute right-0">500</div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center">
                    <img src="/img/icon_co2_sm.png" alt="" />
                    <div class="flex-1 text-xl ml-2 font-bold">PM10: <span class="text-red">매우나쁨</span></div>
                    <div class="text-xl font-black text-red">50<sub>ug/㎥</sub></div>
                  </div>
                  <div class="mt-2 h-[15px] relative bg-[#e3e3e3]">
                    <div class="absolute h-[15px] bg-gradient-to-r from-red to-[#d19394]" :style="{ width: '100px' }"></div>
                    <div
                      class="absolute left-0 right-0 h-[15px] bg-repeat-x"
                      :style="{
                        backgroundImage: 'url(/img/bg-line.png)'
                      }"
                    ></div>
                  </div>
                  <div class="flex relative mt-1 h-4">
                    <div class="text-xs text-[#b8babb] absolute left-0">0</div>
                    <div class="text-xs text-[#b8babb] absolute left-[20%]">100</div>
                    <div class="text-xs text-[#b8babb] absolute left-[60%]">300</div>
                    <div class="text-xs text-[#b8babb] absolute right-0">500</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-[5px] gap-y-[5px] mt-[10px]">
              <div class="flex items-center bg-[#f5f7f9] px-[30px] py-4">
                <div class="w-[30px] text-center">
                  <img src="/img/icon_temp_sm.png" alt="" class="mx-auto" />
                </div>
                <div class="flex-1 text-xl ml-[10px]">TEMP</div>
                <div class="text-xl font-black !text-blue">16<sub class="ml-1">°C</sub></div>
              </div>
              <div class="flex items-center bg-[#f5f7f9] px-[30px] py-4">
                <div class="w-[30px] text-center">
                  <img src="/img/icon_rh_sm.png" alt="" class="mx-auto" />
                </div>
                <div class="flex-1 text-xl ml-[10px]">RH</div>
                <div class="text-xl font-black !text-blue">10<sub class="ml-1">%</sub></div>
              </div>
              <div class="flex items-center bg-[#f5f7f9] px-[30px] py-4">
                <div class="w-[30px] text-center">
                  <img src="/img/icon_hcho_sm.png" alt="" class="mx-auto" />
                </div>
                <div class="flex-1 text-xl ml-[10px]">HCHO</div>
                <div class="text-xl font-black !text-red">4<sub class="ml-1">ppm</sub></div>
              </div>
              <div class="flex items-center bg-[#f5f7f9] px-[30px] py-4">
                <div class="w-[30px] text-center">
                  <img src="/img/icon_pm1.0_sm.png" alt="" class="mx-auto" />
                </div>
                <div class="flex-1 text-xl ml-[10px]">PM1.0</div>
                <div class="text-xl font-black !text-blue">16<sub class="ml-1">ug/㎥</sub></div>
              </div>
              <div class="flex items-center bg-[#f5f7f9] px-[30px] py-4">
                <div class="w-[30px] text-center">
                  <img src="/img/icon_co_sm.png" alt="" class="mx-auto" />
                </div>
                <div class="flex-1 text-xl ml-[10px]">CO</div>
                <div class="text-xl font-black !text-yellow">10<sub class="ml-1">ppm</sub></div>
              </div>
              <div class="flex items-center bg-[#f5f7f9] px-[30px] py-4">
                <div class="w-[30px] text-center">
                  <img src="/img/icon_tvoc_sm.png" alt="" class="mx-auto" />
                </div>
                <div class="flex-1 text-xl ml-[10px]">TVOC</div>
                <div class="text-xl font-black !text-blue">6<sub class="ml-1">ppm</sub></div>
              </div>
              <div></div>
              <div class="flex justify-between items-center bg-[#f5f7f9] px-[30px] py-4">
                공기살균정화기
                <div class="flex gap-[2px] ml-[2px]">
                  <div class="w-[26px] text-white text-center rounded-full !bg-green">1</div>
                  <div class="w-[26px] text-white text-center rounded-full !bg-yellow">1</div>
                  <div class="w-[26px] text-white text-center rounded-full !bg-red">1</div>
                </div>
              </div>
            </div>
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
