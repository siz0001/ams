<script setup>
import { onMounted, ref } from 'vue'
import Layout from '@/components/layout/index.vue'
import cn from 'classnames'

const list = ref(true)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    createAt: '22.03.22'
  })
}
onMounted(() => {
  const ctx = document.getElementById('myChart')
  const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    }
  })
})
</script>

<template>
  <Layout title="센서 기간별 현황">
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
        <v-btn class="!h-[84px] text-base bg-white" width="110">다운로드</v-btn>
      </div>
    </div>
    <div v-show="list === true" class="mt-[30px]">
      <div class="flex items-center border-t-2 border-t-[#0076ca] px-[30px] h-[60px]" :style="{ borderBottom: '1px solid #e2e2e2' }">
        <div>PM2.5</div>
        <div class="ml-[50px] flex flex-1 items-center gap-[10px]">
          <div>그룹명</div>
          <span class="w-[1px] h-[15px] bg-[#e2e2e2]"></span>
          <div>측정기명</div>
        </div>
        <div class="flex items-center gap-6">
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
        <div class="flex items-center ml-4">
          <v-icon color="#0076ca">mdi-access-point-network</v-icon>
          <span class="ml-1">수신상태:</span>
          <span class="text-[#0076ca] font-bold ml-1">정상</span>
        </div>
      </div>
      <div class="flex gap-[50px] mt-8">
        <div class="w-[280px] space-y-1">
          <div class="bg-[#0076ca] text-center text-white leading-[80px] text-xl">측정기명</div>
          <div class="px-[50px] flex items-center h-[50px] border !border-[#c8c8ca]">
            <input type="checkbox" class="form-checkbox" id="check5" />
            <label for="check5" class="text-base ml-2 cursor-pointer">1층로비</label>
          </div>
          <div class="px-[50px] flex items-center h-[50px] border !border-[#c8c8ca]">
            <input type="checkbox" class="form-checkbox" id="check6" />
            <label for="check6" class="text-base ml-2 cursor-pointer">2층로비</label>
          </div>
          <div class="px-[50px] flex items-center h-[50px] border !border-[#c8c8ca]">
            <input type="checkbox" class="form-checkbox" id="check7" />
            <label for="check7" class="text-base ml-2 cursor-pointer">교실1</label>
          </div>
          <div class="px-[50px] flex items-center h-[50px] border !border-[#c8c8ca]">
            <input type="checkbox" class="form-checkbox" id="check8" />
            <label for="check8" class="text-base ml-2 cursor-pointer">교실2</label>
          </div>
        </div>
        <div class="flex-1">
          <canvas id="myChart" width="100%" height="500"></canvas>
        </div>
      </div>
      <div class="text-right mt-4">1일 데이터 측정기준 : 조회기간 10분 단위의 평균값 7일 데이터 측정기준 : 조회시간 1시간 단위의 평균값 월간 데이터 측정기준 : 조회가긴 1일 단위의 평균값</div>
    </div>
    <div v-show="!list" class="overflow-x-auto">
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
  </Layout>
</template>
