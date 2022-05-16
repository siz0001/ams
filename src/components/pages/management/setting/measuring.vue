<script setup>
import { ref } from 'vue'
import Layout from '@/components/layout/index.vue'

const dialog = ref(false)
const dialog2 = ref(false)
const confirm = ref(false)

const datas = []
for (let index = 0; index < 10; index++) {
  datas.push({
    id: String(index).padStart(4, '0'),
    agency: '청파초등학교',
    parentGroup: '상위',
    childGroup: '하위',
    ip: '127.0.0.1',
    group: 'sa',
    measuringCode: '코드',
    measuringName: '-',
    display: '무',
    append: '유',
    air: '-',
    createAt: '22.03.22',
    editedAd: '22.03.22'
  })
}
</script>

<template>
  <Layout title="측정기 관리">
    <div class="mt-[50px] px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="측정기명" placeholder="교실1" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="primary">조회<v-icon class="ml-1">mdi-magnify</v-icon> </v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]">초기화</v-btn>
      </div>
      <div class="space-x-1">
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="dialog = true">등록</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="dialog = true">수정</v-btn>
        <v-btn flat color="white" class="border border-[#bfbfbf]" @click="confirm = true">삭제</v-btn>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-basic mt-8 min-w-[1280px]">
        <thead>
          <tr>
            <th class="w-[74px]">선택</th>
            <th>기관명</th>
            <th>상위그룹</th>
            <th>하위그룹</th>
            <th>아이피</th>
            <th>그룹명</th>
            <th>측정기코드</th>
            <th>측정기명</th>
            <th>표시유무</th>
            <th>등록유무</th>
            <th>공기살균정화기</th>
            <th>수신일시</th>
            <th>가등시작일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td class="text-center">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="text-center">{{ item.agency }}</td>
            <td class="text-center">{{ item.parentGroup }}</td>
            <td class="text-center">{{ item.childGroup }}</td>
            <td class="text-center">{{ item.ip }}</td>
            <td class="text-center">{{ item.group }}</td>
            <td class="text-center">{{ item.measuringCode }}</td>
            <td class="text-center">{{ item.measuringName }}</td>
            <td class="text-center">{{ item.display }}</td>
            <td class="text-center">{{ item.append }}</td>
            <td class="text-center">{{ item.air }}</td>
            <td class="text-center">{{ item.createAt }}</td>
            <td class="text-center">{{ item.editedAd }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8" rounded="circle" :length="10"></v-pagination>
    <v-dialog v-model="dialog">
      <div class="min-w-[950px]">
        <div class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]">
          <div class="text-xl text-white font-bold">측정기 관리</div>
          <a class="cursor-pointer text-white p-2" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <div class="space-y-[10px]">
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="상위그룹" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
              <v-text-field color="primary" label="하위그룹" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
            </div>
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="아이피" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
              <v-text-field color="primary" label="측정기코드" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
            </div>
            <div class="flex items-center space-x-[10px]">
              <v-text-field color="primary" label="측정기명" variant="outlined" hide-details="auto" class="flex-none w-[calc(50%-5px)]"></v-text-field>
              <select class="form-select flex-1 !h-[56px] !border-[#909090] !w-auto">
                <option value="">표시유무</option>
              </select>
            </div>
            <div class="flex items-center space-x-[10px]">
              <select class="form-select !w-[calc(50%-5px)] !h-[56px] !border-[#909090]">
                <option value="">공기살균정화기</option>
              </select>
              <div class="flex flex-1 space-x-1 items-center">
                <v-text-field color="primary" label="공기살균정화기" variant="outlined" hide-details="auto" class="flex-1"></v-text-field>
                <v-btn color="#1b53a0" size="large" class="text-white !h-[56px]" @click="dialog2 = true">선택하기</v-btn>
              </div>
            </div>
          </div>
          <div class="mt-[30px] flex space-x-[10px]">
            <v-btn color="#1b53a0" variant="outlined" size="x-large" class="flex-1 font-bold">저장</v-btn>
            <v-btn color="#dedede" variant="outlined" size="x-large" class="text-black flex-1 font-bold" @click="dialog = false">취소</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="dialog2">
      <div class="min-w-[600px]">
        <div class="bg-[#1b53a0] h-[80px] flex items-center justify-between pl-[50px] px-[38px]">
          <div class="text-xl text-white font-bold">공기살균정화기 선택</div>
          <a class="cursor-pointer text-white p-2" @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
          </a>
        </div>
        <div class="bg-white px-[50px] py-[30px]">
          <table class="table-basic">
            <thead>
              <tr>
                <th class="w-[74px]">선택</th>
                <th>공기살균정화기 코드</th>
                <th>모델명</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in datas.slice(0, 5)" :key="item.id">
                <td class="text-center">
                  <input type="checkbox" class="form-checkbox" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">2</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-[30px] flex space-x-[10px]">
            <v-btn color="#1b53a0" variant="outlined" size="x-large" class="flex-1 font-bold">저장</v-btn>
            <v-btn color="#dedede" variant="outlined" size="x-large" class="text-black flex-1 font-bold" @click="dialog2 = false">취소</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="confirm">
      <div class="w-[466px]">
        <div class="border-[5px] !border-[#1b53a0] p-8 bg-white">
          <div class="text-xl text-center">삭제하겠습니까?</div>
          <div class="flex gap-2 justify-center mt-8">
            <v-btn color="#1b53a0" size="large" class="text-white">확인</v-btn>
            <v-btn size="large" @click="confirm = false">취소</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </Layout>
</template>
