<template>
  <v-container class="min-h-screen flex items-center justify-center">
    <div class="w-[500px] bg-white rounded-lg shadow-lg py-[50px] px-12">
      <div class="text-center"><img src="/img/logo.png" alt="" /></div>
      <div class="flex items-center justify-center py-5 text-gray-500">
        <div class="text-xl">CP-AMS</div>
        <div class="text-3xl font-bold ml-2">로그인</div>
      </div>
      <div>
        <div class="space-y-4">
          <v-text-field
            color="primary"
            label="code"
            variant="outlined"
            hide-details="auto"
            shaped
          ></v-text-field>
          <v-text-field
            color="primary"
            label="id"
            variant="outlined"
            hide-details="auto"
            shaped
          ></v-text-field>
          <v-text-field
            color="primary"
            type="password"
            label="pw"
            variant="outlined"
            hide-details="auto"
            shaped
          ></v-text-field>
        </div>
        <div class="flex items-center justify-between">
          <v-checkbox
            label="정보 저장"
            hide-details="auto"
            color="primary"
          ></v-checkbox>
          <a class="text-[#4F46E5] text-sm">아이디/패스워드 찾기</a>
        </div>
        <div class="text-center">
          <v-btn width="300" color="primary" size="large" @click="toggleTheme"
            >로그인</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')

function toggleTheme() {
  console.log('asd')
  return (theme.value = theme.value === 'light' ? 'dark' : 'light')
}
</script>
