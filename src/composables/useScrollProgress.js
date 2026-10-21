import { ref, onMounted, onUnmounted } from 'vue'

// Position de scroll et progression (0 → 1) de la page, throttlées par requestAnimationFrame
export function useScrollProgress() {
  const y = ref(0)
  const progress = ref(0)
  let ticking = false

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    y.value = window.scrollY
    progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { y, progress }
}
