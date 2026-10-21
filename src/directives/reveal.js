// Apparition au scroll : v-reveal (un élément) et v-stagger (enfants en cascade)
// Valeur : 'up' | 'left' | 'right' | 'zoom' | 'blur', ou { type, delay }

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      // Les enfants d'un v-stagger qui entrent ensemble se décalent dans l'ordre d'arrivée
      let batchIndex = 0
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        if (el.dataset.staggerChild !== undefined) el.style.setProperty('--i', batchIndex++)
        el.classList.add('is-visible')
        observer.unobserve(el)
      })
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' })
  }
  return observer
}

function parse(value) {
  if (!value) return { type: 'up', delay: 0 }
  if (typeof value === 'string') return { type: value, delay: 0 }
  return { type: value.type || 'up', delay: value.delay || 0 }
}

// Une fois l'animation jouée, on retire les classes pour rendre la main aux hovers / transforms inline
function prepare(el, type, delay) {
  el.classList.add('reveal', `reveal-${type}`)
  if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
  const cleanup = (e) => {
    if (e.target !== el) return
    el.classList.remove('reveal', 'is-visible', `reveal-${type}`)
    el.style.removeProperty('--i')
    el.style.removeProperty('--reveal-delay')
    el.removeEventListener('animationend', cleanup)
  }
  el.addEventListener('animationend', cleanup)
  getObserver().observe(el)
}

const isDisabled = () => prefersReducedMotion() || !('IntersectionObserver' in window)

export const reveal = {
  mounted(el, binding) {
    if (isDisabled()) return
    const { type, delay } = parse(binding.value)
    prepare(el, type, delay)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}

export const stagger = {
  mounted(el, binding) {
    if (isDisabled()) return
    const { type, delay } = parse(binding.value)
    ;[...el.children].forEach((child) => {
      child.dataset.staggerChild = ''
      prepare(child, type, delay)
    })
  },
  unmounted(el) {
    ;[...el.children].forEach((child) => observer?.unobserve(child))
  }
}
