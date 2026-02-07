<template>
  <div class="pt-24 pb-16 min-h-screen bg-light">
    <!-- Hero Banner -->
    <div class="bg-primary/5 py-12 mb-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-primary text-3xl shadow-lg mb-6">
                <i :class="['fas', service.icon]"></i>
            </div>
            <h1 class="font-montserrat font-bold text-4xl text-dark mb-4">{{ service.title }}</h1>
            <p class="text-dark-lighter max-w-2xl mx-auto text-lg">{{ service.description }}</p>
        </div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Details Column -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
                <ul class="space-y-2">
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
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
             <h2 class="font-montserrat font-bold text-2xl text-dark mb-6 border-b pb-4 border-gray-100">
                Ce que nous proposons
            </h2>
            <ul class="space-y-4">
                <li v-for="(item, index) in service.items" :key="index" 
                    class="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <span class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mr-4 flex-shrink-0 font-bold">
                        {{ index + 1 }}
                    </span>
                    <span class="text-dark font-medium pt-1">{{ item }}</span>
                </li>
            </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <h3 class="font-montserrat font-bold text-2xl text-dark mb-6">Intéressé par ce service ?</h3>
        <router-link to="/contact" class="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            Contactez-nous maintenant
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { services } from '../data/services';

const route = useRoute();
const serviceId = route.params.id; // dynamic route approach could be better?

// For static pages, we can just pass the ID as a prop or deduce it.
// Here I'll make this a generic component that picks based on a prop, 
// OR I can just make separate files reusing this logic.
// Simplest given the task: Individual files that might import this or just have the code.
// Actually, let's just make specific files but copy-paste or import a base component. 
// Writing a reusable component is better.

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const service = computed(() => services.find(s => s.id === props.id) || services[0]);
</script>
