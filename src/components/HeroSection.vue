<template>
  <section id="accueil" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with Overlay (parallaxe) -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/70 to-primary/40 z-10"></div>
      <div class="w-full h-full will-change-transform" :style="{ transform: `translate3d(0, ${parallax}px, 0)` }">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
             alt="Bureau background" 
             class="w-full h-full object-cover animate-pulse-slow scale-105"
        />
      </div>
    </div>

    <!-- Blobs lumineux animés -->
    <div class="absolute inset-0 z-[5] pointer-events-none" aria-hidden="true">
      <div class="absolute top-1/4 left-[10%] w-72 h-72 bg-primary/30 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
      <div class="absolute top-1/3 right-[10%] w-80 h-80 bg-secondary/30 rounded-full blur-3xl mix-blend-screen animate-blob [animation-delay:-5s]"></div>
      <div class="absolute bottom-[15%] left-1/3 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl mix-blend-screen animate-blob [animation-delay:-10s]"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center text-white"
         :style="{ transform: `translate3d(0, ${parallax * -0.4}px, 0)`, opacity: contentOpacity }">
      <h2 class="text-primary-light font-bold tracking-[0.25em] uppercase mb-4 text-sm md:text-base opacity-0 animate-fade-in">
        Bienvenue chez Aladia Stream
      </h2>
      
      <h1 class="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white drop-shadow-lg">
        <span class="inline-block overflow-hidden pb-2">
          <span class="inline-block animate-word-in" style="animation-delay: 200ms">Simplicité</span>
        </span>
        <br />
        <span class="inline-block overflow-hidden pb-2">
          <span class="inline-block animate-word-in" style="animation-delay: 380ms">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary to-primary-light bg-[length:200%_auto] animate-gradient-x">
              & Excellence
            </span>
          </span>
        </span>
      </h1>
      
      <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light opacity-0 animate-fade-in-up [animation-delay:650ms]">
        Votre partenaire multiservices de confiance. De la bureautique à la finance, 
        nous simplifions votre quotidien avec des solutions sur mesure.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up [animation-delay:850ms]">
        <a href="#services" v-ripple
           class="btn-primary group relative overflow-hidden shadow-lg shadow-primary/40">
          <span class="relative z-10 flex items-center gap-2">
            Découvrir nos services
            <i class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
          </span>
          <span class="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" aria-hidden="true"></span>
        </a>
        
        <a href="#contact" v-ripple
           class="relative overflow-hidden px-8 py-3 rounded-full font-medium border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white hover:-translate-y-1">
          Nous contacter
        </a>
      </div>
    </div>
    
    <!-- Scroll Indicator (souris animée) -->
    <a href="#apropos" class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors opacity-0 animate-fade-in [animation-delay:1.2s]"
       aria-label="Défiler vers le bas">
      <span class="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
        <span class="w-1 h-2 rounded-full bg-current animate-scroll-wheel"></span>
      </span>
    </a>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useScrollProgress } from '../composables/useScrollProgress';
import { prefersReducedMotion } from '../directives/reveal';

const { y } = useScrollProgress();
const reduced = prefersReducedMotion();

// Le fond descend moins vite que la page, le contenu remonte et s'estompe
const parallax = computed(() => (reduced ? 0 : Math.min(y.value, 1000) * 0.35));
const contentOpacity = computed(() => (reduced ? 1 : Math.max(1 - y.value / 600, 0)));
</script>

<style scoped>
/* Custom slow pulse for the background image */
@keyframes pulse-slow {
  0%, 100% { transform: scale(1.05); }
  50% { transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 20s infinite alternate ease-in-out;
}
</style>
