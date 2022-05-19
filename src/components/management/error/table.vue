<script setup>
import { ref } from 'vue'
import { GetLogins } from '@/api/obstacle'

const historys = ref()

try {
  const { data } = await GetLogins()
  historys.value = data
} catch (error) {}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table-basic mt-8 min-w-[980px]">
      <thead>
        <tr>
          <th>기관</th>
          <th>로그인ID</th>
          <th>IP</th>
          <th>로그인 일시</th>
          <th>로그아웃 일시</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="item in data" :key="item.id">
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.organization.id }}</td>
          <td class="text-center">{{ item.ip }}</td>
          <td class="text-center">{{ item.login }}</td>
          <td class="text-center">{{ item.logout }}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td colspan="5" class="text-center">
            <div class="py-10">
              <v-icon size="50" color="#dddddd">mdi-database-off-outline</v-icon>
              <div class="text-[#212121]">데이터가 없습니다.</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <v-pagination v-if="data" class="mt-8 px-5" rounded="circle" :length="6"></v-pagination>
</template>
