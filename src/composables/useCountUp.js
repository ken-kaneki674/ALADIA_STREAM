import { ref, onMounted, onUnmounted } from 'vue'
import { prefersReducedMotion } from '../directives/reveal'

// Compte de 0 à `end` (easing out cubic) quand `target` entre dans l'écran
export function useCountUp(target, end, duration = 2000) {
  const value = ref(0)
  let observer = null
  let frame = null

  const run = () => {
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      value.value = Math.round(end * (1 - Math.pow(1 - p, 3)))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      value.value = end
      return
    }
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run()
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    cancelAnimationFrame(frame)
  })

  return value
}
