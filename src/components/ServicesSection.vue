<template>
  <section class="bg-light relative py-20 sm:py-16 overflow-hidden" id="services">
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob [animation-delay:-8s]"></div>
    
    <div class="w-[90%] max-w-[1200px] mx-auto px-4 relative z-10">
      <div class="text-center mb-16" v-reveal="'blur'">
        <h2 class="font-montserrat font-bold text-4xl leading-tight mb-4 text-dark inline-block relative">
          Nos Services
          <span class="block w-20 h-1.5 bg-primary mt-2 mx-auto rounded-full"></span>
        </h2>
        <p class="text-dark-lighter mt-4 max-w-2xl mx-auto">
          Des solutions complètes et professionnelles adaptées à vos besoins personnels et professionnels.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-stagger>
        <router-link v-for="(service, index) in services" :key="service.id"
          :to="service.link"
          v-tilt
          class="spotlight group bg-white rounded-2xl p-8 shadow-sm hover:shadow-premium transition-[box-shadow,translate,transform] duration-300 ease-out border border-gray-100 hover:border-primary/30 hover:-translate-y-2 flex flex-col h-full cursor-pointer overflow-hidden">

          <!-- Barre lumineuse en haut -->
          <span class="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></span>
          
          <div class="flex items-center justify-between mb-6">
            <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white group-hover:rotate-[8deg] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
              <i :class="['fas', service.icon]"></i>
            </div>
            <span class="text-2xl font-bold text-gray-200 group-hover:text-primary/30 group-hover:scale-125 transition-all duration-300">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>
          
          <h3 class="font-montserrat font-bold text-xl mb-4 text-dark group-hover:text-primary transition-colors duration-300">
            {{ service.title }}
          </h3>
          
          <ul class="space-y-3 flex-grow">
            <li v-for="(item, i) in service.items" :key="i"
              class="flex items-start text-sm text-dark-lighter transition-transform duration-300 group-hover:translate-x-1"
              :style="{ transitionDelay: `${i * 30}ms` }">
              <i class="fas fa-check text-primary mt-1 mr-3 flex-shrink-0 text-xs"></i>
              <span>{{ item }}</span>
            </li>
          </ul>

          <span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 transition-all duration-300">
            Découvrir
            <i class="fas fa-arrow-right text-xs"></i>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '../data/services';
</script>
