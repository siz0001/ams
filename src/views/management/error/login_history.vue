<script setup lang="ts">
import Layout from '@/components/layout/index.vue'
import Table from '@/components/management/error/table.vue'
import { ContentLoader } from 'vue-content-loader'

// historys.value = data

// const datas = []
// for (let index = 0; index < 10; index++) {
//   datas.push({
//     id: String(index).padStart(4, '0'),
//     agency: '청파초등학교',
//     userId: 'admin',
//     ip: '192.168.0.1',
//     loginTime: '2020-01-01 00:00:00',
//     logoutTime: '2020-01-01 00:00:00'
//   })
// }
</script>

<template>
  <Layout title="로그인 이력 현황">
    <div class="mt-[50px] px-10 flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1 justify-between bg-[#f3f9ff] py-6">
      <v-form ref="form" class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="ID" name="id" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="black" type="submit">조회<v-icon>mdi-magnify</v-icon></v-btn>
      </v-form>
    </div>
    <Suspense>
      <template #default>
        <Table />
      </template>

      <!-- loading state -->
      <template #fallback>
        <ContentLoader :speed="2" :animate="true" primaryColor="#ddd" secondaryColor="#ccc" width="100%" class="mt-8">
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="20" />
          <rect x="0" y="30" rx="10" ry="10" width="100%" height="20" />
          <rect x="0" y="60" rx="10" ry="10" width="100%" height="20" />
          <rect x="0" y="90" rx="10" ry="10" width="100%" height="20" />
        </ContentLoader>
      </template>
    </Suspense>
  </Layout>
</template>
