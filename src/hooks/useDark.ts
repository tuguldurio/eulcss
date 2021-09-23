import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  onChanged(dark: boolean) {
    // update the dom, call the API or something
    console.log('jkjk')
  }
})

export default function () {
  const toggleDark = useToggle(isDark)

//   watch(isDark, () => {
//   console.log(isDark.value, 'LOL')
//   // if (isDark.value)
//   //   import 'highlight.js/styles/atom-one-light.css'
// })

  return {
    isDark,
    toggleDark
  }
}