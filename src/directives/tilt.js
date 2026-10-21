// Inclinaison 3D au survol + position de la souris exposée en --mx / --my (effet spotlight)
import { prefersReducedMotion } from './reveal'

const MAX_ANGLE = 6

export const tilt = {
  mounted(el, binding) {
    if (prefersReducedMotion() || window.matchMedia('(hover: none)').matches) return
    const max = binding.value || MAX_ANGLE

    el._tiltMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      el.style.setProperty('--mx', `${x * 100}%`)
      el.style.setProperty('--my', `${y * 100}%`)
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`
    }
    el._tiltLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', el._tiltMove)
    el.addEventListener('mouseleave', el._tiltLeave)
  },
  unmounted(el) {
    el.removeEventListener('mousemove', el._tiltMove)
    el.removeEventListener('mouseleave', el._tiltLeave)
  }
}
