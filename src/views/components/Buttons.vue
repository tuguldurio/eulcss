<script setup>
import PreviewWrapper from '@/components/PreviewWrapper.vue'
import DocumentationContainer from '@/components/DocumentationContainer.vue'
import ButtonPrimary from '@/components/docs/Buttons/Primary.vue'
import ButtonBlock from '@/components/docs/Buttons/Block.vue'
import ButtonWithIcon from '@/components/docs/Buttons/WithIcon.vue'
import ButtonOutlined from '@/components/docs/Buttons/Outlined.vue'
import ButtonRing from '@/components/docs/Buttons/Ring.vue'
import ButtonDisabled from '@/components/docs/Buttons/Disabled.vue'
</script>

<template>
  <DocumentationContainer>
    <PreviewWrapper title="Primary" :code="ButtonPrimary.code">
      <ButtonPrimary/>
    </PreviewWrapper>

    <PreviewWrapper title="With icon" :code="ButtonWithIcon.code">
      <ButtonWithIcon/>
    </PreviewWrapper>

    <PreviewWrapper title="Outlined" :code="ButtonOutlined.code">
      <ButtonOutlined/>
    </PreviewWrapper>

    <PreviewWrapper title="Disabled" :code="ButtonDisabled.code">
      <ButtonDisabled/>
    </PreviewWrapper>

    <PreviewWrapper title="Ring on focus" :code="ButtonRing.code">
      <ButtonRing/>
    </PreviewWrapper>

    <PreviewWrapper title="Block" :code="ButtonBlock.code">
      <ButtonBlock/>
    </PreviewWrapper>
  </DocumentationContainer>
</template>