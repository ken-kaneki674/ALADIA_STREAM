<template>
  <header 
    class="fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent"
    :class="{ 
      'bg-white/80 backdrop-blur-md shadow-sm border-white/20': isScrolled,
      'bg-transparent py-4': !isScrolled
    }"
  >
    <div class="w-[90%] max-w-[1200px] mx-auto px-4">
      <nav class="flex justify-between items-center py-3">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group" title="Aladia Stream - Accueil">
          <img src="/IMG/aladia_stream.png" alt="Aladia Stream logo"
            class="w-20 h-10 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
          <div class="flex flex-col">
            <span class="text-xl font-bold font-montserrat tracking-tight leading-none"
              :class="isScrolled ? 'text-dark' : 'text-white shadow-text'">
              ALADIA
            </span>
            <span class="text-sm font-semibold tracking-widest leading-none"
               :class="isScrolled ? 'text-primary' : 'text-white/90 shadow-text'">
              STREAM
            </span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in menuItems" :key="item.href">
            <router-link :to="item.href" 
               class="text-sm font-medium uppercase tracking-wide transition-all duration-300 relative group"
               :class="isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-white/80 shadow-text'"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </router-link>
          </li>
          
          <li>
            <router-link to="/#contact" 
               class="px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm shadow-lg transform hover:-translate-y-0.5"
               :class="isScrolled 
                 ? 'bg-primary text-white hover:bg-primary-dark' 
                 : 'bg-white text-primary hover:bg-gray-100'"
            >
              Nous contacter
            </router-link>
          </li>
        </ul>

        <!-- Mobile Toggle -->
        <button 
          class="md:hidden text-2xl focus:outline-none transition-colors duration-300"
          :class="isScrolled ? 'text-dark' : 'text-white'"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div v-if="isMenuOpen" 
           class="fixed inset-0 bg-dark/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8 md:hidden">
        
        <button @click="closeMenu" class="absolute top-6 right-6 text-white/50 hover:text-white text-3xl">
          <i class="fas fa-times"></i>
        </button>

        <router-link to="/" @click="closeMenu" class="text-3xl font-bold font-montserrat text-white mb-4">
          ALADIA <span class="text-primary">STREAM</span>
        </router-link>

        <router-link v-for="item in menuItems" 
           :key="item.href"
           :to="item.href" 
           @click="closeMenu"
           class="text-xl font-medium text-white/80 hover:text-white hover:text-primary transition-colors"
        >
          {{ item.label }}
        </router-link>

        <router-link to="/#contact" @click="closeMenu"
           class="mt-4 px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary-dark transition-transform active:scale-95">
          Nous contacter
        </router-link>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/#apropos' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.shadow-text {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
</style>
