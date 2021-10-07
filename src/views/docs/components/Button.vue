<script setup>
import Primary from '@/docs/Button/Primary.htm'
import WithIcon from '@/docs/Button/WithIcon.htm'
import Outlined from '@/docs/Button/Outlined.htm'
import Disabled from '@/docs/Button/Disabled.htm'
import Ring from '@/docs/Button/Ring.htm'
import FullWidth from '@/docs/Button/FullWidth.htm'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Primary" :code="Primary"/>
    <SimplePreview title="With icon" :code="WithIcon"/>
    <SimplePreview title="Outlined" :code="Outlined"/>
    <SimplePreview title="Disabled" :code="Disabled"/>
    <SimplePreview title="Ring on focus" :code="Ring"/>
    <SimplePreview title="Full Width" :code="FullWidth"/>
  </DocsContainer>
</template>