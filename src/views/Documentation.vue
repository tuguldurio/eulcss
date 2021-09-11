<template>
  <div class="container mx-auto py-4">
    <div class="py-4 my-2">
      <h1 class="text-4xl font-medium">{{ $route.name }}</h1>
    </div>

    <router-view></router-view>
  </div>
</template>