import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetScrollbar()],
  theme: {
    fontFamily: {
      sans: 'Rubik Variable, ui-sans-serif'
    }
  }
})
