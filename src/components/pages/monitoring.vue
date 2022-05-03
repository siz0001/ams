<script setup>
import Layout from '@/components/layout/index.vue'
</script>

<template>
  <Layout title="모니터링">
    <div class="h-[50px] flex items-center justify-end">
      <div class="text-sm">
        <v-icon size="16" class="mr-1">mdi-clock-outline</v-icon>업데이트 시간 :
        2022.03.02 16:18
      </div>
    </div>
    <div class="px-10 flex items-center justify-between bg-[#f3f9ff] h-[90px]">
      <div class="flex items-center space-x-2"></div>
    </div>
    <div class="flex mt-[30px]">
      <div
        class="border-[3px] border-[#0075c9] p-[30px] w-[380px] flex-none -space-x-[1px]"
      >
        <div class="inline-flex items-center text-xl font-bold">
          <v-icon size="20" color="#0098ff" class="mr-1"
            >mdi-clipboard-text-search-outline</v-icon
          >장치 현황
        </div>
        <div class="space-y-[2px] mt-5">
          <div
            class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]"
          >
            <div class="font-bold">측정기</div>
            <div class="text-3xl font-system font-black">10</div>
          </div>
          <div
            class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]"
          >
            <div class="font-bold">센서</div>
            <div class="text-3xl font-system font-black">9</div>
          </div>
          <div
            class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]"
          >
            <div class="font-bold">지역화센서</div>
            <div class="text-3xl font-system font-black">5</div>
          </div>
          <div
            class="flex items-center justify-between h-[62px] bg-[#1b53a0] text-white px-[30px]"
          >
            <div class="font-bold">공기살균정화기</div>
            <div class="text-3xl font-system font-black">8</div>
          </div>
        </div>
      </div>
      <div class="table border-collapse flex-1 ml-[66px]">
        <div class="table-cell border-2 !border-[#d7d7d7]">
          <div
            class="flex items-center justify-between px-7 h-[72px] border-b-2 border-[#d8d8d8]"
          >
            <div class="flex text-2xl font-black">PM1.0</div>
          </div>
        </div>
        <div class="table-cell border-2 !border-[#d7d7d7]">
          <div
            class="flex items-center justify-between px-7 h-[72px] border-b-2 border-[#d8d8d8]"
          >
            <div class="flex text-2xl font-black">PM1.0</div>
          </div>
        </div>
        <div class="table-cell border-2 !border-[#d7d7d7]">
          <div
            class="flex items-center justify-between px-7 h-[72px] border-b-2 border-[#d8d8d8]"
          >
            <div class="flex text-2xl font-black">PM1.0</div>
          </div>
        </div>
        <div class="table-cell border-2 !border-[#d7d7d7]">
          <div
            class="flex items-center justify-between px-7 h-[72px] border-b-2 border-[#d8d8d8]"
          >
            <div class="flex text-2xl font-black">PM1.0</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
