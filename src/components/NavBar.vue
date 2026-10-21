<template>
  <header 
    class="fixed w-full top-0 z-50 transition-all duration-500 border-b border-transparent"
    :class="{ 
      'bg-white/80 backdrop-blur-md shadow-sm border-white/20': isScrolled,
      'bg-transparent py-4': !isScrolled
    }"
  >
    <!-- Barre de progression de lecture -->
    <div class="absolute top-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-primary via-primary-light to-secondary"
         :style="{ transform: `scaleX(${progress})` }"></div>

    <div class="w-[90%] max-w-[1200px] mx-auto px-4">
      <nav class="flex justify-between items-center py-3">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group animate-fade-in-up" title="Aladia Stream - Accueil">
          <img src="/IMG/aladia_stream.png" alt="Aladia Stream logo"
            class="w-20 h-10 object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          <div class="flex flex-col">
            <span class="text-xl font-bold font-montserrat tracking-tight leading-none transition-colors duration-500"
              :class="isScrolled ? 'text-dark' : 'text-white shadow-text'">
              ALADIA
            </span>
            <span class="text-sm font-semibold tracking-widest leading-none transition-all duration-500 group-hover:tracking-[0.3em]"
               :class="isScrolled ? 'text-primary' : 'text-white/90 shadow-text'">
              STREAM
            </span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="(item, i) in menuItems" :key="item.href"
              class="opacity-0 animate-fade-in-up" :style="{ animationDelay: `${150 + i * 80}ms` }">
            <router-link :to="item.href" 
               class="text-sm font-medium uppercase tracking-wide transition-all duration-300 relative group"
               :class="isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-white/80 shadow-text'"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
                    :class="isActive(item.href) ? 'w-full' : 'w-0'"></span>
            </router-link>
          </li>
          
          <li class="opacity-0 animate-fade-in-up" :style="{ animationDelay: `${150 + menuItems.length * 80}ms` }">
            <router-link to="/#contact" v-ripple
               class="relative overflow-hidden inline-block px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-primary/40"
               :class="isScrolled 
                 ? 'bg-primary text-white hover:bg-primary-dark' 
                 : 'bg-white text-primary hover:bg-gray-100'"
            >
              Nous contacter
            </router-link>
          </li>
        </ul>

        <!-- Mobile Toggle (burger → croix) -->
        <button 
          class="md:hidden relative w-8 h-8 focus:outline-none"
          @click="toggleMenu"
          aria-label="Menu"
          :aria-expanded="isMenuOpen"
        >
          <span v-for="n in 3" :key="n"
            class="absolute left-1 h-0.5 rounded-full transition-all duration-300"
            :class="[
              isMenuOpen || !isScrolled ? 'bg-white' : 'bg-dark',
              burgerLine(n)
            ]"></span>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu Overlay (téléporté : le backdrop-blur du header piégerait le position: fixed) -->
    <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      enter-from-class="opacity-0 [clip-path:circle(0%_at_100%_0%)]"
      enter-to-class="opacity-100 [clip-path:circle(150%_at_100%_0%)]"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 [clip-path:circle(150%_at_100%_0%)]"
      leave-to-class="opacity-0 [clip-path:circle(0%_at_100%_0%)]"
    >
      <div v-if="isMenuOpen" 
           class="fixed inset-0 bg-dark/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8 md:hidden">
        <button @click="closeMenu" aria-label="Fermer le menu"
          class="absolute top-6 right-6 text-white/60 hover:text-white hover:rotate-90 text-3xl transition-all duration-300 opacity-0 animate-pop [animation-delay:200ms]">
          <i class="fas fa-times"></i>
        </button>

        <router-link to="/" @click="closeMenu"
           class="text-3xl font-bold font-montserrat text-white mb-4 opacity-0 animate-fade-in-up">
          ALADIA <span class="text-primary">STREAM</span>
        </router-link>

        <router-link v-for="(item, i) in menuItems" 
           :key="item.href"
           :to="item.href" 
           @click="closeMenu"
           class="text-xl font-medium text-white/80 hover:text-primary transition-colors opacity-0 animate-fade-in-up"
           :style="{ animationDelay: `${120 + i * 80}ms` }"
        >
          {{ item.label }}
        </router-link>

        <router-link to="/#contact" @click="closeMenu"
           class="mt-4 px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary-dark transition-transform active:scale-95 opacity-0 animate-pop"
           :style="{ animationDelay: `${120 + menuItems.length * 80}ms` }">
          Nous contacter
        </router-link>
      </div>
    </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useScrollProgress } from '../composables/useScrollProgress';

const route = useRoute();
const isMenuOpen = ref(false);
const { y, progress } = useScrollProgress();
const isScrolled = computed(() => y.value > 50);

const menuItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/#apropos' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

function isActive(href) {
  const [path, hash = ''] = href.split('#');
  return route.path === path && (route.hash || '') === (hash ? `#${hash}` : '');
}

function burgerLine(n) {
  if (n === 1) return isMenuOpen.value ? 'w-6 top-1/2 rotate-45' : 'w-6 top-2';
  if (n === 2) return isMenuOpen.value ? 'w-6 top-1/2 opacity-0 translate-x-3' : 'w-6 top-1/2';
  return isMenuOpen.value ? 'w-6 top-1/2 -rotate-45' : 'w-4 top-[1.4rem]';
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}
</script>

<style scoped>
.shadow-text {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
</style>
