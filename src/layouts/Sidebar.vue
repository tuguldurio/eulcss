<template>
  <aside class="sticky top-20 w-44 h-auto hidden lg:block mr-4 overflow-x-hidden overflow-y-auto">
    <div class="px-4 w-full">
      <nav class="flex-col content-center justify-between">
        <ul>
          <li>
            <h5 class="font-semibold text-lg subtitle-color">Components</h5>

            <ul>
              <sidebar-list-item name="Alert"/>
              <sidebar-list-item name="Breadcrumbs"/>
              <sidebar-list-item name="Button"/>
              <sidebar-list-item name="Progress"/>
              <sidebar-list-item name="Navbar"/>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
</script>

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