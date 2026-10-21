// Onde au clic (l'élément doit être en relative + overflow-hidden)
import { prefersReducedMotion } from './reveal'

export const ripple = {
  mounted(el) {
    el._ripple = (e) => {
      if (prefersReducedMotion()) return
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 2
      const wave = document.createElement('span')
      wave.className = 'ripple-wave'
      wave.style.width = wave.style.height = `${size}px`
      wave.style.left = `${e.clientX - rect.left - size / 2}px`
      wave.style.top = `${e.clientY - rect.top - size / 2}px`
      wave.addEventListener('animationend', () => wave.remove())
      el.appendChild(wave)
    }
    el.addEventListener('pointerdown', el._ripple)
  },
  unmounted(el) {
    el.removeEventListener('pointerdown', el._ripple)
  }
}
