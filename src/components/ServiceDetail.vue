<template>
  <div class="pt-24 pb-16 min-h-screen bg-light">
    <!-- Hero Banner -->
    <div class="bg-primary/5 py-12 mb-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob [animation-delay:-6s]"></div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
            <!-- Left: Text -->
            <div class="flex-1 text-center lg:text-left">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl shadow-lg mb-6 mx-auto lg:mx-0 opacity-0 animate-pop">
                  <i :class="['fas', service.icon, 'animate-floating']"></i>
              </div>
              <h1 class="font-montserrat font-bold text-4xl text-dark mb-4 leading-tight opacity-0 animate-fade-in-up [animation-delay:150ms]">{{ service.title }}</h1>
              <p class="text-dark-lighter text-lg max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-up [animation-delay:300ms]">{{ service.description }}</p>
            </div>

            <!-- Right: Image -->
            <div v-if="service.image" class="flex-1 max-w-md w-full" v-reveal="{ type: 'zoom', delay: 200 }">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl group animate-float-slow">
                <img
                  :src="service.image"
                  :alt="service.title"
                  class="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Details Column -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-500" v-reveal="'left'">
            <h2 class="font-montserrat font-bold text-2xl text-dark mb-6 border-b pb-4 border-gray-100">
                À propos de ce service
            </h2>
            <p class="text-dark-lighter leading-relaxed text-lg mb-8">
                {{ service.details }}
            </p>
            
            <div class="bg-primary/5 p-6 rounded-xl">
                <h3 class="font-montserrat font-bold text-lg text-primary mb-3">
                    Pourquoi nous choisir ?
                </h3>
                <ul class="space-y-2" v-stagger="'left'">
                    <li class="flex items-center text-dark-lighter">
                        <i class="fas fa-check-circle text-secondary mr-2"></i> Service professionnel
                    </li>
                    <li class="flex items-center text-dark-lighter">
                        <i class="fas fa-check-circle text-secondary mr-2"></i> Rapidité d'exécution
                    </li>
                    <li class="flex items-center text-dark-lighter">
                        <i class="fas fa-check-circle text-secondary mr-2"></i> Tarifs compétitifs
                    </li>
                </ul>
            </div>
        </div>

        <!-- Items Column -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-500" v-reveal="'right'">
             <h2 class="font-montserrat font-bold text-2xl text-dark mb-6 border-b pb-4 border-gray-100">
                Ce que nous proposons
            </h2>
            <ul class="space-y-4" v-stagger>
                <li v-for="(item, index) in service.items" :key="index" 
                    class="group flex items-start p-4 bg-gray-50 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-300">
                    <span class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mr-4 flex-shrink-0 font-bold transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                        {{ index + 1 }}
                    </span>
                    <span class="text-dark font-medium pt-1">{{ item }}</span>
                </li>
            </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center" v-reveal="'zoom'">
        <h3 class="font-montserrat font-bold text-2xl text-dark mb-6">Intéressé par ce service ?</h3>
        <router-link to="/#contact" v-ripple class="relative overflow-hidden inline-block bg-primary text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Contactez-nous maintenant
        </router-link>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { services } from '../data/services';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const service = computed(() => services.find(s => s.id === props.id) || services[0]);
</script>
