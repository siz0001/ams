<script setup>
import Layout from '@/components/layout/index.vue'
import { logins } from '@/api/history'
import { onMounted, ref, getCurrentInstance } from 'vue'

const historys = ref({})

onMounted(async () => {})

function submit() {
  const { refs } = getCurrentInstance()
  console.log(refs)
}

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
      <v-form ref="form" @submit="submit" class="flex items-center space-x-2">
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="기관" placeholder="청파이엠티" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-text-field class="w-[220px] bg-white" color="primary" density="compact" label="ID" name="id" variant="outlined" hide-details="auto" shaped></v-text-field>
        <v-btn flat color="black" type="submit">조회<v-icon>mdi-magnify</v-icon></v-btn>
      </v-form>
    </div>
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
        <tbody>
          <tr v-for="item in historys.content" :key="item.id">
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">{{ item.organization.id }}</td>
            <td class="text-center">{{ item.ip }}</td>
            <td class="text-center">{{ item.login }}</td>
            <td class="text-center">{{ item.logout }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination class="mt-8 px-5" rounded="circle" :length="6"></v-pagination>
  </Layout>
</template>
