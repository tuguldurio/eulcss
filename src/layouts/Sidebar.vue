<script setup lang="ts">
import { useDocsNames } from '~/src/hooks/Docs'
const docsNames = useDocsNames()
</script>

<template>
  <aside class="sticky top-20 w-44 h-auto hidden lg:block mr-4 overflow-x-hidden overflow-y-auto">
    <div class="px-4 w-full">
      <nav class="flex-col content-center justify-between">
        <ul>
          <sidebar-list name="Tools">
            <sidebar-list-item name="REM Converter"></sidebar-list-item>
          </sidebar-list>
          
          <sidebar-list name="Components">
            <sidebar-list-item v-for="name in docsNames" :key="name" :name="name"/>
          </sidebar-list>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>