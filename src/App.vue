<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <NavBar />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-6 scale-[0.98] blur-sm"
          enter-to-class="opacity-100 translate-y-0 scale-100 blur-0"
          leave-active-class="transition duration-250 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100 blur-0"
          leave-to-class="opacity-0 -translate-y-4 scale-[0.98] blur-sm"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <FooterSection />

    <!-- Scroll to Top Button (anneau = progression du scroll) -->
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-6 scale-50"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-6 scale-50"
    >
      <button 
        v-show="showScrollToTop"
        @click="scrollToTop"
        class="group fixed bottom-8 right-8 bg-primary text-white w-14 h-14 rounded-full shadow-lg shadow-primary/30 z-50 flex items-center justify-center hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Retour en haut"
      >
        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r="25" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3" />
          <circle cx="28" cy="28" r="25" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"
            :stroke-dasharray="RING_LENGTH" :stroke-dashoffset="RING_LENGTH * (1 - progress)" />
        </svg>
        <i class="fas fa-arrow-up text-lg transition-transform duration-300 group-hover:-translate-y-1"></i>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
import { useScrollProgress } from './composables/useScrollProgress';

const RING_LENGTH = 2 * Math.PI * 25;

const { y, progress } = useScrollProgress();
const showScrollToTop = computed(() => y.value > 400);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
