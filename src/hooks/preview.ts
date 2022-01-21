import { ref, watchEffect, Ref } from 'vue'

export function useDocument(code: string, paddingX: boolean, paddingY: boolean, isDark: Ref<boolean>) {
  const lightDoc = `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/tailwind_build.css" rel="stylesheet">
  </head>
  <body class="flex-1 flex items-center justify-center bg-white ${paddingX ? 'px-4 ' : ''}${paddingY ? 'py-4' : ''}">
    ${code}
  </body>
</html>`
  const darkDoc = `<!doctype html>
<html class="dark">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/tailwind_build.css" rel="stylesheet">
  </head>
  <body class="flex-1 flex items-center justify-center text-white bg-zinc-900 ${paddingX ? 'px-4 ' : ''}${paddingY ? 'py-4' : ''}">
    ${code}
  </body>
</html>`
  
  let document = ref<string>()

  watchEffect(() => {
    if (isDark.value) {
      document.value = darkDoc
    } else {
      document.value = lightDoc
    }
  })

  return {
    document
  }
}