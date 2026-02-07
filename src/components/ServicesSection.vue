<template>
  <section class="bg-light relative py-20 sm:py-16 overflow-hidden" id="services">
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    
    <div class="w-[90%] max-w-[1200px] mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-montserrat font-bold text-4xl leading-tight mb-4 text-dark inline-block relative">
          Nos Services
          <span class="block w-20 h-1.5 bg-primary mt-2 mx-auto rounded-full"></span>
        </h2>
        <p class="text-dark-lighter mt-4 max-w-2xl mx-auto">
          Des solutions complètes et professionnelles adaptées à vos besoins personnels et professionnels.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link v-for="(service, index) in services" :key="index"
          :to="service.link"
          class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col h-full fade-in-section cursor-pointer"
          :style="{ animationDelay: `${index * 0.1}s` }">
          
          <div class="flex items-center justify-between mb-6">
            <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i :class="['fas', service.icon]"></i>
            </div>
            <span class="text-2xl font-bold text-gray-200 group-hover:text-primary/20 transition-colors duration-300">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>
          
          <h3 class="font-montserrat font-bold text-xl mb-4 text-dark group-hover:text-primary transition-colors duration-300">
            {{ service.title }}
          </h3>
          
          <ul class="space-y-3 flex-grow">
            <li v-for="(item, i) in service.items" :key="i"
              class="flex items-start text-sm text-dark-lighter">
              <i class="fas fa-check text-primary mt-1 mr-3 flex-shrink-0 text-xs"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '../data/services';

</script>
