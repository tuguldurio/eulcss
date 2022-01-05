<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import useDark from '@/hooks/isDark'

const { isDark } = useDark()

const codeStyleLight = ref<HTMLLinkElement>()
const codeStyleDark = ref<HTMLLinkElement>()

watchEffect(() => {
  if (isDark.value) {
    codeStyleDark.value?.removeAttribute('disabled')
    codeStyleLight.value?.setAttribute('disabled', 'disabled')
  } else {
    codeStyleLight.value?.removeAttribute('disabled')
    codeStyleDark.value?.setAttribute('disabled', 'disabled')
  }
})
</script>

<template>
  <div class="h-full min-h-screen pt-12 text-color dark:bg-zinc-900 transition-colors">
    <Navbar/>
    <router-view/>
    <link ref="codeStyleDark"  rel="stylesheet" disabled href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-dark.min.css">
    <link ref="codeStyleLight" rel="stylesheet" disabled href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-light.min.css">
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>