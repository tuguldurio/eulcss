import { ref, watch, Ref } from 'vue'

export function useDocument(code: string, paddingX: boolean, paddingY: boolean, isDark: Ref<boolean>) {
  let document = ref(`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/tailwind_build.css" rel="stylesheet">
  </head>
  <body class="relative flex-1 flex items-center justify-center ${paddingX ? 'px-4 ' : ''}${paddingY ? 'py-4' : ''}">
    ${code}
  </body>
</html>`)

  watch(isDark, () => {
    
    if (isDark.value) {
      document.value = `<!doctype html>
<html class="dark">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/tailwind_build.css" rel="stylesheet">
  </head>
  <body class="relative flex-1 flex items-center justify-center ${paddingX ? 'px-4 ' : ''}${paddingY ? 'py-4' : ''}">
    ${code}
  </body>
</html>`
    } else {
      document.value = `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/tailwind_build.css" rel="stylesheet">
  </head>
  <body class="relative flex-1 flex items-center justify-center ${paddingX ? 'px-4 ' : ''}${paddingY ? 'py-4' : ''}">
    ${code}
  </body>
</html>`
    }
  })

  return {
    document
  }
}